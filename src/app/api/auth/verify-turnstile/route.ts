import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { token } = data;
    
    if (!token) {
      return NextResponse.json(
        { verified: false, error: 'Missing token' },
        { status: 400 }
      );
    }
    
    // Verify with Turnstile API
    const formData = new URLSearchParams();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
    formData.append('response', token);
    
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify', 
      {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    
    const outcome = await response.json();
    
    if (outcome.success) {
      return NextResponse.json({ verified: true });
    } else {
      return NextResponse.json(
        { verified: false, error: outcome["error-codes"] },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return NextResponse.json(
      { verified: false, error: 'Verification failed' },
      { status: 500 }
    );
  }
}
