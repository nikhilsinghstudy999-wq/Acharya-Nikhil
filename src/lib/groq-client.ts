import Groq from 'groq-sdk';
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generateDailyHoroscope(sign:string, date:string, planetaryData?:string): Promise<string> {
  const { zodiacSigns } = await import('./astrology-utils');
  const signData = zodiacSigns[sign.toLowerCase()];
  if(!signData) throw new Error('Invalid sign');
  const prompt = `You are Acharya Nikhil Shastri, a world‑renowned Vedic astrologer. Based on today's planetary transit (${planetaryData||'current positions'}), generate a profound daily horoscope for ${signData.name}. Structure exactly:
🕉️ [Opening Sanskrit shloka with translation]
Overall Mood: [insight]
Love & Relationships: [romantic wisdom]
Career & Finances: [guidance]
Health & Wellness: [holistic advice]
Lucky Color: [color]
Lucky Number: [number]
Tone: poetic, uplifting, rooted in Vedic wisdom.`;

  const completion = await groq.chat.completions.create({
    messages: [{ role:'user', content:prompt }],
    model:'llama3-70b-8192',
    temperature:0.8,
    max_tokens:800
  });
  return completion.choices[0]?.message?.content || 'Horoscope unavailable at this moment.';
}

export async function generateTarotReading(cards:string[]): Promise<string> {
  const prompt = `As Acharya Nikhil Shastri, interpret the Tarot cards: ${cards.join(', ')}. Provide deep spiritual guidance. Structure: Card 1 meaning, Card 2, Card 3, Overall message.`;
  const completion = await groq.chat.completions.create({
    messages: [{ role:'user', content:prompt }],
    model:'llama3-70b-8192',
    temperature:0.9,
    max_tokens:600
  });
  return completion.choices[0]?.message?.content || 'The cards are silent now.';
}

export async function generateCompatibility(sign1:string, sign2:string): Promise<string> {
  const { zodiacSigns } = await import('./astrology-utils');
  const s1 = zodiacSigns[sign1], s2 = zodiacSigns[sign2];
  const prompt = `As Acharya Nikhil Shastri, analyze love compatibility between ${s1.name} (${s1.element}) and ${s2.name} (${s2.element}). Include percentage, strengths, challenges, advice, and a blessing.`;
  const completion = await groq.chat.completions.create({
    messages: [{ role:'user', content:prompt }],
    model:'llama3-70b-8192',
    temperature:0.7,
    max_tokens:700
  });
  return completion.choices[0]?.message?.content || 'Stars are aligning.';
}
