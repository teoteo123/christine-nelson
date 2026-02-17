import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const siteUrl = 'https://christine-nelson.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Christine Nelson — Personal Stylist, Charlotte NC',
    template: '%s — Christine Nelson',
  },
  description:
    'Charlotte\'s premier personal stylist. Wardrobe consulting, closet edits, personal shopping, and special event styling.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Christine Nelson',
    title: 'Christine Nelson — Personal Stylist, Charlotte NC',
    description:
      'Charlotte\'s premier personal stylist. Wardrobe consulting, closet edits, personal shopping, and special event styling.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Christine Nelson' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christine Nelson — Personal Stylist, Charlotte NC',
    description:
      'Charlotte\'s premier personal stylist. Wardrobe consulting, closet edits, personal shopping, and special event styling.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
