import Link from 'next/link';

export default function PremiumKundli() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-serif text-orange-800">Premium Kundli</h1>
      <p className="text-gray-600 mt-4">Get your handcrafted, 40+ page Kundli personally prepared by Acharya Nikhil Shastri.</p>
      <ul className="mt-8 space-y-2 text-gray-700 text-left max-w-md mx-auto">
        <li>✔ Full birth chart analysis</li>
        <li>✔ 10‑year transit forecast</li>
        <li>✔ Vedic remedies & gemstone suggestions</li>
        <li>✔ Hand‑signed by Acharya</li>
      </ul>
      <p className="mt-8 text-3xl font-bold text-orange-600">₹999</p>
      <a href="https://wa.me/919876369136?text=I%20want%20Premium%20Kundli" target="_blank" rel="noopener"
        className="inline-block mt-4 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition">
        Order on WhatsApp
      </a>
    </div>
  );
}
