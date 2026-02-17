import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { getPage } from '../../lib/queries';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Christine Nelson — Charlotte\'s trusted personal stylist with over a decade of experience helping women look and feel their best.',
  openGraph: {
    title: 'About — Christine Nelson',
    description: 'Meet Christine Nelson — Charlotte\'s trusted personal stylist.',
    url: 'https://christine-nelson.vercel.app/about',
  },
};

export const revalidate = 60;

const credentials = [
  'Certified Image Consultant — Association of Image Consultants International (AICI)',
  'Fashion Institute of Technology — Fashion Styling Certificate',
  'UNC Charlotte — B.A. in Communications',
  'Color Analysis Certification — SciART',
  'Continuing education in fashion psychology & body-positive styling',
];

const press = [
  'Charlotte Observer — "Top Stylists to Know in Charlotte"',
  'Charlotte Today (WCNC) — Recurring Style Segment Guest',
  'Charlotte Magazine — "Best of Charlotte: Personal Services"',
  'StyleBlueprint — "How to Refresh Your Wardrobe This Season"',
  'SouthPark Magazine — Featured Stylist Profile',
];

const affiliations = [
  'Association of Image Consultants International (AICI)',
  'Charlotte Chamber of Commerce',
  'Women in Business Network — Charlotte Chapter',
  'Fashion Group International',
];

function extractText(body: any[]): string[] {
  if (!body) return [];
  return body
    .filter((b: any) => b._type === 'block')
    .map((b: any) => b.children?.map((c: any) => c.text).join('') || '');
}

export default async function About() {
  const aboutPage = await getPage('about');
  const storySection = aboutPage?.sections?.find((s: any) => s.sectionTitle === 'My Story');
  const storyParagraphs = storySection ? extractText(storySection.body) : [
    'My journey into personal styling started, like many great stories, completely by accident. Growing up in a small North Carolina town, I was always the friend everyone called before a job interview, a first date, or a big event. "What should I wear?" was the question I heard more than any other — and I loved answering it.',
    'After graduating from UNC Charlotte with a communications degree, I spent several years in fashion retail and visual merchandising. But I kept finding myself drawn to the one-on-one moments — the woman in the fitting room who finally found a dress that made her stand up straighter, the executive who realized her wardrobe could actually support her ambitions.',
    "That's when I knew: my calling wasn't just about clothes. It was about confidence, identity, and helping women see themselves the way the world already does — as capable, beautiful, and worthy of showing up fully.",
    "I pursued my certification through AICI, trained at the Fashion Institute of Technology, and launched my styling practice right here in Charlotte over a decade ago. Since then, I've had the honor of working with hundreds of women — from busy moms to C-suite executives — each one teaching me something new about what style really means.",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600&h=700&fit=crop"
          alt="About Christine Nelson"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-white/80 tracking-[0.3em] uppercase text-xs font-medium mb-4">About</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white">Meet Christine</h1>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
                    alt="Christine Nelson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium">My Story</p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-warm-900 leading-snug">
                  I believe that when you look your best, you feel empowered to be your best.
                </h2>
                <div className="space-y-4 text-warm-600 leading-relaxed">
                  {storyParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy — full-width image break */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&h=600&fit=crop"
          alt="Fashion editorial"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <FadeIn>
            <div className="text-center max-w-3xl">
              <p className="font-serif text-3xl md:text-5xl text-white leading-snug italic">
                &ldquo;Style isn&apos;t about following trends — it&apos;s about knowing who you are and dressing the part.&rdquo;
              </p>
              <p className="text-white/60 mt-6 text-sm tracking-wider uppercase">— Christine Nelson</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <div>
                <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-3">Credentials</p>
                <h2 className="font-serif text-3xl font-semibold text-warm-900 mb-8">Education & Training</h2>
                <ul className="space-y-4">
                  {credentials.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-warm-700 text-sm leading-relaxed">
                      <span className="text-accent mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop"
                    alt="Christine at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Press Mentions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <FadeIn>
              <div>
                <div className="aspect-[4/3] overflow-hidden mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=450&fit=crop"
                    alt="Press features"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-3">As Seen In</p>
                <h2 className="font-serif text-3xl font-semibold text-warm-900 mb-8">Press & Media</h2>
                <ul className="space-y-4">
                  {press.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-warm-700 text-sm leading-relaxed">
                      <span className="text-accent mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/press"
                  className="inline-block mt-8 text-accent text-xs font-medium tracking-[0.15em] uppercase hover:text-accent-dark transition-colors"
                >
                  View Full Press Page →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-24 bg-warm-100/50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <p className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-3">Community</p>
            <h2 className="font-serif text-3xl font-semibold text-warm-900 mb-12">Professional Affiliations</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {affiliations.map((item) => (
                <div key={item} className="bg-white p-6 text-warm-700 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-900 py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6">Ready to Find Your Style?</h2>
            <p className="text-warm-400 text-lg max-w-2xl mx-auto mb-10">
              I&apos;d love to learn about you, your lifestyle, and your goals. Let&apos;s start with a conversation.
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
