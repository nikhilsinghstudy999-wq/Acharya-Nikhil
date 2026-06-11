import Link from 'next/link';
import { Sparkles, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 animate-gradient-shift bg-[length:200%_200%] text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-lg font-serif font-bold">Acharya Nikhil Shastri</span>
            </Link>
            <p className="mt-3 text-white/80 text-sm">
              Ancient Vedic wisdom meets AI‑powered personal guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/horoscope/daily" className="text-white/80 hover:text-white">Daily Horoscope</Link></li>
              <li><Link href="/tarot-reading" className="text-white/80 hover:text-white">AI Tarot Reading</Link></li>
              <li><Link href="/premium-kundli" className="text-white/80 hover:text-white">Premium Kundli</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white">Astrology Blog</Link></li>
            </ul>
          </div>

          {/* Contact – WhatsApp */}
          <div>
            <h3 className="font-semibold mb-3 text-white">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <a href="https://wa.me/919876369136" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@acharyanikhilshastri.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rishikesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/70">
          &copy; {new Date().getFullYear()} Acharya Nikhil Shastri. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
