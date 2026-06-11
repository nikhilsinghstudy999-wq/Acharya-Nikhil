'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 52‑card deck with interpretations
const fullDeck = [
  { name: 'The Fool', keys: ['New beginnings','Innocence','Spontaneity','Leap of faith','Free spirit','Unlimited potential'] },
  { name: 'The Magician', keys: ['Power','Skill','Resourcefulness','Concentration','Action','Manifestation'] },
  { name: 'The High Priestess', keys: ['Intuition','Mystery','Subconscious','Inner voice','Divine knowledge','Silence'] },
  { name: 'The Empress', keys: ['Fertility','Abundance','Nurturing','Nature','Sensuality','Motherhood'] },
  { name: 'The Emperor', keys: ['Authority','Structure','Father figure','Leadership','Control','Protection'] },
  { name: 'The Hierophant', keys: ['Tradition','Conformity','Spiritual guidance','Education','Beliefs','Rituals'] },
  { name: 'The Lovers', keys: ['Love','Harmony','Choices','Union','Values','Relationships'] },
  { name: 'The Chariot', keys: ['Determination','Victory','Willpower','Direction','Self-discipline','Ambition'] },
  { name: 'Strength', keys: ['Courage','Inner strength','Compassion','Patience','Endurance','Gentle force'] },
  { name: 'The Hermit', keys: ['Introspection','Inner wisdom','Solitude','Guidance','Search for truth','Withdrawal'] },
  { name: 'Wheel of Fortune', keys: ['Cycles','Fate','Turning point','Luck','Destiny','Change'] },
  { name: 'Justice', keys: ['Fairness','Truth','Law','Cause and effect','Accountability','Balance'] },
  { name: 'The Hanged Man', keys: ['Surrender','New perspective','Pause','Letting go','Sacrifice','Reversal'] },
  { name: 'Death', keys: ['Endings','Transformation','Transition','Release','Metamorphosis','New chapter'] },
  { name: 'Temperance', keys: ['Balance','Moderation','Patience','Harmony','Purpose','Healing'] },
  { name: 'The Devil', keys: ['Bondage','Materialism','Attachment','Shadow self','Temptation','Obsession'] },
  { name: 'The Tower', keys: ['Upheaval','Revelation','Sudden change','Awakening','Destruction of false beliefs','Chaos'] },
  { name: 'The Star', keys: ['Hope','Renewal','Serenity','Inspiration','Guidance','Faith'] },
  { name: 'The Moon', keys: ['Illusion','Fear','Unconscious','Intuition','Dreams','The unknown'] },
  { name: 'The Sun', keys: ['Success','Joy','Positivity','Vitality','Clarity','Warmth'] },
  { name: 'Judgement', keys: ['Rebirth','Inner calling','Absolution','Awakening','Decision','Renewal'] },
  { name: 'The World', keys: ['Completion','Accomplishment','Travel','Wholeness','Integration','Fulfillment'] },
  { name: 'Ace of Wands', keys: ['Inspiration','New venture','Creative spark','Potential','Growth','Excitement'] },
  { name: 'Two of Wands', keys: ['Planning','Future goals','Expansion','Discovery','Partnership','Decisions'] },
  { name: 'Three of Wands', keys: ['Progress','Confidence','Exploration','Foresight','Leadership','Expansion'] },
  { name: 'Four of Wands', keys: ['Celebration','Stability','Harmony','Homecoming','Community','Joy'] },
  { name: 'Five of Wands', keys: ['Conflict','Competition','Disagreement','Tension','Challenge','Growth'] },
  { name: 'Six of Wands', keys: ['Victory','Recognition','Success','Achievement','Public acclaim','Confidence'] },
  { name: 'Seven of Wands', keys: ['Perseverance','Defensiveness','Standing your ground','Challenge','Determination','Courage'] },
  { name: 'Eight of Wands', keys: ['Speed','Action','Movement','Air travel','Clear communication','Swiftness'] },
  { name: 'Nine of Wands', keys: ['Resilience','Perseverance','Last stand','Boundaries','Fatigue','Strength'] },
  { name: 'Ten of Wands', keys: ['Burden','Responsibility','Hard work','Completion','Overload','Release'] },
  { name: 'Ace of Cups', keys: ['New love','Emotional new beginning','Compassion','Creativity','Intuition','Overflow'] },
  { name: 'Two of Cups', keys: ['Partnership','Connection','Attraction','Unity','Balance','Harmony'] },
  { name: 'Three of Cups', keys: ['Celebration','Friendship','Community','Abundance','Creativity','Joy'] },
  { name: 'Four of Cups', keys: ['Contemplation','Apathy','Re-evaluation','Discontent','Introspection','Awareness'] },
  { name: 'Five of Cups', keys: ['Loss','Regret','Disappointment','Grief','Focus on the negative','Healing'] },
  { name: 'Six of Cups', keys: ['Nostalgia','Memories','Reunion','Generosity','Innocence','Childhood'] },
  { name: 'Seven of Cups', keys: ['Fantasy','Choice','Wishful thinking','Illusion','Daydreams','Possibilities'] },
  { name: 'Eight of Cups', keys: ['Walk away','Letting go','Searching for meaning','Abandonment','Travel','Growth'] },
  { name: 'Nine of Cups', keys: ['Contentment','Satisfaction','Fulfillment','Wishes coming true','Comfort','Gratitude'] },
  { name: 'Ten of Cups', keys: ['Divine love','Blissful relationships','Emotional abundance','Harmony','Peace','Completion'] },
  { name: 'Ace of Swords', keys: ['New idea','Mental clarity','Breakthrough','Truth','Justice','Focus'] },
  { name: 'Two of Swords', keys: ['Difficult decisions','Stalemate','Avoidance','Weighing options','Peace','Impasse'] },
  { name: 'Three of Swords', keys: ['Heartbreak','Sorrow','Painful truth','Separation','Release','Healing'] },
  { name: 'Four of Swords', keys: ['Rest','Recuperation','Contemplation','Retreat','Recharge','Stillness'] },
  { name: 'Five of Swords', keys: ['Conflict','Defeat','Win at all costs','Betrayal','Hollow victory','Learning'] },
  { name: 'Six of Swords', keys: ['Transition','Moving forward','Journey','Rite of passage','Change','Healing'] },
  { name: 'Seven of Swords', keys: ['Deception','Strategy','Theft','Dishonesty','Cleverness','Secret'] },
  { name: 'Eight of Swords', keys: ['Imprisonment','Self-victimization','Entrapment','Isolation','Limitations','Release'] },
  { name: 'Nine of Swords', keys: ['Anxiety','Worry','Nightmares','Fear','Guilt','Overthinking'] },
  { name: 'Ten of Swords', keys: ['Painful ending','Deep crisis','Rock bottom','Betrayal','Victimization','New dawn'] },
  { name: 'Ace of Pentacles', keys: ['New financial opportunity','Prosperity','Abundance','Manifestation','Resource','Stability'] },
  { name: 'Two of Pentacles', keys: ['Balance','Adaptability','Time management','Juggling','Prioritization','Flexibility'] }
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xFFFFFFFF;
    return (s >>> 0) / 0xFFFFFFFF;
  };
}

function drawCards(deck: typeof fullDeck, seed: number, count = 3) {
  const rng = seededRandom(seed);
  const copy = [...deck];
  const drawn = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(rng() * copy.length);
    drawn.push(copy.splice(idx, 1)[0]);
  }
  return drawn;
}

function generateReading(cards: typeof fullDeck) {
  const c = cards;
  return [
    { title: 'Past Influences', text: `The ${c[0].name} reveals your past: ${c[0].keys[0]}. This energy shaped your current path.` },
    { title: 'Present Situation', text: `The ${c[1].name} indicates your present: ${c[1].keys[1]}. Embrace this moment.` },
    { title: 'Future Possibilities', text: `The ${c[2].name} forecasts your future: ${c[2].keys[2]}. Opportunities await.` },
    { title: 'Love & Relationships', text: `In love, the ${c[0].name} suggests ${c[0].keys[3]}, while the ${c[1].name} warns of ${c[1].keys[4]}. Harmony lies in ${c[2].keys[0]}.` },
    { title: 'Career & Finances', text: `Career: ${c[1].name} indicates ${c[1].keys[2]}. The ${c[2].name} points to ${c[2].keys[1]}. Success comes through ${c[0].keys[5]}.` },
    { title: 'Health & Wellness', text: `Health focus: ${c[0].keys[4]}. The ${c[2].name} advises ${c[2].keys[5]}.` },
    { title: 'Spiritual Guidance', text: `The cards urge you to ${c[0].keys[3]} and seek ${c[1].keys[4]}. Trust your inner wisdom.` },
    { title: 'Challenges Ahead', text: `Beware of ${c[2].keys[3]}. Overcome by ${c[0].keys[4]}.` },
    { title: 'Advice from the Cosmos', text: `The universe advises: ${c[1].keys[5]} and ${c[2].keys[4]}.` },
    { title: 'Lucky Elements', text: `Color: ${['Gold','Crimson','Emerald','Sapphire','Amethyst','Silver'][Math.floor(Math.random()*6)]}, Number: ${Math.floor(Math.random()*9)+1}` },
    { title: 'Final Affirmation', text: `I am guided by the stars. ${c[0].keys[0]} leads me to my highest good.` },
  ];
}

export default function TarotPage() {
  const [cards, setCards] = useState<typeof fullDeck>([]);
  const [reading, setReading] = useState<ReturnType<typeof generateReading> | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleDraw = () => {
    setReading(null);
    setSelectedCard(null);
    const newSeed = Date.now();
    const drawn = drawCards(fullDeck, newSeed, 3);
    setCards(drawn);
  };

  const handleReveal = () => {
    if (cards.length !== 3) return;
    setReading(generateReading(cards));
  };

  return (
    <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-amber-500 to-yellow-600">
            AI Tarot Reading
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Tap into the wisdom of the 52‑card deck. Each draw is seeded uniquely for you.
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
            {/* Drawn Cards */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.3, type: 'spring', stiffness: 80 }}
                  className={`glass-card p-4 flex flex-col items-center cursor-pointer ${
                    selectedCard === idx ? 'ring-4 ring-purple-400 scale-105' : ''
                  }`}
                  onClick={() => setSelectedCard(selectedCard === idx ? null : idx)}
                >
                  <div className="w-24 h-36 bg-gradient-to-br from-purple-500 to-amber-500 rounded-lg flex items-center justify-center text-white text-3xl shadow-lg">
                    🃏
                  </div>
                  <h3 className="text-xl font-serif text-purple-800 mt-2 text-center">{card.name}</h3>
                  <AnimatePresence>
                    {selectedCard === idx && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-2 text-sm text-gray-600 overflow-hidden"
                      >
                        {card.keys[Math.floor(Math.random() * card.keys.length)]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {!reading ? (
              <div className="text-center">
                <button
                  onClick={handleReveal}
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition"
                >
                  Reveal My Reading
                </button>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-12">
                <h2 className="text-3xl font-serif text-center text-purple-800 mb-8">Your Cosmic Reading</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reading.map((sec, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
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
