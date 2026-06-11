// scripts/generate-horoscopes.js
// Production-grade daily horoscope generator using Groq API
import Groq from 'groq-sdk';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'data', 'daily-horoscope.json');

const signs = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateForSign(sign, retries = 2) {
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

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const completion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'llama3-70b-8192',
        temperature: 0.8,
        max_tokens: 800,
      });
      const content = completion.choices[0]?.message?.content || '';
      if (!content) throw new Error('Empty response');
      return content;
    } catch (err) {
      console.error(`❌ Attempt ${attempt} failed for ${sign}:`, err.message);
      if (attempt === retries) {
        return `${sign} horoscope is being prepared by Acharya Nikhil Shastri. Please check back soon.`;
      }
      // Wait before retry
      await new Promise(res => setTimeout(res, 2000));
    }
  }
}

async function main() {
  console.log('🚀 Starting daily horoscope generation...');
  const date = new Date().toISOString().split('T')[0];
  const horoscopes = {};

  for (const sign of signs) {
    console.log(`🔮 Generating for ${sign}...`);
    horoscopes[sign] = await generateForSign(sign);
  }

  const data = { date, horoscopes };
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, JSON.stringify(data, null, 2));
  console.log(`✅ Horoscopes saved to ${outputPath} for ${date}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
