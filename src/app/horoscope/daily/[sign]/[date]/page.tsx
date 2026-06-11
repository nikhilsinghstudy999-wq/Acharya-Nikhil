import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { zodiacSigns } from '@/lib/astrology-utils';

export async function generateMetadata({ params }: { params: Promise<{ sign: string; date: string }> }): Promise<Metadata> {
  const { sign, date } = await params;
  const signData = zodiacSigns[sign];
  if (!signData) return {};
  return {
    title: `${signData.name} Daily Horoscope ${date} – Acharya Nikhil Shastri`,
    description: `Today's ${signData.name} horoscope – insightful predictions by India's most viewed astrology expert.`,
  };
}

const staticHoroscope = `🕉️ Today, the stars align to bring you clarity and peace.

Overall Mood: Positive and focused.
Love & Relationships: Harmony prevails.
Career & Finances: Steady progress.
Health & Wellness: Good energy.
Lucky Color: Gold
Lucky Number: 7
Spiritual Guidance: Meditate on “Om”.
Mantra: Stay positive.`;

export default async function DailyHoroscopePage({ params }: { params: Promise<{ sign: string; date: string }> }) {
  const { sign, date } = await params;
  const signData = zodiacSigns[sign];
  if (!signData) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/horoscope/daily" className="text-orange-600 hover:underline mb-4 inline-block">← All Signs</Link>
      <article className="glass-card p-8 text-center">
        <div className="text-6xl mb-4">{signData.symbol}</div>
        <h1 className="text-3xl font-serif text-orange-800">{signData.name} Daily Horoscope</h1>
        <time className="text-gray-500" dateTime={date}>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <div className="mt-6 text-left whitespace-pre-wrap text-gray-700">{staticHoroscope}</div>
      </article>
    </div>
  );
}
