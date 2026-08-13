import CTAButton from '@/components/CTAButton';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Custom Manufacturing & OEM/ODM',
  description:
    'Bespoke sheet metal fabrication and OEM/ODM manufacturing services from Ruptech Engineers — from design feasibility to batch production and dispatch.',
};

const capabilities = [
  'Sheet metal enclosures to customer drawings (DXF / DWG / PDF)',
  'CNC laser cutting of complex profiles and patterns',
  'Multi-bend press brake components with tight tolerances',
  'Welded structural assemblies and frames',
  'Custom powder coating in any RAL colour',
  'Stainless steel & aluminium fabrication',
  'OEM batch production runs (10 to 10,000+ pieces)',
  'Prototype → Approval → Production workflow',
  'NDA-protected drawing handling and IP confidentiality',
];

const oemSteps = [
  { step: '01', title: 'Share Drawing', desc: 'Upload your DXF, DWG, STEP, or PDF drawing via our RFQ form.' },
  { step: '02', title: 'Feasibility Check', desc: 'Our engineers review the design for manufacturability within 24 hours.' },
  { step: '03', title: 'Quotation', desc: 'Detailed quote with material, process, and unit pricing sent to you.' },
  { step: '04', title: 'Prototype', desc: 'First article / prototype sample manufactured and dispatched for approval.' },
  { step: '05', title: 'Batch Production', desc: 'Upon approval, full batch production begins with weekly status updates.' },
  { step: '06', title: 'Finishing', desc: 'Powder coating, surface treatment, and branding applied as per specs.' },
  { step: '07', title: 'Quality Check', desc: '100% dimensional and cosmetic inspection before dispatch.' },
  { step: '08', title: 'Dispatch', desc: 'Packed and dispatched with inspection report and test certificates.' },
];

export default function CustomManufacturingPage() {
  return (
    <>
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Custom Manufacturing & OEM/ODM</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            From concept drawings to full-scale batch production — we partner with OEMs, EPCs, and engineering
            firms to manufacture precision sheet metal components to exact specifications, with strict confidentiality.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-xl space-y-xl">
        {/* Capabilities */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">What We Can Build For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-sm p-sm border border-outline-variant rounded bg-surface-container-lowest hover:border-primary transition-colors">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="font-body-sm text-body-sm text-on-surface-variant">{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8-Step OEM Process */}
        <section className="bg-surface-container-low border-y border-outline-variant py-xl -mx-gutter px-gutter">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-lg text-center">Our OEM/ODM Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {oemSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className={`rounded-lg p-md border transition-colors ${i === 0 ? 'border-primary bg-primary-container/10' : 'border-outline-variant bg-surface-container-lowest hover:border-primary'}`}>
                  <div className={`font-mono-label text-mono-label mb-sm ${i === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {s.step}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">{s.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{s.desc}</p>
                </div>
                {i < oemSteps.length - 1 && (
                  <ArrowRight size={14} className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-outline-variant z-10" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-inverse-surface rounded-lg p-lg text-center">
          <h3 className="font-headline-md text-headline-md text-inverse-on-surface mb-sm">
            Ready to Start Your OEM Project?
          </h3>
          <p className="font-body-md text-body-md text-surface-variant mb-lg max-w-xl mx-auto">
            Upload your drawings and receive a detailed quotation within 24 hours. All files handled under strict NDA.
          </p>
          <CTAButton href="/quote" size="lg">Submit an RFQ Now</CTAButton>
        </section>
      </main>
    </>
  );
}
