import Link from 'next/link';
import { zodiacSigns, getTodayDateString } from '@/lib/astrology-utils';
import { Calendar } from 'lucide-react';

export default function DailyHoroscopeIndex() {
  const today = getTodayDateString();
  const signs = Object.entries(zodiacSigns);

  return (
    <div className="min-h-screen cosmic-gradient py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-orange-800">Daily Horoscopes</h1>
          <div className="flex items-center justify-center text-gray-500 mt-2">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(today).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {signs.map(([key, sign]) => (
            <Link
              key={key}
              href={`/horoscope/daily/${key}/${today}`}
              className="glass-card p-6 text-center hover:scale-105 transition"
            >
              <span className="text-5xl">{sign.symbol}</span>
              <h2 className="mt-2 text-xl font-serif text-orange-800">{sign.name}</h2>
              <p className="text-sm text-gray-500">{sign.dates}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
