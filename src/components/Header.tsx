import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed top-0 z-10 w-full py-[1rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/[0.25] to-brand-dark/0 backdrop-blur-md"></div>
      <div className="relative mx-auto flex h-20 sm:h-16 max-w-7xl items-center px-6 sm:px-4 lg:px-8">
        <Logo />
      </div>
    </header>
  );
}