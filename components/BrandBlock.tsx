import Link from 'next/link';

export default function BrandBlock() {
  return (
    <Link href="/" className="flex flex-col group" aria-label="Ir a la página principal">
      <span className="text-base md:text-lg font-bold text-[var(--foreground)] font-[var(--font-serif)] group-hover:text-[var(--accent)] transition-colors">
        Oraciones por los estudios
      </span>
      <span className="text-xs text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
        Fe y confianza académica
      </span>
    </Link>
  );
}
