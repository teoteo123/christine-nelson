import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200 mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">Christine Nelson</h3>
            <p className="text-warm-400 text-sm leading-relaxed">
              Charlotte&apos;s premier personal stylist — helping you look and feel your most confident self.
            </p>
            <p className="mt-4 text-sm text-warm-400">hello@christinenelson.com</p>
            <p className="text-sm text-warm-400">Charlotte, NC</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-400 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Press', href: '/press' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-sm text-warm-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-400 mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { label: 'Instagram', icon: 'IG' },
                { label: 'Pinterest', icon: 'PI' },
                { label: 'LinkedIn', icon: 'LI' },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-warm-800 flex items-center justify-center text-xs font-bold text-warm-400 hover:bg-accent hover:text-white transition-all"
                >
                  {icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block px-6 py-2.5 border border-warm-400 text-warm-300 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white hover:text-warm-900 transition-all"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-12 pt-8 text-center text-xs text-warm-500">
          © {new Date().getFullYear()} Christine Nelson. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
