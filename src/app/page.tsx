import Link from 'next/link';
import { getTodayDateString } from '@/lib/astrology-utils';
import { Sparkles, ShieldCheck, FileText, Moon, Heart, Star, ArrowRight } from '@/components/ui/Icons';

export default function Home() {
  const today = getTodayDateString();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-yellow-300 to-orange-300 animate-pulse" style={{ animationDuration: '6s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Rotating Mandala + Portrait */}
          <div className="relative flex justify-center">
            {/* Rotating Mandala */}
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <img
                src="/images/mandala.svg"
                alt="Mandala"
                className="w-full h-full animate-spin"
                style={{ animationDuration: '30s' }}
              />
              {/* Acharya Portrait in center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/images/acharya-portrait.svg"
                  alt="Acharya Nikhil Shastri"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right: Text & CTAs */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-500 to-yellow-600 drop-shadow-md">
              Acharya Nikhil Shastri
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-light text-gray-700">
              India&apos;s Most Viewed Astrology Expert
            </p>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Ancient Vedic wisdom meets AI‑powered personal guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href={`/horoscope/daily/aries/${today}`}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
              >
                Today&apos;s Horoscope
              </Link>
              <Link
                href="/premium-kundli"
                className="border-2 border-orange-400 text-orange-700 bg-white/50 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
              >
                Premium Kundli
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (9 items) */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-orange-800 mb-16">
          Explore Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Daily Horoscope</h3>
            <p className="mt-2 text-gray-600">Free personalised prediction for your zodiac sign.</p>
          </div>
          {/* 2 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">AI Tarot Reading</h3>
            <p className="mt-2 text-gray-600">Draw three cards and receive an instant mystical interpretation.</p>
          </div>
          {/* 3 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Premium Kundli</h3>
            <p className="mt-2 text-gray-600">Hand‑crafted 40+ page report by Acharya Nikhil Shastri.</p>
          </div>
          {/* 4 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Love Compatibility</h3>
            <p className="mt-2 text-gray-600">Discover how the stars align for your relationship.</p>
          </div>
          {/* 5 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <Moon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Vedic Remedies</h3>
            <p className="mt-2 text-gray-600">Personalised mantras and rituals for life&apos;s challenges.</p>
          </div>
          {/* 6 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Astrology Blog</h3>
            <p className="mt-2 text-gray-600">In‑depth articles and transit analyses.</p>
          </div>
          {/* 7 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <ArrowRight className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Personal Consultation</h3>
            <p className="mt-2 text-gray-600">1‑on‑1 session with Acharya Nikhil Shastri.</p>
          </div>
          {/* 8 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Gemstone Recommendations</h3>
            <p className="mt-2 text-gray-600">Discover which gems can enhance your life.</p>
          </div>
          {/* 9 */}
          <div className="glass-card p-8 text-center hover:scale-105 transition">
            <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Festival Pujas</h3>
            <p className="mt-2 text-gray-600">Arrange special Vedic rituals for auspicious occasions.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md text-center">
        <h2 className="text-4xl font-serif text-orange-800 mb-6">Ready to Unlock Your Destiny?</h2>
        <Link
          href="/premium-kundli"
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition inline-block"
        >
          Get Your Premium Kundli Now
        </Link>
      </section>
    </>
  );
}
