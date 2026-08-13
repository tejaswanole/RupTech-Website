import { NextResponse } from 'next/server';

const SHARED_SECRET = process.env.APPS_SCRIPT_SECRET || '';
const RFQ_SHEET_URL = process.env.RFQ_APPS_SCRIPT_URL || '';

export async function POST(request) {
  try {
    const body = await request.json();
    const { companyName, contactName, phone, email, productCategory, quantity, specs, timeline, hp } = body;

    // Honeypot check
    if (hp) return NextResponse.json({ ok: true });

    // Basic validation
    if (!contactName || !phone || !email || !productCategory || !specs) {
      return NextResponse.json({ error: 'Missing required RFQ fields' }, { status: 400 });
    }

    const payload = {
      secret: SHARED_SECRET,
      type: 'rfq',
      companyName: companyName || '',
      contactName,
      phone,
      email,
      productCategory,
      quantity: quantity || '',
      specifications: specs,
      deliveryTimeline: timeline || '',
      submittedAt: new Date().toISOString(),
    };

    // Forward to Google Apps Script / Sheet if configured
    if (RFQ_SHEET_URL) {
      await fetch(RFQ_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[rfq API]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
