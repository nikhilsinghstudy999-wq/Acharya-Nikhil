import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { zodiacSigns } from '@/lib/astrology-utils';
export async function GET(req:NextRequest) {
  if(req.headers.get('Authorization')!==`Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({error:'Unauthorized'},{status:401});
  const today = new Date().toISOString().split('T')[0];
  for(const sign of Object.keys(zodiacSigns)) { revalidatePath(`/horoscope/daily/${sign}/${today}`); }
  return NextResponse.json({revalidated:true, date:today});
}
