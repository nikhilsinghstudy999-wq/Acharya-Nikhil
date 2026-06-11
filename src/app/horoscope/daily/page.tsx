import Link from 'next/link';
import { zodiacSigns, getTodayDateString } from '@/lib/astrology-utils';

export default function DailyIndex() {
  const today = getTodayDateString();
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-serif text-center text-orange-800 mb-8">Daily Horoscopes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(zodiacSigns).map(([key, sign]) => (
          <Link key={key} href={`/horoscope/daily/${key}/${today}`} className="glass-card p-4 text-center hover:scale-105 transition">
            <span className="text-4xl">{sign.symbol}</span>
            <h2 className="text-lg font-serif text-orange-700 mt-1">{sign.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
