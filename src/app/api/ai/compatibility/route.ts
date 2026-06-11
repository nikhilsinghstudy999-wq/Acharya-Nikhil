import { NextRequest, NextResponse } from 'next/server';
import { generateCompatibility } from '@/lib/groq-client';
export async function POST(req:NextRequest) {
  const { sign1, sign2 } = await req.json();
  try {
    const result = await generateCompatibility(sign1,sign2);
    return NextResponse.json({result});
  } catch { return NextResponse.json({result:'Unable to compute at this time.'}); }
}
