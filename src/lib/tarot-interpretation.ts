export function generateReading(cards: any[]) {
  const c = cards;
  return [
    { title:'Past Influences', text:`The ${c[0].name} reveals your past: ${c[0].keys[0]}. This energy shaped your current path.` },
    { title:'Present Situation', text:`The ${c[1].name} indicates your present: ${c[1].keys[1]}. Embrace this moment.` },
    { title:'Future Possibilities', text:`The ${c[2].name} forecasts your future: ${c[2].keys[2]}. Opportunities await.` },
    { title:'Love & Relationships', text:`In love, the ${c[0].name} suggests ${c[0].keys[3]}, while the ${c[1].name} warns of ${c[1].keys[4]}. Harmony lies in ${c[2].keys[0]}.` },
    { title:'Career & Finances', text:`Career: ${c[1].name} indicates ${c[1].keys[2]}. The ${c[2].name} points to ${c[2].keys[1]}. Success comes through ${c[0].keys[5]}.` },
    { title:'Health & Wellness', text:`Health focus: ${c[0].keys[4]}. The ${c[2].name} advises ${c[2].keys[5]}.` },
    { title:'Spiritual Guidance', text:`The cards urge you to ${c[0].keys[3]} and seek ${c[1].keys[4]}. Trust your inner wisdom.` },
    { title:'Challenges Ahead', text:`Beware of ${c[2].keys[3]}. Overcome by ${c[0].keys[4]}.` },
    { title:'Advice from the Cosmos', text:`The universe advises: ${c[1].keys[5]} and ${c[2].keys[4]}.` },
    { title:'Lucky Elements', text:`Color: ${['Gold','Crimson','Emerald','Sapphire','Amethyst','Silver'][Math.floor(Math.random()*6)]}, Number: ${Math.floor(Math.random()*9)+1}` },
    { title:'Final Affirmation', text:`I am guided by the stars. ${c[0].keys[0]} leads me to my highest good.` },
  ];
}
