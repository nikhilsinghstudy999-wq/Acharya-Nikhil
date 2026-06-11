
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { zodiacSigns } from '@/lib/astrology-utils';
import { Calendar, ArrowLeft } from 'lucide-react';
import ShareButton from '@/components/ui/ShareButton';

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ sign: string; date: string }> }): Promise<Metadata> {
  const { sign, date } = await params;
  const signData = zodiacSigns[sign];
  if (!signData) return {};
  return {
    title: `${signData.name} Daily Horoscope ${date} – Acharya Nikhil Shastri`,
    description: `Today's ${signData.name} horoscope: detailed prediction by India's most viewed astrology expert.`,
    alternates: { canonical: `/horoscope/daily/${sign}/${date}` },
    openGraph: { title: `${signData.name} Daily Horoscope ${date}`, url: `/horoscope/daily/${sign}/${date}`, type: 'article' },
  };
}

const fallbackHoroscope = `🕉️ Opening Shloka: ॐ सर्वे भवन्तु सुखिनः – May all be happy.

Overall Mood: The cosmos aligns to bring you clarity and peace today.

Love & Relationships: Open communication deepens bonds. Singles may encounter a meaningful connection.

Career & Finances: Steady progress brings recognition. Trust your instincts.

Health & Wellness: Balance is key – gentle exercise and mindfulness will recharge you.

Lucky Color: Gold
Lucky Number: 7

Spiritual Guidance: Meditate on “Om Namah Shivaya” for inner peace.

Mantra for the Day: Let go of fear; the universe supports your journey.`;

function parseSections(raw: string) {
  const sections: Record<string, string> = {
    'Opening Shloka': '🕉️',
    'Overall Mood': '',
    'Love & Relationships': '',
    'Career & Finances': '',
    'Health & Wellness': '',
    'Lucky Color': '',
    'Lucky Number': '',
    'Spiritual Guidance': '',
    'Mantra for the Day': '',
  };
  const lines = raw.split('\n').filter(Boolean);
  let currentHeading = '';
  for (const line of lines) {
    const match = line.match(/^([A-Z][\w\s&]+):\s*(.*)/);
    if (match) {
      currentHeading = match[1].trim();
      sections[currentHeading] = match[2].trim();
    } else if (currentHeading && line.trim()) {
      sections[currentHeading] = (sections[currentHeading] ? sections[currentHeading] + '\n' : '') + line.trim();
    }
  }
  for (const key of Object.keys(sections)) {
    if (!sections[key]) sections[key] = '';
  }
  return sections;
}

export default async function DailyHoroscopePage({ params }: { params: Promise<{ sign: string; date: string }> }) {
  const { sign, date } = await params;
  const signData = zodiacSigns[sign];
  if (!signData) notFound();

  const sections = parseSections(fallbackHoroscope);

  return (
    <div className="min-h-screen cosmic-gradient">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/horoscope/daily" className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          All Signs
        </Link>

        <article className="glass-card-dark p-8 md:p-12 text-center">
          <div className="text-7xl mb-4">{signData.symbol}</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-orange-800 mb-2">
            {signData.name} Daily Horoscope
          </h1>
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <Calendar className="w-4 h-4 mr-2" />
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </div>

          <div className="grid gap-6 text-left">
            {Object.entries(sections).map(([title, content], idx) => (
              <div key={idx} className="bg-white/40 p-6 rounded-2xl">
                <h3 className="text-xl font-serif font-semibold text-orange-700 mb-2">{title}</h3>
                <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          <ShareButton title={`${signData.name} Daily Horoscope`} text={fallbackHoroscope} />
        </article>

        <div className="mt-8 flex justify-between">
          <Link href={`/horoscope/daily/${Object.keys(zodiacSigns)[(Object.keys(zodiacSigns).indexOf(sign) - 1 + 12) % 12]}/${date}`}
            className="text-orange-600 hover:underline">
            ← {zodiacSigns[Object.keys(zodiacSigns)[(Object.keys(zodiacSigns).indexOf(sign) - 1 + 12) % 12]].name}
          </Link>
          <Link href={`/horoscope/daily/${Object.keys(zodiacSigns)[(Object.keys(zodiacSigns).indexOf(sign) + 1) % 12]}/${date}`}
            className="text-orange-600 hover:underline">
            {zodiacSigns[Object.keys(zodiacSigns)[(Object.keys(zodiacSigns).indexOf(sign) + 1) % 12]].name} →
          </Link>
        </div>
      </div>
    </div>
  );
}
