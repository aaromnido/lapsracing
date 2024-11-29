interface BackgroundProps {
  children: React.ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.imgur.com/v19XvXm.png)',
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/70" />
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}