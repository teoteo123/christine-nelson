import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '../components/FadeIn';
import { getBlogPosts } from '../../lib/queries';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Essays and reflections on creativity, intentional living, and finding beauty in the everyday by Christine Nelson.',
  openGraph: {
    title: 'Blog — Christine Nelson',
    description: 'Essays and reflections on creativity, intentional living, and finding beauty in the everyday.',
    url: 'https://christine-nelson.vercel.app/blog',
  },
};

export const revalidate = 60;

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function Blog() {
  const posts = await getBlogPosts();

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
          {posts.map((post: any) => (
            <FadeIn key={post._id}>
            <article className="py-10 first:pt-0 last:pb-0 group">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-warm-400 mb-3">
                <span className="text-accent font-medium">{post.category}</span>
                <span>·</span>
                <span>{post.publishedAt ? formatDate(post.publishedAt) : ''}</span>
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
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
