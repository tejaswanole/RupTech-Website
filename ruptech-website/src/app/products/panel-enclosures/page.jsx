import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTAButton from '@/components/CTAButton';
import { pageMeta } from '@/lib/seo';
import PanelEnclosuresClient from './PanelEnclosuresClient';

export const metadata = pageMeta({
  title: 'Panel Enclosures & Boxes',
  description:
    'M.S. distribution boxes, MCCB boxes, meter boxes, EV charger boxes, agriculture boxes and panel boxes from Ruptech Engineers, MIDC Ahmednagar. Catalogue sizes and custom dimensions.',
  path: '/products/panel-enclosures',
});

// Products we build to order; no standard catalogue sizes yet.
const madeToOrder = [
  {
    name: 'APFC Panel',
    desc: 'Automatic power factor correction panel enclosures, floor-standing, multi-door.',
    src: '/images/products/apfc-panel/apfc_panel_0.webp',
  },
  {
    name: 'Feeder Pillar',
    desc: 'Outdoor feeder pillar enclosures with rain canopy and lockable doors.',
    src: '/images/products/feeder-pillar/feeder_pillar_0.webp',
  },
  {
    name: 'Bus Bar Box',
    desc: 'Bus bar chambers with copper bar mounting and incoming switch provision.',
    src: '/images/products/bus-bar-box/bus_bar_box_0.webp',
  },
  {
    name: 'Junction Box',
    desc: 'Compact M.S. junction boxes with knockouts for cable entry.',
    src: '/images/products/junction-box/junction_box_0.webp',
  },
];

export default function PanelEnclosuresPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Panel Enclosures & Boxes', href: '/products/panel-enclosures' },
        ]}
      />

      {/* Header */}
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid md:grid-cols-2 gap-lg items-center">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Panel Enclosures & Boxes</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
                High-precision, industrial-grade sheet metal enclosures designed to protect critical electrical
                components in demanding environments. Engineered for durability, thermal management, and compliance.
              </p>
              <div className="flex gap-sm flex-wrap">
                {['IP65 Rated', 'Precision Crafted', 'Powder Coated'].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container text-on-surface-variant rounded font-label-caps text-label-caps border border-outline-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low">
              <Image
                src="/images/products/distribution-box/mseb_box_1.webp"
                alt="100A double circuit M.S. distribution box with bus bars, door open"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-container-max mx-auto px-gutter py-xl space-y-xl">
        <PanelEnclosuresClient />

        {/* Made to order */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Made to Order</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-md">
            Built to your drawing or specification. Share your requirements for sizes and a quotation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {madeToOrder.map((item) => (
              <div key={item.name} className="border border-outline-variant rounded-lg overflow-hidden bg-surface-container-lowest flex flex-col">
                <div className="relative aspect-[4/3] bg-surface-container">
                  <Image src={item.src} alt={item.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                </div>
                <div className="p-md flex-grow">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs">{item.name}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-md">
            <CTAButton href="/quote">Request a Quote</CTAButton>
          </div>
        </section>
      </div>
    </>
  );
}
