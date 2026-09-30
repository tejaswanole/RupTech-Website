'use client';
import { useState } from 'react';
import { CheckCircle, Loader2, Upload, MessageCircle } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/lib/constants';

export default function QuotePageClient() {
  const [form, setForm] = useState({
    companyName: '', contactName: '', phone: '', email: '',
    productCategory: '', quantity: '', specs: '', timeline: '', hp: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const waUrl = whatsappLink('Hello! I would like to request a quote for your products.');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.hp) return;
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Submission failed. Please email us directly.');
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  const inputCls = 'w-full bg-surface border border-outline-variant rounded px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary user-invalid:border-error user-invalid:ring-1 user-invalid:ring-error font-body-md text-body-md text-on-surface outline-none transition-colors';
  const labelCls = 'block font-label-caps text-label-caps text-on-surface-variant mb-xs uppercase';

  return (
    <>
      {/* Hero */}
      <section className="bg-inverse-surface py-xl border-b border-outline">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h1 className="font-headline-xl text-headline-xl text-inverse-on-surface mb-sm">Request a Quote</h1>
          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl mx-auto">
            Share your requirements and our engineering team will send you a detailed quotation within 24 hours.
            All files and drawings handled under strict NDA.
          </p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* RFQ Form */}
          <div className="lg:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">RFQ Details</h2>

              {status === 'success' ? (
                <div className="text-center py-xl">
                  <CheckCircle size={64} className="text-primary mx-auto mb-md" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Quote Request Submitted!</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-[28rem] mx-auto">
                    Thank you. Our team will review your requirements and send a quotation to <strong>{form.email}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-md">
                  <input type="text" name="hp" value={form.hp} onChange={handleChange} className="absolute -left-[9999px] w-px h-px opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  {/* Company / Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label htmlFor="companyName" className={labelCls}>Company Name *</label>
                      <input id="companyName" name="companyName" type="text" required value={form.companyName} onChange={handleChange} placeholder="Acme Industries Pvt. Ltd." className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="contactName" className={labelCls}>Contact Name *</label>
                      <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} placeholder="Rajesh Kumar" className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label htmlFor="rfqPhone" className={labelCls}>Phone Number *</label>
                      <input id="rfqPhone" name="phone" type="tel" required pattern="[0-9+ \(\)\-]{7,20}" title="Digits, spaces, +, - and brackets only (7 to 20 characters)" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="rfqEmail" className={labelCls}>Business Email *</label>
                      <input id="rfqEmail" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="purchases@acme.com" className={inputCls} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label htmlFor="productCategory" className={labelCls}>Product Category *</label>
                      <select id="productCategory" name="productCategory" required value={form.productCategory} onChange={handleChange} className={inputCls}>
                        <option value="">Select a Category</option>
                        <option value="panel-enclosures">Panel Enclosures & Boxes</option>
                        <option value="cable-management">Cable Management Trays</option>
                        <option value="industrial-storage">Industrial Storage Racks</option>
                        <option value="sheet-metal-fabrication">Sheet Metal Fabrication</option>
                        <option value="custom-oem">Custom / OEM Manufacturing</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className={labelCls}>Approx. Quantity *</label>
                      <input id="quantity" name="quantity" type="text" required value={form.quantity} onChange={handleChange} placeholder="e.g., 50 units / 200 kg" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specs" className={labelCls}>Specifications / Requirements *</label>
                    <textarea id="specs" name="specs" required rows={5} value={form.specs} onChange={handleChange}
                      placeholder="Please describe: dimensions, material (M.S. / S.S. / Aluminium), thickness, surface finish (powder coat colour, galvanized, etc.), any special features..."
                      className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelCls}>Required Delivery Timeline</label>
                    <input id="timeline" name="timeline" type="text" value={form.timeline} onChange={handleChange} placeholder="e.g., 30 days from order confirmation" className={inputCls} />
                  </div>

                  {/* Drawing upload notice */}
                  <div className="flex items-start gap-sm p-sm bg-surface-container border border-outline-variant rounded">
                    <Upload size={18} className="text-on-surface-variant mt-0.5 shrink-0" />
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      <strong className="text-on-surface">Drawings / Files:</strong> After submitting, email your DXF, DWG, or PDF drawings to{' '}
                      <a href={`mailto:${BUSINESS.email}`} className="text-primary underline">{BUSINESS.email}</a>.
                      {waUrl && (
                        <>
                          {' '}You can also share them on{' '}
                          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">WhatsApp</a>.
                        </>
                      )}
                    </p>
                  </div>

                  {status === 'error' && <p className="font-body-sm text-body-sm text-error">{error}</p>}

                  <div className="flex items-center justify-between flex-wrap gap-sm pt-sm border-t border-outline-variant">
                    <button type="submit" id="rfq-submit-btn" disabled={status === 'submitting'}
                      className="bg-primary-container text-on-primary font-label-caps text-label-caps px-lg py-sm rounded hover:bg-[#0c6b5c] transition-colors disabled:opacity-60 flex items-center gap-2">
                      {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Submitting...</> : 'Submit RFQ'}
                    </button>
                    <div className="flex items-center gap-xs text-surface-tint font-mono-label text-mono-label">
                      <CheckCircle size={14} /> Response within 24 hours
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-md">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-md">What to Include</h3>
              <ul className="space-y-sm font-body-sm text-body-sm text-on-surface-variant">
                {[
                  'Product category & model (if known)',
                  'Dimensions (W × H × D in mm)',
                  'Material specification (M.S. / S.S. / Aluminium)',
                  'Sheet thickness (1.2mm / 1.5mm / 2mm etc.)',
                  'Surface finish (RAL colour, galvanized, bare)',
                  'Quantity required',
                  'DXF / DWG / PDF drawing (attach separately)',
                  'Required delivery location & timeline',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center shrink-0 mt-0.5 font-mono-label text-mono-label text-on-surface-variant text-[10px]">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {waUrl && (
              <a href={waUrl} target="_blank" rel="noopener noreferrer" id="rfq-whatsapp-btn"
                className="flex items-center gap-sm p-md rounded-lg bg-[#25D366] text-white hover:bg-[#1ebe5e] transition-colors">
                <MessageCircle size={28} />
                <div>
                  <p className="font-label-caps text-label-caps opacity-90">Prefer WhatsApp?</p>
                  <p className="font-headline-sm text-headline-sm font-bold">Chat With Us Directly</p>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
