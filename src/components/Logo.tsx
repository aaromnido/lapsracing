import logoImage from '../assets/images/logo-laps.svg';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="LAPS Racing" 
        className="h-8"
      />
    </div>
  );
}