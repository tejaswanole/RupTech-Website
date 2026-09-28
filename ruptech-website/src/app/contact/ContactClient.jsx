'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2, MessageCircle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '', hp: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I have an enquiry about your products.')}`;

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.hp) return; // honeypot
    setStatus('submitting');
    setError('');
    try {
      const res = await fetch('/api/contact', {
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

  const inputCls = 'w-full bg-surface border border-outline-variant rounded px-sm py-sm focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface outline-none transition-colors';
  const labelCls = 'block font-label-caps text-label-caps text-on-surface-variant mb-xs uppercase';

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container-low py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-sm">Contact Us</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Get in touch with Ruptech Engineers for inquiries about our manufacturing capabilities, product
            specifications, or to request a quote.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Send an Inquiry</h2>

              {status === 'success' ? (
                <div className="text-center py-xl">
                  <CheckCircle size={48} className="text-primary mx-auto mb-md" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Message Sent!</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Thank you for reaching out. We typically respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-md">
                  {/* Honeypot */}
                  <input type="text" name="hp" value={form.hp} onChange={handleChange} className="absolute -left-[9999px] w-px h-px opacity-0" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label htmlFor="name" className={labelCls}>Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Doe" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="interest" className={labelCls}>Area of Interest</label>
                    <select id="interest" name="interest" value={form.interest} onChange={handleChange} className={inputCls}>
                      <option value="">General Inquiry</option>
                      <option value="panel-enclosures">Panel Enclosures & Boxes</option>
                      <option value="cable-management">Cable Management</option>
                      <option value="industrial-storage">Industrial Storage</option>
                      <option value="sheet-metal-fabrication">Sheet Metal Fabrication</option>
                      <option value="custom-manufacturing">Custom Manufacturing / OEM</option>
                      <option value="partnership">Partnership / Vendor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelCls}>Message</label>
                    <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Please provide details of your inquiry..." className={inputCls} />
                  </div>

                  {status === 'error' && (
                    <p className="font-body-sm text-body-sm text-error">{error}</p>
                  )}

                  <div className="flex items-center justify-between flex-wrap gap-sm">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={status === 'submitting'}
                      className="bg-primary-container text-on-primary font-label-caps text-label-caps px-lg py-sm rounded hover:bg-[#0c6b5c] transition-colors disabled:opacity-60 flex items-center gap-2"
                    >
                      {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : 'Submit Inquiry'}
                    </button>
                    <div className="flex items-center gap-xs text-surface-tint font-mono-label text-mono-label">
                      <CheckCircle size={14} /> We respond within 24 hours.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-md">
            {BUSINESS.addresses.map((addr, i) => (
              <div key={i} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
                <div className="flex items-start gap-sm">
                  <MapPin size={24} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{addr.label}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{addr.line1}<br />{addr.line2}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-md">
              <div className="flex flex-col gap-sm">
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-sm hover:text-primary transition-colors">
                  <Phone size={20} className="text-primary" />
                  <span className="font-mono-label text-mono-label text-on-surface-variant">{BUSINESS.phone}</span>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-sm hover:text-primary transition-colors">
                  <Mail size={20} className="text-primary" />
                  <span className="font-mono-label text-mono-label text-on-surface-variant">{BUSINESS.email}</span>
                </a>
                <div className="flex items-center gap-sm">
                  <Clock size={20} className="text-primary" />
                  <span className="font-mono-label text-mono-label text-on-surface-variant">Mon–Sat: 9:00 AM – 6:00 PM (IST)</span>
                </div>
              </div>
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" id="contact-whatsapp-btn"
              className="flex items-center gap-sm p-sm rounded bg-surface hover:bg-surface-container transition-colors border border-outline-variant group">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant">WhatsApp</p>
                <p className="font-body-md text-body-md text-on-surface font-semibold">Message Us Directly</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="border-t border-outline-variant h-72 w-full relative bg-surface-container-high flex items-center justify-center">
        <div className="text-center text-outline opacity-50">
          <MapPin size={48} className="mx-auto mb-2" />
          <p className="font-label-caps text-label-caps">MIDC Ahmednagar, Maharashtra, India</p>
          <p className="font-body-sm text-body-sm mt-1">Google Maps embed — add iframe with API key</p>
        </div>
      </section>
    </>
  );
}
