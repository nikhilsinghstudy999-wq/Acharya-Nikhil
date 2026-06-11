import { NextRequest, NextResponse } from 'next/server';
import { generateTarotReading } from '@/lib/groq-client';
export async function POST(req:NextRequest) {
  const { cards } = await req.json();
  if(!cards||cards.length!==3) return NextResponse.json({error:'Exactly 3 cards required'},{status:400});
  try {
    const interpretation = await generateTarotReading(cards);
    return NextResponse.json({interpretation});
  } catch { return NextResponse.json({interpretation:'Cosmic energies are veiled. Try again later.'}); }
}
