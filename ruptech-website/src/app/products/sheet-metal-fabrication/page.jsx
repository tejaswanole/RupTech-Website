import CTAButton from '@/components/CTAButton';
import { MessageCircle, Scissors, CircleDot, ArrowUpDown, Ruler, GitMerge, PaintBucket, CheckCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';
import { pageMeta } from '@/lib/seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = pageMeta({
  title: 'Sheet Metal Fabrication Services',
  description:
    'Precision sheet metal fabrication services — CNC laser cutting, turret punching, press brake bending, MIG/TIG welding, and powder coating from Ruptech Engineers, Ahmednagar.',
  path: '/products/sheet-metal-fabrication',
});

const fabricationServices = [
  {
    name: 'CNC Laser Cutting',
    description: '3KW fiber laser for precision cutting up to 10mm thick M.S. / 6mm S.S., bed size 1.5m × 3m. High-speed, burr-free results on complex profiles.',
    Icon: Scissors,
  },
  {
    name: 'CNC Turret Punching',
    description: 'Multi-tool punching for complex hole patterns, louvres, and embossing on sheet metal panels.',
    Icon: CircleDot,
  },
  {
    name: 'CNC Press Brake Bending',
    description: '1.5m CNC press brake for accurate angular bending up to 3mm M.S. Back-gauge controlled for consistency.',
    Icon: ArrowUpDown,
  },
  {
    name: 'NC Shearing',
    description: '3m shearing machine for clean, straight cuts on large sheets up to 5mm thickness.',
    Icon: Ruler,
  },
  {
    name: 'MIG / TIG Welding',
    description: 'Certified welders for structural and aesthetically finished weld joints on all grades of steel.',
    Icon: GitMerge,
  },
  {
    name: 'Powder Coating',
    description: 'Full in-house powder coating line — RAL colour matching, zinc phosphate pre-treatment, indoor/outdoor grades.',
    Icon: PaintBucket,
  },
];

const finishingOptions = [
  { name: 'Powder Coating', desc: 'RAL colour matching, indoor/outdoor grades, electrostatic spray for a uniform, durable finish.' },
  { name: 'Zinc Phosphating', desc: 'Pre-treatment for enhanced adhesion and corrosion protection before powder coating.' },
  { name: 'Hot-Dip Galvanizing', desc: 'For cable trays and outdoor structures requiring maximum corrosion resistance.' },
  { name: 'Epoxy Primer', desc: 'High-build primer coat ideal for heavy-duty chemical or abrasive environments.' },
  { name: 'Brush / Satin Finish', desc: 'For stainless steel components requiring an aesthetic, hygienic surface finish.' },
];

export default function SheetMetalFabricationPage() {
  const waUrl = whatsappLink('Hello! I need Sheet Metal Fabrication services. Please share details.');

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Sheet Metal Fabrication', href: '/products/sheet-metal-fabrication' },
        ]}
      />

      {/* Header */}
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Sheet Metal Fabrication</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            End-to-end precision sheet metal fabrication — from raw material to finished, powder-coated components.
            Serving OEM, EPC, and industrial clients across Maharashtra with consistent quality and on-time delivery.
          </p>
        </div>
      </header>

      <div className="max-w-container-max mx-auto px-gutter py-xl space-y-xl">

        {/* ── Capabilities Grid ── */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Our Fabrication Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {fabricationServices.map(({ name, description, Icon }) => (
              <div
                key={name}
                className="group border border-outline-variant rounded-lg p-lg bg-surface-container-lowest
                           hover:border-primary hover:shadow-md transition-all duration-200 cursor-default"
              >
                {/* Icon bubble */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-md
                             bg-surface-container group-hover:bg-primary-container
                             transition-colors duration-200"
                >
                  <Icon
                    size={22}
                    className="text-on-surface-variant group-hover:text-on-primary-container transition-colors duration-200"
                  />
                </div>

                {/* Title */}
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm group-hover:text-primary transition-colors duration-200">
                  {name}
                </h3>

                {/* Description */}
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Surface Finishing ── */}
        <section className="bg-surface-container-low border border-outline-variant rounded-lg p-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Surface Finishing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {finishingOptions.map((opt) => (
              <div key={opt.name} className="flex items-start gap-sm">
                <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-sm">{opt.name}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="bg-inverse-surface rounded-lg p-lg flex flex-col md:flex-row items-center justify-between gap-md">
          <div>
            <h3 className="font-headline-md text-headline-md text-inverse-on-surface mb-xs">
              Have a Drawing to Share?
            </h3>
            <p className="font-body-md text-body-md text-surface-variant">
              Upload your DXF / DWG / PDF drawing and get a quote within 24 hours.
            </p>
          </div>
          <div className="flex gap-sm flex-wrap shrink-0">
            <CTAButton href="/quote" variant="primary">Request a Quote</CTAButton>
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="fabrication-whatsapp-btn"
                className="bg-[#25D366] text-white font-label-caps text-label-caps px-md py-sm rounded
                           hover:bg-[#1ebe5e] transition-colors flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            )}
          </div>
        </section>

      </div>
    </>
  );
}
