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
          <h1 className="mb-8 text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            We are building the Strava for Motorsport.
          </h1>
          <p className="mb-10 sm:mb-8 text-2xl sm:text-xl text-gray-300">
            Track your performance, connect with motorsport enthusiasts, and elevate
            your experience.
          </p>
          <Button size="large" onClick={() => setIsModalOpen(true)}>
            Learn More
          </Button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Background>
  );
}