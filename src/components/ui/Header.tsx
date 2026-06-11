'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { label: 'Daily Horoscope', href: '/horoscope/daily' },
  { label: 'Tarot Reading', href: '/tarot-reading' },
  { label: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 animate-gradient-shift bg-[length:200%_200%] backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-white" />
            <span className="text-xl font-serif font-bold text-white drop-shadow-md">
              Acharya Nikhil Shastri
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white font-medium transition drop-shadow-sm"
              >
                {item.label}
              </Link>
            ))}
            {/* WhatsApp Chat CTA */}
            <a
              href="https://wa.me/919876369136?text=Hello%20Acharya%20Nikhil%20Shastri%2C%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-700 px-5 py-2 rounded-full font-bold shadow-md hover:bg-amber-100 transition"
            >
              Chat on WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-orange-100"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919876369136"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-700 px-4 py-2 rounded-full font-bold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
