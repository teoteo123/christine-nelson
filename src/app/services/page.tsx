import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Personal styling services in Charlotte, NC — wardrobe consulting, closet edits, special event styling, travel packing, and personal shopping.',
  openGraph: {
    title: 'Services — Christine Nelson',
    description: 'Personal styling services in Charlotte, NC.',
    url: 'https://christine-nelson.vercel.app/services',
  },
};

const services = [
  {
    title: 'Personal Styling',
    desc: 'A comprehensive styling experience tailored to your lifestyle, body type, coloring, and personal goals. Together we\'ll define your signature style and build a wardrobe that makes getting dressed effortless and exciting.',
    includes: [
      'In-depth style consultation & lifestyle assessment',
      'Color and body analysis',
      'Personalized style guide & mood board',
      'Curated outfit recommendations',
      'Shopping list with links to purchase',
      'Two follow-up styling check-ins',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop',
    reverse: false,
  },
  {
    title: 'Closet Edit & Organization',
    desc: 'Transform your overflowing closet into a curated, functional wardrobe. We\'ll go through every piece together — keeping what works, releasing what doesn\'t, and identifying gaps to fill. You\'ll walk away with a closet that sparks joy.',
    includes: [
      'Full wardrobe audit & assessment',
      'Keep, donate, and consign sorting',
      'Outfit creation from existing pieces',
      'Gap analysis & shopping recommendations',
      'Organization system setup',
      'Seasonal rotation guidance',
    ],
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=500&fit=crop',
    reverse: true,
  },
  {
    title: 'Special Event Styling',
    desc: 'Whether it\'s a wedding, gala, work conference, or milestone birthday — look and feel absolutely unforgettable. I\'ll help you find the perfect outfit and coordinate every detail from head to toe.',
    includes: [
      'Event & dress code consultation',
      'Outfit sourcing & selection',
      'Accessories, shoes & jewelry coordination',
      'Hair & makeup style direction',
      'Fitting coordination',
      'Day-of styling support available',
    ],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop',
    reverse: false,
  },
  {
    title: 'Travel & Packing Styling',
    desc: 'Never overpack again. I\'ll create a chic, versatile capsule wardrobe for your trip — whether it\'s a weekend getaway or a month-long adventure. Every piece works together for maximum outfit combinations with minimal luggage.',
    includes: [
      'Destination & itinerary review',
      'Custom capsule wardrobe plan',
      'Mix-and-match outfit guide',
      'Packing checklist & layout',
      'Weather-appropriate recommendations',
      'Shopping for any needed pieces',
    ],
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop',
    reverse: true,
  },
  {
    title: 'Personal Shopping',
    desc: 'Hate shopping? Love shopping but always buy the wrong things? Let me do the heavy lifting. I\'ll source pieces that fit your style, budget, and lifestyle — so you can skip the overwhelm and go straight to looking amazing.',
    includes: [
      'Pre-shopping style consultation',
      'Curated selections based on your needs & budget',
      'In-store accompanied shopping or virtual shopping',
      'Outfit styling & try-on session',
      'Returns & exchanges coordination',
      'Ongoing seasonal refresh packages available',
    ],
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=500&fit=crop',
    reverse: false,
  },
];

export default function Services() {
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
          {services.map((service, i) => (
            <FadeIn key={service.title}>
              <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${service.reverse ? 'md:direction-rtl' : ''}`}>
                <div className={`${service.reverse ? 'md:order-2' : ''}`}>
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={`${service.reverse ? 'md:order-1' : ''}`}>
                  <p className="text-accent tracking-[0.2em] uppercase text-xs font-medium mb-3">0{i + 1}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 mb-6">{service.title}</h2>
                  <p className="text-warm-600 leading-relaxed mb-8">{service.desc}</p>
                  <div className="mb-8">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-warm-500 mb-4">What&apos;s Included</p>
                    <ul className="space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-warm-700 text-sm">
                          <span className="text-accent mt-0.5">✦</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3.5 bg-accent text-white text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
                  >
                    Book This Service
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
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
