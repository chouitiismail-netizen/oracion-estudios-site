import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClass = hover ? 'card-shadow-hover cursor-pointer' : '';

  return (
    <div className={`bg-[var(--card)] border border-[var(--border)] rounded-[20px] p-5 card-shadow ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
