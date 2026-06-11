import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const displayName = slug ? slug.replace(/-/g, ' ') : 'Blog';
  return { title: `${displayName} – Acharya Nikhil Shastri Blog` };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const displayName = slug ? slug.replace(/-/g, ' ') : 'Untitled';
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/blog" className="text-orange-600 hover:underline mb-4 inline-block">← Back to Blog</Link>
      <h1 className="text-4xl font-serif text-orange-800 capitalize">{displayName}</h1>
      <p className="mt-4 text-gray-600">Full article coming soon.</p>
    </div>
  );
}
