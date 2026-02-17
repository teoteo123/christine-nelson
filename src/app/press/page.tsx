import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { getPressFeatures } from '../../lib/queries';

export const metadata: Metadata = {
  title: 'Press & Media',
  description: 'Christine Nelson in the press — featured publications, TV appearances, and speaking engagements.',
  openGraph: {
    title: 'Press & Media — Christine Nelson',
    description: 'Christine Nelson in the press — publications, TV, and speaking.',
    url: 'https://christine-nelson.vercel.app/press',
  },
};

export const revalidate = 60;

function getYear(dateStr: string) {
  return new Date(dateStr).getFullYear().toString();
}

export default async function Press() {
  const allFeatures = await getPressFeatures();

  const publications = allFeatures.filter((f: any) => f.type === 'print');
  const tvAppearances = allFeatures.filter((f: any) => f.type === 'tv');
  const speaking = allFeatures.filter((f: any) => f.type === 'speaking');

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=1600&h=700&fit=crop"
          alt="Press and media"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-white/80 tracking-[0.3em] uppercase text-xs font-medium mb-4">In the Spotlight</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white">Press & Media</h1>
          </FadeIn>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium text-center mb-4">Featured In</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-warm-900 text-center mb-16">Publications</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub: any, i: number) => (
              <FadeIn key={pub._id} delay={i * 80}>
                <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">{pub.subtype} · {pub.date ? getYear(pub.date) : ''}</p>
                  <h3 className="font-serif text-xl font-semibold text-warm-900 mb-3">{pub.publicationName}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed flex-1">&ldquo;{pub.title}&rdquo;</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TV & Media */}
      <section className="py-24 bg-warm-100/50">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium text-center mb-4">On Screen</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-warm-900 text-center mb-16">TV & Media Appearances</h2>
          </FadeIn>
          <div className="max-w-4xl mx-auto space-y-6">
            {tvAppearances.map((appearance: any, i: number) => (
              <FadeIn key={appearance._id} delay={i * 80}>
                <div className="bg-white p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-warm-900">{appearance.publicationName}</h3>
                    <p className="text-warm-600 text-sm mt-1">{appearance.topic || appearance.title}</p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-warm-400 text-xs tracking-wider uppercase">{appearance.subtype}</span>
                    <span className="text-accent font-medium text-sm">{appearance.date ? getYear(appearance.date) : ''}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium text-center mb-4">On Stage</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-warm-900 text-center mb-16">Speaking Engagements</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speaking.map((event: any, i: number) => (
              <FadeIn key={event._id} delay={i * 80}>
                <div className="bg-white p-8 shadow-sm h-full">
                  <p className="text-accent text-xs font-medium tracking-[0.15em] uppercase mb-2">{event.date ? getYear(event.date) : ''}</p>
                  <h3 className="font-serif text-lg font-semibold text-warm-900 mb-3">{event.publicationName}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{event.topic || event.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Inquiry CTA */}
      <section className="bg-warm-900 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6">Press Inquiries</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              For media appearances, interviews, or speaking engagements, please get in touch. I&apos;d love to collaborate.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
