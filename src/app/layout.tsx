import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const siteUrl = 'https://christine-nelson.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Christine Nelson — Writer, Creator & Lifestyle Consultant',
    template: '%s — Christine Nelson',
  },
  description:
    'Helping people design lives they love through writing, creativity, and intentional living.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Christine Nelson',
    title: 'Christine Nelson — Writer, Creator & Lifestyle Consultant',
    description:
      'Helping people design lives they love through writing, creativity, and intentional living.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Christine Nelson' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christine Nelson — Writer, Creator & Lifestyle Consultant',
    description:
      'Helping people design lives they love through writing, creativity, and intentional living.',
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
