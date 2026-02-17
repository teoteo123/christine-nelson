import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Christine Nelson — writer, creative consultant, and lifestyle strategist helping people and brands tell their stories with clarity and warmth.',
  openGraph: {
    title: 'About — Christine Nelson',
    description: 'Learn about Christine Nelson — writer, creative consultant, and lifestyle strategist.',
    url: 'https://christine-nelson.vercel.app/about',
  },
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">About Me</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">The Story Behind the Work</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <FadeIn>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo placeholder */}
          <div className="md:col-span-2">
            <div className="aspect-[3/4] bg-warm-200 rounded-2xl flex items-center justify-center text-warm-400">
              <span className="text-6xl">📷</span>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-3 space-y-5 text-warm-700 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-warm-900">Hi, I&apos;m Christine.</h2>
            <p>
              I&apos;m a writer, creative consultant, and lifestyle strategist based on the East Coast. For over a decade, I&apos;ve been helping individuals and brands tell their stories with clarity and warmth — whether that&apos;s through a beautifully written essay, a reimagined daily routine, or a brand identity that finally feels right.
            </p>
            <p>
              My journey started in journalism, where I spent years writing for regional magazines and online publications covering everything from food culture to interior design. Somewhere along the way, I realized the stories I loved most weren&apos;t about trends — they were about people finding meaning in the everyday.
            </p>
            <p>
              That realization led me to pivot into consulting. Today I work with clients one-on-one, helping them untangle the noise and build lives and brands that reflect who they actually are. I also write regularly on my blog about intentional living, creativity, and the small shifts that make a big difference.
            </p>
            <p>
              When I&apos;m not working, you&apos;ll find me testing a new recipe, rearranging my bookshelves (again), taking long walks with my dog Margot, or hunting for vintage ceramics at flea markets.
            </p>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
          <h2 className="font-serif text-3xl font-bold text-warm-900 text-center mb-12">What I Believe In</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: 'Intentionality', desc: 'Every choice is a chance to align closer to what matters.' },
              { title: 'Authenticity', desc: 'The best stories — and the best lives — are honest ones.' },
              { title: 'Simplicity', desc: 'Clarity comes from stripping away what doesn\'t serve you.' },
              { title: 'Joy', desc: 'Life is too short not to celebrate the small, beautiful moments.' },
            ].map(({ title, desc }) => (
              <div key={title} className="text-center">
                <h3 className="font-serif text-lg font-bold text-warm-900 mb-2">{title}</h3>
                <p className="text-warm-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
