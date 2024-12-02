import { Slideshow } from './Slideshow';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="relative">
      <Slideshow />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}