// scripts/generate-horoscopes.js
// Calls Groq API to generate daily horoscopes for all 12 signs
// Saves the result to public/data/daily-horoscope.json
import Groq from 'groq-sdk';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'data', 'daily-horoscope.json');

// Zodiac signs list
const signs = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateForSign(sign) {
  const prompt = `You are Acharya Nikhil Shastri, India's most viewed astrology expert and a world‑renowned Vedic astrologer. Today's date is ${new Date().toISOString().split('T')[0]}. 
Generate a profound, uplifting daily horoscope for ${sign}. Structure it exactly as:

🕉️ [Opening Sanskrit shloka with English translation]
Overall Mood: [insightful mood forecast]
Love & Relationships: [romantic guidance]
Career & Finances: [professional advice]
Health & Wellness: [holistic wellness tip]
Lucky Color: [color]
Lucky Number: [number]

Make the language poetic, warm, and rooted in Vedic wisdom.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'llama3-70b-8192',
      temperature: 0.8,
      max_tokens: 800,
    });
    return completion.choices[0]?.message?.content || 'Horoscope unavailable at this moment.';
  } catch (err) {
    console.error(`Error generating for ${sign}:`, err);
    return `${sign} horoscope is being prepared by Acharya Nikhil Shastri. Please check back soon.`;
  }
}

async function main() {
  console.log('🚀 Generating daily horoscopes...');
  const date = new Date().toISOString().split('T')[0];
  const horoscopes = {};

  for (const sign of signs) {
    console.log(`🔮 Generating for ${sign}...`);
    horoscopes[sign] = await generateForSign(sign);
  }

  const data = { date, horoscopes };
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`✅ Horoscopes saved to ${outputPath}`);
}

main().catch(console.error);
