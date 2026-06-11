'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { tarotDeck } from '@/lib/tarot-deck';
import { drawCards } from '@/lib/tarot-selection';
import { generateReading } from '@/lib/tarot-interpretation';

function Card3DSVG({ card, revealed }: { card: any; revealed: boolean }) {
  return (
    <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <motion.rect
        x="5" y="5" width="110" height="170" rx="10"
        fill="url(#cardGrad)"
        stroke="#fff"
        strokeWidth="2"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: revealed ? 360 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.text
        x="60" y="90" textAnchor="middle" dominantBaseline="middle"
        fill="white" fontSize="18" fontFamily="serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ delay: 0.4 }}
      >
        {revealed ? card.name.substring(0, 20) : '?'}
      </motion.text>
    </svg>
  );
}

export default function TarotPage() {
  const [cards, setCards] = useState<any[]>([]);
  const [reading, setReading] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDraw = () => {
    setError('');
    setReading(null);
    const newSeed = Date.now();
    const drawn = drawCards(tarotDeck, newSeed);
    setCards(drawn);
  };

  const handleReveal = () => {
    if (cards.length !== 3) {
      setError('Draw three cards first.');
      return;
    }
    setLoading(true);
    try {
      const sections = generateReading(cards);
      setReading(sections);
    } catch {
      setError('Unable to generate reading.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-16 relative">
      <div className="absolute inset-0 bg-[url('/images/mandala.svg')] bg-center bg-no-repeat opacity-5 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-amber-500 to-yellow-600">
            AI Tarot Reading
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Draw three cards from the 52‑card cosmic deck. Each draw is uniquely yours.
          </p>
        </div>

        {!cards.length ? (
          <div className="text-center">
            <button
              onClick={handleDraw}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-10 py-5 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Draw 3 Cards
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-6 mb-12">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.3, type: 'spring', stiffness: 80 }}
                  className="glass-card p-4 flex flex-col items-center"
                >
                  <Card3DSVG card={card} revealed={true} />
                  <h3 className="text-xl font-serif text-purple-800 mt-2 text-center">{card.name}</h3>
                </motion.div>
              ))}
            </div>

            {error && <div className="text-red-500 text-center mb-4">{error}</div>}

            {!reading && (
              <div className="text-center">
                <button
                  onClick={handleReveal}
                  disabled={loading}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50"
                >
                  {loading ? 'Consulting the cosmos...' : 'Reveal My Reading'}
                </button>
              </div>
            )}

            {reading && (
              <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} className="mt-12">
                <h2 className="text-3xl font-serif text-center text-purple-800 mb-8">Your Cosmic Reading</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reading.map((sec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity:0, x: i%2===0 ? -20 : 20 }}
                      animate={{ opacity:1, x:0 }}
                      transition={{ delay: i*0.1 }}
                      className="glass-card p-6"
                    >
                      <h3 className="text-xl font-serif text-amber-700 mb-2">{sec.title}</h3>
                      <p className="text-gray-700">{sec.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
