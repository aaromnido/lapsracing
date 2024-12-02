// Imports
import { useEffect, useState } from 'react';
import heroPicture1 from '../assets/images/hero-picture-1.webp';
import heroPicture2 from '../assets/images/hero-picture-2.webp';
import heroPicture3 from '../assets/images/hero-picture-3.webp';
import heroPicture4 from '../assets/images/hero-picture-4.webp';

// Defining images array
const images = [
  heroPicture1,
  heroPicture2,
  heroPicture3,
  heroPicture4,
];

export function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Preload images Effect
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setLoaded(true))
        .catch(console.error);
    };

    preloadImages();
  }, []);

  // Image rotation
  useEffect(() => {
    if (!loaded) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [loaded]);

  if (!loaded) {
    return (
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroPicture1})` }}
      >
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>
    );
  }

  // Image transition
  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-brand-dark/70" />
    </div>
  );
}
