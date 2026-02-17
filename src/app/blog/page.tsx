import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Blog — Christine Nelson' };

const posts = [
  {
    slug: 'morning-rituals',
    title: 'The Morning Rituals That Changed Everything',
    excerpt: 'I used to wake up reaching for my phone. Now my mornings look completely different — and it started with one tiny shift that took less than five minutes.',
    date: 'January 12, 2026',
    category: 'Intentional Living',
    readTime: '5 min read',
  },
  {
    slug: 'creative-block',
    title: 'What I Do When the Creative Well Runs Dry',
    excerpt: 'Creative blocks aren\'t the enemy — they\'re a signal. Here\'s how I\'ve learned to listen to them instead of fighting through, and why that makes all the difference.',
    date: 'December 28, 2025',
    category: 'Creativity',
    readTime: '7 min read',
  },
  {
    slug: 'slow-living',
    title: 'Slow Living Isn\'t What You Think It Is',
    excerpt: 'It\'s not about doing less or moving to the countryside. Slow living is a mindset shift — and it\'s more accessible (and more radical) than Instagram makes it look.',
    date: 'December 5, 2025',
    category: 'Lifestyle',
    readTime: '6 min read',
  },
  {
    slug: 'home-reset',
    title: 'A Weekend Home Reset That Actually Sticks',
    excerpt: 'Forget the 30-day declutter challenges. This simple weekend reset focuses on systems, not purging — and it\'s transformed how my home feels day to day.',
    date: 'November 18, 2025',
    category: 'Home & Space',
    readTime: '4 min read',
  },
  {
    slug: 'writing-practice',
    title: 'Why Everyone Needs a Writing Practice (Even If You\'re Not a Writer)',
    excerpt: 'Writing isn\'t just for published authors. It\'s one of the most powerful tools for self-awareness, clarity, and processing the beautiful mess of being human.',
    date: 'October 30, 2025',
    category: 'Writing',
    readTime: '8 min read',
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-warm-100 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">The Blog</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-warm-900">Thoughts on Living Well</h1>
          <p className="text-warm-500 mt-4 max-w-xl mx-auto">
            Essays and reflections on creativity, intentional living, and finding beauty in the everyday.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-0 divide-y divide-warm-200">
          {posts.map((post) => (
            <article key={post.slug} className="py-10 first:pt-0 last:pb-0 group">
              <div className="flex items-center gap-3 text-sm text-warm-400 mb-3">
                <span className="text-accent font-medium">{post.category}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-warm-900 group-hover:text-accent transition-colors mb-3">
                <Link href="#">{post.title}</Link>
              </h2>
              <p className="text-warm-600 leading-relaxed mb-4">{post.excerpt}</p>
              <Link href="#" className="text-accent font-medium text-sm hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
