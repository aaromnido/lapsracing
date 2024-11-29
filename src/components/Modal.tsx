import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/50 p-4">
      <div className="relative w-full max-w-lg rounded-lg bg-white p-8 sm:p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 sm:right-4 sm:top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-7 w-7 sm:h-6 sm:w-6" />
        </button>
        <h2 className="mb-6 sm:mb-4 text-3xl sm:text-2xl font-bold text-brand-dark">
          Join the Motorsport Revolution!
        </h2>
        <p className="mb-8 sm:mb-6 text-xl sm:text-base text-gray-600">
          We are building something incredible, and we'd love for you to be part of it.
        </p>
        <Button variant="primary" size="large" onClick={onClose}>
          Got it
        </Button>
      </div>
    </div>
  );
}