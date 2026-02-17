import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';
import { getSiteSettings } from '../../lib/queries';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a styling consultation with Christine Nelson. Personal styling, closet edits, and special event styling in Charlotte, NC.',
  openGraph: {
    title: 'Book a Consultation — Christine Nelson',
    description: 'Book a styling consultation with Christine Nelson in Charlotte, NC.',
    url: 'https://christine-nelson.vercel.app/contact',
  },
};

export const revalidate = 60;

export default async function Contact() {
  const settings = await getSiteSettings();

  const email = settings?.contactEmail || 'hello@christinenelson.com';
  const address = settings?.address || 'Charlotte, North Carolina';
  const socialLinks = settings?.socialLinks || [
    { platform: 'Instagram', url: '#' },
    { platform: 'Pinterest', url: '#' },
    { platform: 'LinkedIn', url: '#' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&h=600&fit=crop"
          alt="Contact Christine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-white/80 tracking-[0.3em] uppercase text-xs font-medium mb-4">Let&apos;s Work Together</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white">Book a Consultation</h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="grid md:grid-cols-5 gap-16">
              {/* Intake Form */}
              <div className="md:col-span-3">
                <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-3">Styling Intake Form</p>
                <h2 className="font-serif text-3xl font-semibold text-warm-900 mb-2">Tell Me About You</h2>
                <p className="text-warm-500 text-sm mb-10">Fill out the form below and I&apos;ll be in touch within 1–2 business days to schedule your consultation.</p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="personal-styling">Personal Styling</option>
                      <option value="closet-edit">Closet Edit & Organization</option>
                      <option value="special-event">Special Event Styling</option>
                      <option value="travel-packing">Travel & Packing Styling</option>
                      <option value="personal-shopping">Personal Shopping</option>
                      <option value="not-sure">Not Sure — I Need Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Occasion or Context</label>
                    <input
                      type="text"
                      id="occasion"
                      className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm"
                      placeholder="e.g., Upcoming wedding, career transition, everyday wardrobe refresh..."
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Style Goals & Notes</label>
                    <textarea
                      id="goals"
                      rows={5}
                      className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none text-sm"
                      placeholder="Tell me about your style goals, frustrations, or anything you'd like me to know..."
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-xs font-medium tracking-wider uppercase text-warm-600 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3.5 border border-warm-200 bg-white text-warm-900 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-4 bg-accent text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-accent-dark transition-colors btn-press"
                  >
                    Request Consultation
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-10">
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-warm-500 mb-3">Email</p>
                  <p className="text-warm-800">{email}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-warm-500 mb-3">Location</p>
                  <p className="text-warm-800">{address}</p>
                  <p className="text-warm-500 text-sm mt-1">Serving the greater Charlotte metro area. Virtual consultations also available.</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider uppercase text-warm-500 mb-3">Follow Along</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link: any) => (
                      <a
                        key={link.platform}
                        href={link.url || '#'}
                        className="text-sm text-accent hover:text-accent-dark transition-colors"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="bg-warm-100 p-8">
                  <h3 className="font-serif text-xl font-semibold text-warm-900 mb-3">What to Expect</h3>
                  <ul className="space-y-3 text-warm-600 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✦</span>
                      I&apos;ll reply within 1–2 business days
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✦</span>
                      We&apos;ll schedule a complimentary 15-minute discovery call
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✦</span>
                      I&apos;ll recommend the best service for your needs
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-0.5">✦</span>
                      No pressure — just a friendly conversation about your style goals
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
