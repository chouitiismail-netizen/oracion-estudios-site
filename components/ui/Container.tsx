import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg';
}

export default function Container({ children, className = '', maxWidth = 'sm' }: ContainerProps) {
  const widths = {
    sm: 'max-w-md',    // ~448px (mobile-first JC style)
    md: 'max-w-2xl',   // ~672px (article reading)
    lg: 'max-w-4xl',   // ~896px (wide layouts)
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 w-full ${widths[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}
