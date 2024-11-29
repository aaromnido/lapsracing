import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full bg-brand-dark/90 backdrop-blur">
      <div className="mx-auto flex h-20 sm:h-16 max-w-7xl items-center px-6 sm:px-4 lg:px-8">
        <Logo />
      </div>
    </header>
  );
}