import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Background } from './Background';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Background>
      <div className="relative mx-auto min-h-screen max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mt-24 sm:mt-20 max-w-3xl">
          <h1 className="mb-8 text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white w-full leading-[1.1]">
            We are building the Strava for Motorsport
          </h1>
          <div className="max-w-[44rem]">
            <h2 className="mb-1 sm:mb-1 text-3xl text-gray-300 w-full">
              Track your performance, connect with motorsport enthusiasts, and elevate your experience.
            </h2>
            <p className="mb-10 sm:mb-8 text-2lg text-gray-400">
              Laps stores all your track day data so you can remember, review, share, compare,<br></br> check stats and improve.
            </p>
            <Button size="large" onClick={() => setIsModalOpen(true)}>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Background>
  );
}