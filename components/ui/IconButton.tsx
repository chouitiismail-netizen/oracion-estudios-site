import Link from 'next/link';
import { ReactNode } from 'react';

interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href: string;
}

export default function IconButton({ icon, label, href }: IconButtonProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-[var(--border)] transition-colors group"
    >
      <div className="w-10 h-10 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="text-xs font-medium text-[var(--foreground)] text-center">{label}</span>
    </Link>
  );
}
