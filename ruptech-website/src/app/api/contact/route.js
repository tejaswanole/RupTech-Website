import { NextResponse } from 'next/server';

const SHARED_SECRET = process.env.APPS_SCRIPT_SECRET || '';
const CONTACT_SHEET_URL = process.env.CONTACT_APPS_SCRIPT_URL || '';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, interest, message, hp } = body;

    // Honeypot check
    if (hp) return NextResponse.json({ ok: true });

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields: name, phone, email' }, { status: 400 });
    }

    const payload = {
      secret: SHARED_SECRET,
      type: 'contact',
      name,
      phone,
      email,
      interest: interest || 'General Inquiry',
      message: message || '',
      submittedAt: new Date().toISOString(),
    };

    // Forward to Google Apps Script / Sheet if configured
    if (CONTACT_SHEET_URL) {
      await fetch(CONTACT_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
