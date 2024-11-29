interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'default',
  children, 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90 focus:ring-brand-primary',
    secondary: 'bg-white text-brand-dark hover:bg-gray-50 focus:ring-white',
  };

  const sizes = {
    default: 'px-6 py-3 text-lg',
    large: 'px-8 py-4 text-xl sm:text-lg sm:px-6 sm:py-3',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}