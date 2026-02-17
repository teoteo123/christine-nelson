import Link from 'next/link';
import FadeIn from './components/FadeIn';

const services = [
  {
    title: 'Personal Styling',
    desc: 'A curated wardrobe that reflects your lifestyle, body, and personal brand.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
  },
  {
    title: 'Closet Edit',
    desc: 'Transform your closet into a streamlined collection of pieces you actually love.',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop',
  },
  {
    title: 'Special Event Styling',
    desc: 'Look unforgettable for weddings, galas, date nights, and everything in between.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop',
  },
];

const testimonials = [
  {
    name: 'Jennifer W.',
    location: 'Charlotte, NC',
    stars: 5,
    quote: 'Christine completely transformed my wardrobe — and my confidence. I get compliments every single day now. She has an incredible eye for what works with your body type and lifestyle.',
  },
  {
    name: 'Amanda K.',
    location: 'Charlotte, NC',
    stars: 5,
    quote: 'The closet edit was life-changing. I went from a closet stuffed with clothes I never wore to a curated collection where everything works together. Best investment I\'ve made in myself.',
  },
  {
    name: 'Rachel D.',
    location: 'Waxhaw, NC',
    stars: 5,
    quote: 'I hired Christine for my daughter\'s wedding and I have never felt more beautiful. She understood exactly what I wanted — elegant but not overdone. Truly a gifted stylist.',
  },
  {
    name: 'Melissa T.',
    location: 'Charlotte, NC',
    stars: 5,
    quote: 'As a busy executive, I needed a professional wardrobe that felt polished but still like me. Christine nailed it. She even taught me how to mix and match pieces I already owned.',
  },
  {
    name: 'Laura B.',
    location: 'Huntersville, NC',
    stars: 5,
    quote: 'I was dreading packing for a two-week European trip until Christine stepped in. She created a capsule travel wardrobe that was stylish, versatile, and fit in a carry-on!',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — Full-width image with overlay */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&h=900&fit=crop"
          alt="Fashion lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-white/80 font-medium tracking-[0.3em] uppercase text-sm mb-6">Charlotte&apos;s Premier Personal Stylist</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] mb-8">
              Elevate Your<br />Personal Style
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              Personalized styling services that help you look and feel your most confident, authentic self — every single day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-accent text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-white/60 text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-colors btn-press"
              >
                View Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-6">Welcome</p>
            <h2 className="font-serif text-3xl md:text-5xl text-warm-900 leading-snug mb-8">
              Your style should tell your story — I&apos;m here to help you write it.
            </h2>
            <p className="text-warm-600 text-lg leading-relaxed max-w-2xl mx-auto">
              I&apos;m Christine Nelson, a personal stylist based in Charlotte, North Carolina. I work with women who want to feel polished, confident, and effortlessly put-together — without spending hours figuring out what to wear.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Preview — Alternating full-width */}
      <section className="bg-warm-100/50">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium text-center mb-4">What I Offer</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-warm-900 text-center mb-16">Styling Services</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 120}>
                <div className="group bg-white overflow-hidden shadow-sm hover:shadow-lg hover-lift transition-all h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-semibold text-warm-900 mb-3">{service.title}</h3>
                    <p className="text-warm-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <Link
                      href="/services"
                      className="text-accent text-xs font-medium tracking-[0.15em] uppercase hover:text-accent-dark transition-colors"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/services"
              className="inline-block px-10 py-4 border border-warm-400 text-warm-700 text-sm font-medium tracking-[0.15em] uppercase hover:bg-warm-900 hover:text-white hover:border-warm-900 transition-all btn-press"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Image Break */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=600&fit=crop"
          alt="Fashion editorial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <FadeIn>
            <div className="text-center px-6">
              <p className="font-serif text-3xl md:text-5xl text-white leading-snug italic max-w-3xl">
                &ldquo;Style is a way to say who you are without having to speak.&rdquo;
              </p>
              <p className="text-white/60 mt-4 text-sm tracking-wider uppercase">— Rachel Zoe</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium text-center mb-4">Client Love</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-warm-900 text-center mb-16">What My Clients Say</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <div className="bg-white p-8 shadow-sm h-full flex flex-col">
                  <div className="star-gold text-lg mb-4">
                    {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
                  </div>
                  <p className="text-warm-700 text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-warm-900 text-sm">{t.name}</p>
                    <p className="text-warm-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-900 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-6">Ready to Transform Your Style?</p>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-snug mb-8">
              Let&apos;s Create Your Signature Look
            </h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you&apos;re refreshing your everyday wardrobe or preparing for a special occasion, I&apos;m here to make the process effortless and enjoyable.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
            >
              Book a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
