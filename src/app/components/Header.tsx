'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/press', label: 'Press' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-100/60">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl md:text-3xl font-semibold text-warm-900 tracking-wide hover:text-accent transition-colors">
          Christine Nelson
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-accent nav-link-animated ${
                pathname === href ? 'text-accent' : 'text-warm-600'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-6 py-2.5 bg-accent text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-warm-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-warm-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-warm-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-cream border-t border-warm-100 px-8 py-6 space-y-4 animate-fade-in">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent ${
                pathname === href ? 'text-accent' : 'text-warm-700'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-2 px-6 py-2.5 bg-accent text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
