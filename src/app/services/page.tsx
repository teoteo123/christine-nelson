import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { getServices } from '../../lib/queries';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Personal styling services in Charlotte, NC — wardrobe consulting, closet edits, special event styling, travel packing, and personal shopping.',
  openGraph: {
    title: 'Services — Christine Nelson',
    description: 'Personal styling services in Charlotte, NC.',
    url: 'https://christine-nelson.vercel.app/services',
  },
};

const serviceImages: Record<string, string> = {
  'Personal Styling': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
  'Closet Edit & Organization': 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop',
  'Special Event Styling': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop',
  'Travel & Packing Styling': 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
  'Personal Shopping': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop',
};

export const revalidate = 60;

export default async function Services() {
  const services = await getServices();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&h=700&fit=crop"
          alt="Styling services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-white/80 tracking-[0.3em] uppercase text-xs font-medium mb-4">What I Offer</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-4">Services</h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Personalized styling experiences designed to elevate your confidence and simplify your life.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8 space-y-32">
          {services.map((service: any, i: number) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={service._id}>
                <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'md:direction-rtl' : ''}`}>
                  <div className={`${reverse ? 'md:order-2' : ''}`}>
                    <div className="overflow-hidden">
                      <img
                        src={serviceImages[service.title] || 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop'}
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className={`${reverse ? 'md:order-1' : ''}`}>
                    <p className="text-accent tracking-[0.2em] uppercase text-xs font-medium mb-3">0{i + 1}</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 mb-6">{service.title}</h2>
                    <p className="text-warm-600 leading-relaxed mb-8">{service.description}</p>
                    {service.whatsIncluded && service.whatsIncluded.length > 0 && (
                      <div className="mb-8">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-warm-500 mb-4">What&apos;s Included</p>
                        <ul className="space-y-2">
                          {service.whatsIncluded.map((item: string) => (
                            <li key={item} className="flex items-start gap-3 text-warm-700 text-sm">
                              <span className="text-accent mt-0.5">✦</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3.5 bg-accent text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
                    >
                      {service.ctaText || 'Book This Service'}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-900 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6">Not Sure Where to Start?</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a complimentary consultation and we&apos;ll find the perfect service for your needs, goals, and budget.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
            >
              Book a Free Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
