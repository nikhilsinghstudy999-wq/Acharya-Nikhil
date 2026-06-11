'use client';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Daily Horoscope', href: '/horoscope/daily' },
  { label: 'Tarot', href: '/tarot-reading' },
  { label: 'Premium Kundli', href: '/premium-kundli' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold">✨ Acharya Nikhil Shastri</Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <Link key={item.href} href={item.href} className="hover:underline">{item.label}</Link>
          ))}
          <a href="https://wa.me/919876369136" target="_blank" rel="noopener" className="bg-white text-orange-700 px-3 py-1 rounded-full font-bold">WhatsApp</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-orange-600 px-4 py-2 flex flex-col gap-2">
          {navItems.map(item => <Link key={item.href} href={item.href} className="text-white">{item.label}</Link>)}
          <a href="https://wa.me/919876369136" className="bg-white text-orange-700 rounded-full px-4 py-1 font-bold text-center">WhatsApp</a>
        </div>
      )}
    </header>
  );
}
