import { NextResponse } from 'next/server';
import {
  clientIp,
  isRateLimited,
  readJsonBody,
  cleanField,
  sheetSafe,
  EMAIL_RE,
  PHONE_RE,
  forwardToSheet,
} from '@/lib/formGuard';

const CONTACT_SHEET_URL = process.env.CONTACT_APPS_SCRIPT_URL || '';

const INTERESTS = [
  '',
  'panel-enclosures',
  'cable-management',
  'industrial-storage',
  'sheet-metal-fabrication',
  'custom-manufacturing',
  'partnership',
];

export async function POST(request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const body = await readJsonBody(request);
  if (!body) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot check
  if (body.hp) return NextResponse.json({ ok: true });

  const name = cleanField(body.name, 100);
  const phone = cleanField(body.phone, 20);
  const email = cleanField(body.email, 120);
  const interest = cleanField(body.interest, 40);
  const message = cleanField(body.message, 5000);

  if ([name, phone, email, interest, message].includes(null) || !INTERESTS.includes(interest)) {
    return NextResponse.json({ error: 'Some fields are invalid or too long.' }, { status: 400 });
  }
  if (!name || !phone || !email) {
    return NextResponse.json({ error: 'Please fill in name, phone and email.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }

  try {
    await forwardToSheet(CONTACT_SHEET_URL, {
      type: 'contact',
      name: sheetSafe(name),
      phone: sheetSafe(phone),
      email: sheetSafe(email),
      interest: interest || 'General Inquiry',
      message: sheetSafe(message),
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[contact API]', err.message);
    return NextResponse.json(
      { error: 'We could not send your message right now. Please email us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
