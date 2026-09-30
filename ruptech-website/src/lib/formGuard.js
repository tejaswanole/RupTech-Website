// Shared helpers for the contact and RFQ API routes.

const MAX_BODY_BYTES = 20 * 1024;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const UPSTREAM_TIMEOUT_MS = 8000;

// Best-effort per-IP limiter. Memory is per server instance, so this slows
// down abuse but is not a hard guarantee on serverless hosting.
const hits = new Map();

export function clientIp(request) {
  const fwd = request.headers.get('x-forwarded-for');
  return (fwd ? fwd.split(',')[0] : request.headers.get('x-real-ip')) || 'unknown';
}

export function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

// Returns the parsed JSON object, or null if the body is too large or invalid.
export async function readJsonBody(request) {
  const length = Number(request.headers.get('content-length') || 0);
  if (length > MAX_BODY_BYTES) return null;
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) return null;
  try {
    const data = JSON.parse(text);
    return data && typeof data === 'object' && !Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

// Trimmed string or '' ; rejects non-strings and values over maxLen.
export function cleanField(value, maxLen) {
  if (value === undefined || value === null) return '';
  if (typeof value !== 'string') return null;
  const v = value.trim();
  return v.length > maxLen ? null : v;
}

// Stops spreadsheet apps from treating user input as a formula.
export function sheetSafe(value) {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+0-9 ()-]{7,20}$/;

// Sends the payload to the Apps Script webhook. Throws if not configured or on failure.
export async function forwardToSheet(url, payload) {
  const secret = process.env.APPS_SCRIPT_SECRET || '';
  if (!url || !secret) throw new Error('Form storage is not configured');

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, ...payload }),
    signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Sheet webhook responded ${res.status}`);
}
