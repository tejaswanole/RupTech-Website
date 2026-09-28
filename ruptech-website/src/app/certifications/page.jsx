import CTAButton from '@/components/CTAButton';
import { CheckCircle, Clock } from 'lucide-react';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Certifications & Compliance',
  description:
    'Ruptech Engineers is committed to engineering quality and compliance — ISO 9001:2015 quality management, material traceability, and rigorous inspection standards.',
  path: '/certifications',
});

const certifications = [
  {
    name: 'ISO 9001:2015',
    category: 'Quality Management Systems',
    issuingBody: 'TÜV SÜD',
    validThru: 'Dec 2026',
    status: 'ACTIVE',
  },
  {
    name: 'ISO 14001:2015',
    category: 'Environmental Management',
    issuingBody: 'Bureau Veritas',
    validThru: 'Oct 2025',
    status: 'ACTIVE',
  },
  {
    name: 'CE Marking',
    category: 'European Safety Compliance',
    issuingBody: 'BSI Group',
    validThru: 'Mar 2027',
    status: 'ACTIVE',
  },
  {
    name: 'ISO 45001:2018',
    category: 'Occupational Health & Safety',
    issuingBody: 'TÜV Rheinland',
    validThru: 'Q3 2025 (Expected)',
    status: 'PENDING',
  },
];

const traceabilityItems = [
  { label: 'Material Test Reports (MTR)', value: 'EN 10204 Type 3.1 Provided on Request' },
  { label: 'Non-Destructive Testing (NDT)', value: '100% Dimensional Inspection on Critical Parts' },
  { label: 'Retention Period', value: 'Digital & Physical Archives Retained for 7 Years' },
  { label: 'Incoming Material Inspection', value: 'Mill certificate verification for all raw material' },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container-low border-b border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <div className="inline-flex items-center gap-xs px-2 py-1 bg-surface-variant rounded-sm">
              <CheckCircle size={16} className="text-primary" />
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                Compliance & Quality
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface">Certifications & Compliance</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Our commitment to engineering excellence is validated by internationally recognized standards. Every
              component manufactured at Ruptech undergoes rigorous quality control with full documentation.
            </p>
          </div>
          <div className="relative h-64 border border-outline-variant bg-surface rounded shadow-sm overflow-hidden flex items-center justify-center p-md">
            <div className="relative z-10 text-center space-y-sm p-lg bg-surface/90 backdrop-blur-sm border border-outline-variant rounded">
              <CheckCircle size={48} className="text-primary mx-auto" />
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Exacting Standards</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Built to global industrial benchmarks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-lg flex justify-between items-end">
            <div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Accreditations</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Verified compliance across quality, safety, and environmental standards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            {certifications.map((cert) => (
              <article
                key={cert.name}
                className="bg-surface-container-lowest border border-outline-variant rounded group hover:border-primary transition-colors relative overflow-hidden flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-surface-container-low border-b border-outline-variant relative p-md flex items-center justify-center bg-grid-pattern">
                  {cert.status === 'PENDING' ? (
                    <div className="w-full h-full border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-outline">
                      <Clock size={36} className="mb-2 opacity-50" />
                      <span className="font-label-caps text-label-caps opacity-50">In Review</span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <CheckCircle size={48} className="text-primary mx-auto mb-2" />
                      <span className="font-headline-sm text-headline-sm text-on-surface">{cert.name}</span>
                    </div>
                  )}
                  {/* Status chip */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-surface-container-highest border border-outline-variant rounded-sm flex items-center gap-1">
                    <div className={`w-2 h-2 rounded-full ${cert.status === 'ACTIVE' ? 'bg-primary-container' : 'bg-tertiary-container'}`} />
                    <span className="font-mono-label text-mono-label text-on-surface-variant text-[10px]">{cert.status}</span>
                  </div>
                </div>

                <div className="p-md flex-grow flex flex-col">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{cert.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{cert.category}</p>
                  <div className="mt-auto space-y-sm">
                    <div className="flex justify-between border-t border-outline-variant pt-3">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">ISSUING BODY</span>
                      <span className="font-mono-label text-mono-label text-on-surface">{cert.issuingBody}</span>
                    </div>
                    <div className="flex justify-between border-t border-outline-variant pt-3">
                      <span className="font-label-caps text-label-caps text-on-surface-variant">
                        {cert.status === 'PENDING' ? 'EXPECTED' : 'VALID THRU'}
                      </span>
                      <span className="font-mono-label text-mono-label text-on-surface">{cert.validThru}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Material Traceability */}
      <section className="bg-surface-container border-y border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-lg">
          <div className="md:col-span-4">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Material Traceability</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We maintain strict documentation for all raw materials, ensuring full lifecycle traceability for
              critical engineering projects.
            </p>
          </div>
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded overflow-hidden">
            <div className="bg-surface-container-low border-b border-outline-variant p-sm px-md flex items-center gap-2">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Standard Traceability Protocol — RX-900</span>
            </div>
            {traceabilityItems.map((item, i) => (
              <div key={item.label} className={`flex flex-col sm:flex-row justify-between p-md border-b last:border-0 border-outline-variant hover:bg-surface-bright transition-colors ${i % 2 !== 0 ? 'bg-surface-container-low/30' : ''}`}>
                <div className="font-label-caps text-label-caps text-on-surface-variant flex-1">{item.label}</div>
                <div className="font-mono-label text-mono-label text-on-surface sm:text-right mt-1 sm:mt-0">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
