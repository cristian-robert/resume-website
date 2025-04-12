// /app/api/auth/verify-turnstile/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { token } = data;
  
  // Verify with Turnstile API
  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify', 
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: process.env.NEXT_PUBLIC_TURNSTILE_SECRET_KEY,
        response: token
      })
    }
  );
  
  const outcome = await response.json();
  
  if (outcome.success) {
    return NextResponse.json({ verified: true });
  } else {
    return NextResponse.json({ verified: false, error: outcome["error-codes"] }, { status: 400 });
  }
}