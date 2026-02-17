import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">Christine Nelson</h3>
            <p className="text-warm-400 text-sm leading-relaxed">
              Writer, creator, and lifestyle consultant helping people design lives they love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-400 mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Blog', 'Portfolio', 'Contact'].map((label) => (
                <Link
                  key={label}
                  href={`/${label.toLowerCase()}`}
                  className="block text-sm text-warm-300 hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-400 mb-3">Connect</h4>
            <div className="flex gap-4">
              {[
                { label: 'Instagram', icon: 'IG' },
                { label: 'Twitter', icon: 'TW' },
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
            <p className="mt-4 text-sm text-warm-400">hello@christinenelson.com</p>
          </div>
        </div>

        <div className="border-t border-warm-800 mt-8 pt-6 text-center text-xs text-warm-500">
          © {new Date().getFullYear()} Christine Nelson. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
