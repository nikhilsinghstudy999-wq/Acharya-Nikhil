// safeReplace – prevents crashes on undefined/null
function safeReplace(str, pattern, replacement) {
  return typeof str === 'string' ? safeReplace(str, pattern, replacement) : '';
}


import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const displayName = slug && typeof slug === 'string' ? safeReplace(slug, /-/g, ' ') : 'Blog';
  return {
    title: `${displayName} – Acharya Nikhil Shastri Blog`,
    description: `Read about ${displayName} with powerful Vedic remedies.`,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const displayName = slug && typeof slug === 'string' ? safeReplace(slug, /-/g, ' ') : 'Untitled';
  return (
    <main className="min-h-screen cosmic-gradient py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/blog" className="text-orange-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
        <article className="glass-card-dark p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-orange-800 mb-6 capitalize">{displayName}</h1>
          <div className="prose prose-lg text-gray-800">
            <p>Full article on {displayName} will be available soon.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
