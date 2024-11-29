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
          <h1 className="grid mb-8 text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white w-full leading-[1.1]">
            <span>We are building the</span>
            <span>Strava for Motorsport</span>
          </h1>
          <p className="grid mb-10 sm:mb-8 text-2xl sm:text-xl text-gray-300 w-full">
            <span>Track your performance, connect with motorsport enthusiasts,</span>
            <span>and elevate your experience.</span>
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