import Link from 'next/link';
import { ShieldCheck, FileText, Clock, Award, Phone, ArrowRight } from 'lucide-react';

export default function PremiumKundliPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Your Personal Premium Kundli</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Hand‑crafted by Acharya Nikhil Shastri – Unlock your life’s blueprint.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange-700 px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-amber-100 transition"
          >
            Order Now – ₹999
          </Link>
          <p className="mt-4 text-sm opacity-80">100% Secure • Instant Delivery</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-orange-800 mb-12">What You Will Receive</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-6 text-center">
            <FileText className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-orange-800">40+ Page Report</h3>
            <p className="text-gray-600 mt-2">In‑depth analysis of all 12 houses, planets, and yogas.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Award className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-orange-800">Vedic Remedies</h3>
            <p className="text-gray-600 mt-2">Personalised mantras, gemstones, and rituals.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <Clock className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-orange-800">10‑Year Forecast</h3>
            <p className="text-gray-600 mt-2">Major transits and dashas explained in detail.</p>
          </div>
          <div className="glass-card p-6 text-center">
            <ShieldCheck className="w-10 h-10 text-orange-500 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-orange-800">Acharya’s Blessings</h3>
            <p className="text-gray-600 mt-2">Hand‑signed and energised by Acharya Nikhil Shastri.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white/40 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-orange-800 mb-6">Simple, Transparent Pricing</h2>
          <div className="glass-card p-8 inline-block">
            <p className="text-gray-500 line-through text-lg">₹2,499</p>
            <p className="text-5xl font-bold text-orange-600 my-2">₹999</p>
            <p className="text-gray-600 mb-4">One‑time payment. No hidden fees.</p>
            <ul className="text-left text-gray-700 space-y-2 mb-6">
              <li>✔ Full 40+ page PDF report</li>
              <li>✔ 10‑year transit forecast</li>
              <li>✔ Personalised remedies</li>
              <li>✔ 24/7 email support</li>
            </ul>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-md hover:scale-105 transition inline-block"
            >
              Buy Now <ArrowRight className="inline w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-orange-800 mb-8">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6">
            <p className="text-gray-700 italic">“The report was so accurate it felt like Acharya knew me personally.”</p>
            <span className="text-orange-600 mt-2 block">— Anjali K.</span>
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-700 italic">“My career took off after following the remedies. Worth every rupee!”</p>
            <span className="text-orange-600 mt-2 block">— Vikram S.</span>
          </div>
          <div className="glass-card p-6">
            <p className="text-gray-700 italic">“The 10‑year forecast helped me plan my finances better.”</p>
            <span className="text-orange-600 mt-2 block">— Meera P.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white/40">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-orange-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="glass-card p-4">
              <summary className="font-semibold text-orange-700">How long does it take to receive the report?</summary>
              <p className="mt-2 text-gray-600">Within 24 hours of placing the order, your personalised PDF will be emailed to you.</p>
            </details>
            <details className="glass-card p-4">
              <summary className="font-semibold text-orange-700">Can I get a physical copy?</summary>
              <p className="mt-2 text-gray-600">Yes, a printed and blessed copy can be shipped for an additional ₹199.</p>
            </details>
            <details className="glass-card p-4">
              <summary className="font-semibold text-orange-700">What information do I need to provide?</summary>
              <p className="mt-2 text-gray-600">Your date, time, and place of birth. The more accurate, the better the predictions.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-serif text-orange-800 mb-4">Don’t Leave Your Future to Chance</h2>
        <p className="text-gray-600 mb-8">Order your Premium Kundli now and take the first step towards a brighter tomorrow.</p>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition"
        >
          Get Started – ₹999
        </Link>
      </section>
    </main>
  );
}
