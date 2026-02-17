import type { Metadata } from 'next';
import FadeIn from '../components/FadeIn';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Selected work by Christine Nelson — writing, brand strategy, creative direction, and lifestyle consulting projects.',
  openGraph: {
    title: 'Portfolio — Christine Nelson',
    description: 'Selected work by Christine Nelson — writing, brand strategy, creative direction, and more.',
    url: 'https://christine-nelson.vercel.app/portfolio',
  },
};

const projects = [
  {
    title: 'Bloom & Co. Brand Refresh',
    category: 'Creative Direction',
    desc: 'Led the complete brand overhaul for a boutique wellness studio — from visual identity to voice and messaging. The result was a cohesive, warm brand that tripled their social following in six months.',
    color: 'bg-warm-200',
  },
  {
    title: 'The Intentional Home Series',
    category: 'Writing',
    desc: 'A twelve-part editorial series for Dwell & Gather Magazine exploring how our living spaces shape our mental health, creativity, and relationships.',
    color: 'bg-sage-light/40',
  },
  {
    title: 'Personal Brand Strategy — Amara Lee',
    category: 'Consulting',
    desc: 'Worked with lifestyle influencer Amara Lee to define her brand pillars, refine her content strategy, and launch a newsletter that hit 10K subscribers in its first quarter.',
    color: 'bg-warm-100',
  },
  {
    title: 'Morning Pages Workshop',
    category: 'Workshop',
    desc: 'Designed and facilitated a sold-out virtual workshop guiding 200+ participants through building a sustainable morning writing practice. Rated 4.9/5 by attendees.',
    color: 'bg-warm-200',
  },
  {
    title: 'Nourish Collective Cookbook',
    category: 'Writing & Editing',
    desc: 'Ghostwrote and edited a 180-page seasonal cookbook for a farm-to-table collective, weaving personal narrative through every chapter to bring the recipes to life.',
    color: 'bg-sage-light/40',
  },
  {
    title: 'Quarterly Reset Planner',
    category: 'Product Design',
    desc: 'Created a beautifully designed digital planner focused on reflection, goal-setting, and intentional living — downloaded over 5,000 times in its first month.',
    color: 'bg-warm-100',
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="bg-warm-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Portfolio</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">Selected Work</h1>
            <p className="text-warm-500 mt-4 max-w-xl mx-auto">
              A curated collection of projects spanning writing, brand strategy, creative direction, and more.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={(i % 2) * 150}>
            <div
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover-lift transition-shadow h-full"
            >
              {/* Image placeholder */}
              <div className={`aspect-[16/9] ${project.color} flex items-center justify-center`}>
                <span className="text-warm-400 text-5xl opacity-50">✦</span>
              </div>
              <div className="p-8">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="font-serif text-xl font-bold text-warm-900 mt-2 mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
