import { Factory } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import { machines, processSteps } from '@/lib/productData';

export const metadata = {
  title: 'Manufacturing Infrastructure',
  description:
    'Explore Ruptech Engineers\' state-of-the-art manufacturing facility in MIDC Ahmednagar — CNC laser cutting, press brake bending, MIG/TIG welding, and powder coating.',
};

const facilitySections = [
  {
    label: 'Work 1 (Office & Assembly)',
    address: 'Plot L-237, MIDC Ahmednagar',
    plot: '7,000 sqft plot / 5,000 sqft built-up',
  },
  {
    label: 'Work 2 (Fabrication & Coating)',
    address: 'Plot L-248, MIDC Ahmednagar, PIN 414111',
    plot: '10,000 sqft plot / 7,000 sqft built-up',
  },
];

const categoryColors = {
  Cutting: 'bg-primary text-on-primary',
  Bending: 'bg-surface-variant text-on-surface-variant',
  Punching: 'bg-secondary text-on-secondary',
  Welding: 'bg-tertiary-container text-on-tertiary-container',
  Finishing: 'bg-surface-container-high text-on-surface',
};

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-container-lowest border-b border-surface-variant py-xl overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#006153 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <div>
            <div className="inline-flex items-center gap-xs px-xs py-xs bg-surface-variant rounded text-on-surface-variant font-label-caps text-label-caps mb-sm uppercase tracking-wider">
              <Factory size={16} /> Infrastructure
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-background mb-md">
              Our Manufacturing <span className="text-primary">Facility</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl">
              Two dedicated facilities in MIDC Ahmednagar with a combined area of over 10,000 sqft of built-up
              space — equipped with modern CNC machinery, welding stations, and an in-house powder coating line.
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              {facilitySections.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-sm p-sm bg-surface rounded border border-outline-variant hover:border-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Factory size={18} />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-background">{f.label}</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{f.address}</p>
                    <p className="font-mono-label text-mono-label text-on-surface-variant">{f.plot}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block relative h-[400px] w-full rounded border border-outline-variant overflow-hidden shadow-sm">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* Machine Gallery */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="mb-lg text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Advanced Machinery</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Precision equipment powering our engineering excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {machines.map((machine, i) => (
            <div
              key={machine.name}
              className={`group relative overflow-hidden rounded border border-outline-variant bg-surface ${
                i === 0 ? 'md:col-span-2' : ''
              } h-[280px] flex flex-col justify-end p-md hover:border-primary transition-colors`}
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-${
                  i === 0
                    ? '1504917595217-d4dc5ebe6122'
                    : i === 1
                    ? '1581091226825-a6a2a5aee158'
                    : i === 2
                    ? '1565043666747-69f6646db940'
                    : i === 3
                    ? '1504328345606-18bbc8c9d7d1'
                    : '1581091226825-a6a2a5aee158'
                }?w=800&q=70')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10">
                <span
                  className={`inline-block px-xs py-1 font-label-caps text-label-caps rounded mb-xs ${
                    categoryColors[machine.category] || 'bg-surface-variant text-on-surface-variant'
                  }`}
                >
                  {machine.category}
                </span>
                <h3 className={`${i === 0 ? 'font-headline-md text-headline-md' : 'font-headline-sm text-headline-sm'} text-white`}>
                  {machine.name}
                </h3>
                <p className="font-body-sm text-body-sm text-surface-container-high mt-xs max-w-md">
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-xl bg-surface-container border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-lg text-center">
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-xs">Production Workflow</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Streamlined from concept to dispatch.
            </p>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-outline-variant z-0" />
            <div className="grid grid-cols-2 md:grid-cols-7 gap-md relative z-10">
              {processSteps.map((step, i) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-mono-label mb-sm shadow-sm ${
                      i === 0
                        ? 'bg-primary text-on-primary border-2 border-primary'
                        : 'bg-surface border-2 border-outline-variant text-on-surface-variant'
                    }`}
                  >
                    {step.step}
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-background text-sm">{step.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs mt-1">{step.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-inverse-surface py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mb-sm">
            Need Custom Manufacturing?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant mb-lg max-w-2xl mx-auto">
            Share your specifications and our engineering team will review your requirements within 24 hours.
          </p>
          <CTAButton href="/quote" size="lg">Request a Quote</CTAButton>
        </div>
      </section>
    </>
  );
}
