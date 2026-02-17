import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Writer · Creator · Consultant</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-warm-900 leading-tight mb-6">
            Design a Life<br />You Truly Love
          </h1>
          <p className="text-warm-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I help people find clarity, cultivate creativity, and build intentional lives through writing, storytelling, and thoughtful guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors"
            >
              Get to Know Me
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3.5 border-2 border-warm-400 text-warm-700 font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl font-bold text-warm-900 text-center mb-4">What I Do</h2>
        <p className="text-warm-500 text-center max-w-xl mx-auto mb-14">
          A blend of creativity, strategy, and heart — here&apos;s how I can help.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Writing & Content',
              desc: 'From personal essays to brand storytelling, I craft words that connect and inspire. Every piece is rooted in authenticity and purpose.',
              icon: '✍️',
            },
            {
              title: 'Lifestyle Consulting',
              desc: 'I work one-on-one with clients to simplify routines, set meaningful goals, and create space for what matters most in their lives.',
              icon: '🌿',
            },
            {
              title: 'Creative Direction',
              desc: 'Whether it\'s a brand refresh or a passion project, I bring a curated eye and strategic thinking to bring your vision to life.',
              icon: '🎨',
            },
          ].map(({ title, desc, icon }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-serif text-xl font-bold text-warm-900 mb-3">{title}</h3>
              <p className="text-warm-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-warm-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl leading-relaxed italic mb-8">
            &ldquo;Working with Christine completely shifted how I approach my mornings, my creativity, and honestly, my entire outlook. She has this rare gift of making the complex feel simple.&rdquo;
          </p>
          <p className="text-warm-400 font-medium">— Sarah M., Lifestyle Coaching Client</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-3xl font-bold text-warm-900 mb-4">Let&apos;s Create Something Together</h2>
        <p className="text-warm-500 max-w-xl mx-auto mb-8">
          Whether you&apos;re looking for a collaborator, a consultant, or just a fresh perspective — I&apos;d love to hear from you.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 bg-accent text-white font-medium rounded-full hover:bg-accent-dark transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
