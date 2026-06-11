import Link from 'next/link';

const articles = [
  { slug: 'saturn-transit-2026', title: 'Saturn Transit 2026 – Effects on All Signs' },
  { slug: 'jupiter-in-taurus-remedies', title: 'Jupiter in Taurus – Powerful Remedies' },
  { slug: 'solar-eclipse-astrology', title: 'Solar Eclipse 2026 – Spiritual Significance' },
  { slug: 'mangal-dosh-remedies', title: 'Mangal Dosh – Causes and Remedies' },
  { slug: 'ketu-mahadasha-effects', title: 'Ketu Mahadasha – Spiritual Awakening' },
];

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif text-center text-orange-800 mb-8">Astrology Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map(article => (
          <Link key={article.slug} href={`/blog/${article.slug}`} className="glass-card p-6 hover:scale-105 transition">
            <h2 className="text-xl font-serif text-orange-700">{article.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
