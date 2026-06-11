import Link from 'next/link';
import SmokeBackground from '@/components/animations/SmokeBackground';
import HeroMandala from '@/components/animations/HeroMandala';
import { getTodayDateString } from '@/lib/astrology-utils';
import { Sparkles, Star, ArrowRight, ShieldCheck, FileText, Users } from 'lucide-react';

export default function Home() {
  const today = getTodayDateString();

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <SmokeBackground />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <HeroMandala />
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-amber-500 to-yellow-600 drop-shadow-md">
              Acharya Nikhil Shastri
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-light text-gray-700">
              India&apos;s Most Viewed Astrology Expert
            </p>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Unlock the secrets of your destiny with a personalised Premium Kundli or daily AI‑powered guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/premium-kundli"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
              >
                Get Your Premium Kundli
              </Link>
              <Link
                href={`/horoscope/daily/aries/${today}`}
                className="border-2 border-orange-400 text-orange-700 bg-white/50 backdrop-blur px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition"
              >
                Today&apos;s Horoscope
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Premium Kundli Highlight */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-orange-800">Discover Your True Potential</h2>
          <p className="mt-4 text-lg text-gray-600">Our Premium Kundli is a hand‑crafted, in‑depth astrological report just for you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center">
            <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-orange-800">Personalised by Acharya</h3>
            <p className="mt-2 text-gray-600">Every report is personally reviewed by Acharya Nikhil Shastri.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <FileText className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-orange-800">Detailed 40+ Pages</h3>
            <p className="mt-2 text-gray-600">Covers career, love, health, finance, and remedies.</p>
          </div>
          <div className="glass-card p-8 text-center">
            <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-orange-800">Trusted by 50,000+</h3>
            <p className="mt-2 text-gray-600">Join thousands who transformed their lives.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/premium-kundli"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition inline-block"
          >
            Explore Premium Kundli
          </Link>
        </div>
      </section>

      {/* SECTION 3: AI Tarot & Daily Horoscope */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/tarot-reading" className="glass-card p-8 text-center hover:scale-105 transition">
            <Star className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">AI Tarot Reading</h3>
            <p className="mt-2 text-gray-600">Draw three cards and get an instant mystical interpretation.</p>
          </Link>
          <Link href={`/horoscope/daily/aries/${today}`} className="glass-card p-8 text-center hover:scale-105 transition">
            <Sparkles className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-orange-800">Daily Horoscope</h3>
            <p className="mt-2 text-gray-600">Free AI‑powered prediction for your zodiac sign.</p>
          </Link>
        </div>
      </section>

      {/* SECTION 4: Testimonials */}
      <section className="py-20 bg-white/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-orange-800 mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <p className="text-gray-700 italic">“The Premium Kundli was incredibly accurate and detailed. It helped me make the right career move.”</p>
              <span className="text-orange-600 mt-2 block">— Priya S., Mumbai</span>
            </div>
            <div className="glass-card p-6">
              <p className="text-gray-700 italic">“Acharya Nikhil’s guidance changed my perspective. The remedies really worked!”</p>
              <span className="text-orange-600 mt-2 block">— Rahul M., Delhi</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Final CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-serif text-orange-800 mb-6">Ready to Unlock Your Destiny?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Get your Premium Kundli today and receive personalised guidance from Acharya Nikhil Shastri.
        </p>
        <Link
          href="/premium-kundli"
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition"
        >
          Order Now
        </Link>
      </section>
    </>
  );
}
