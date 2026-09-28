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

const RFQ_SHEET_URL = process.env.RFQ_APPS_SCRIPT_URL || '';

const CATEGORIES = [
  'panel-enclosures',
  'cable-management',
  'industrial-storage',
  'sheet-metal-fabrication',
  'custom-oem',
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

  const companyName = cleanField(body.companyName, 150);
  const contactName = cleanField(body.contactName, 100);
  const phone = cleanField(body.phone, 20);
  const email = cleanField(body.email, 120);
  const productCategory = cleanField(body.productCategory, 40);
  const quantity = cleanField(body.quantity, 100);
  const specs = cleanField(body.specs, 5000);
  const timeline = cleanField(body.timeline, 200);

  const fields = [companyName, contactName, phone, email, productCategory, quantity, specs, timeline];
  if (fields.includes(null)) {
    return NextResponse.json({ error: 'Some fields are invalid or too long.' }, { status: 400 });
  }
  if (!contactName || !phone || !email || !specs || !CATEGORIES.includes(productCategory)) {
    return NextResponse.json({ error: 'Please fill in all required RFQ fields.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }
  if (!PHONE_RE.test(phone)) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 });
  }

  try {
    await forwardToSheet(RFQ_SHEET_URL, {
      type: 'rfq',
      companyName: sheetSafe(companyName),
      contactName: sheetSafe(contactName),
      phone: sheetSafe(phone),
      email: sheetSafe(email),
      productCategory,
      quantity: sheetSafe(quantity),
      specifications: sheetSafe(specs),
      deliveryTimeline: sheetSafe(timeline),
      submittedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[rfq API]', err.message);
    return NextResponse.json(
      { error: 'We could not submit your RFQ right now. Please email us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
