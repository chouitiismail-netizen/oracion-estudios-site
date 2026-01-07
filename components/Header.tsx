import Link from 'next/link';
import BrandBlock from './BrandBlock';
import { getLegalHrefMap } from '../lib/content';

export default function Header() {
  const legalHrefs = getLegalHrefMap();

  return (
    <header className="sticky top-0 z-50 bg-[var(--card)] border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Left: Brand Block */}
          <BrandBlock />

          {/* Right: Navigation + CTA */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Navigation Links - hidden on mobile, visible on tablet+ */}
            <nav className="hidden md:flex items-center gap-4" aria-label="Navegación principal">
              <Link
                href="/"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                Inicio
              </Link>
              {legalHrefs.avisoLegalHref && (
                <Link
                  href={legalHrefs.avisoLegalHref}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Aviso Legal
                </Link>
              )}
              {legalHrefs.privacidadHref && (
                <Link
                  href={legalHrefs.privacidadHref}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  Privacidad
                </Link>
              )}
            </nav>

            {/* CTA Button - always visible */}
            <a
              href="https://www.jesuscontigo.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow-md"
              aria-label="Visitar Jesús Contigo (se abre en una nueva pestaña)"
            >
              Jesús Contigo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
