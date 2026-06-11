import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astrology Blog – Vedic Insights, Remedies | Acharya Nikhil Shastri',
  description: 'Explore expert articles on Vedic astrology, planetary transits, kundli, and powerful remedies by Acharya Nikhil Shastri.',
};

const articles = [
  {
    slug: 'saturn-transit-2026-effects',
    title: 'Saturn Transit 2026 – Effects on All 12 Signs',
    excerpt: 'Understand how Shani’s movement will shape your year ahead.',
  },
  {
    slug: 'jupiter-in-taurus-remedies',
    title: 'Jupiter in Taurus – Powerful Remedies for Prosperity',
    excerpt: 'Unlock abundance with Vedic remedies during Guru’s transit.',
  },
  {
    slug: 'solar-eclipse-astrology',
    title: 'Solar Eclipse 2026 – What It Means for Your Zodiac',
    excerpt: 'Learn the spiritual significance of the upcoming eclipse.',
  },
  {
    slug: 'mangal-dosh-remedies',
    title: 'Mangal Dosh (Mars Affliction) – Causes and Remedies',
    excerpt: 'How to pacify Mangal Dosh for a harmonious life.',
  },
  {
    slug: 'ketu-mahadasha-effects',
    title: 'Ketu Mahadasha – Spiritual Awakening and Challenges',
    excerpt: 'Navigate the transformative period of Ketu with grace.',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen cosmic-gradient py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-serif font-bold text-orange-800 text-center mb-12">Astrology Blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-6 hover:scale-105 transition"
            >
              <h2 className="text-2xl font-serif text-orange-800 mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
