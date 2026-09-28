import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { storageRacks } from '@/lib/productData';
import { BUSINESS } from '@/lib/constants';
import { MessageCircle, AlertTriangle, ImageOff } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Industrial Storage Solutions',
  description:
    'Industrial storage racks manufactured by Ruptech Engineers — Single Slotted Angle Rack, Super Shop/Mall Rack, and Hardware Rack. Mild Steel, customized sizes available.',
};

const specCols = [
  { key: 'code', label: 'Code', className: 'text-primary font-bold' },
  { key: 'description', label: 'Description' },
  { key: 'size', label: 'Standard Size' },
  { key: 'material', label: 'Material' },
  { key: 'note', label: 'Note' },
];

export default function IndustrialStoragePage() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I am interested in Industrial Storage Racks. Please share details and pricing.')}`;

  return (
    <>
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Industrial Storage Racks</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            M.S. (Mild Steel) storage racks in three standard types — Slotted Angle Rack, Super Shop / Mall Rack,
            and Hardware Rack. Customized sizes available on request for any warehouse, factory, or retail space.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-xl space-y-lg">
        {/* Spec Table */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Storage Rack Specifications</h2>
          <SpecTable rows={storageRacks} columns={specCols} />
          <p className="mt-sm font-body-sm text-body-sm text-on-surface-variant">
            * All racks are Mild Steel construction. Customized sizes available — share your requirements for a tailored quote.
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {[
            { title: 'Single Slotted Angle Rack', desc: 'Standard 8ft×4ft×2ft rack built from Mild Steel slotted angles. Adjustable shelf heights, easy assembly, suitable for warehouses and factory floors.', image: '/images/products/storage-racks/slotted_angle_rack_0.webp' },
            { title: 'Super Shop / Mall Rack', desc: '7ft×3ft×1.5ft display and storage rack ideal for retail stores, supermarkets, and showrooms. Clean lines, robust construction.', image: '/images/products/storage-racks/mall_rack_0.webp' },
            { title: 'Hardware Rack', desc: '7ft×4ft×1ft heavy-duty storage rack designed for hardware stores, tool rooms, and industrial storage of heavier items.', image: '/images/products/storage-racks/hardware_rack_0.webp' },
          ].map((item) => (
            <div key={item.title} className="border border-outline-variant rounded-lg p-lg bg-surface-container-lowest hover:border-primary transition-colors hover:shadow-sm overflow-hidden flex flex-col">
              <div className="aspect-[4/3] relative rounded border border-outline-variant overflow-hidden bg-surface-container group mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="p-md bg-surface-container-low border border-outline-variant rounded-lg flex flex-col md:flex-row items-center justify-between gap-md">
          <div>
            <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Need a Custom Rack Layout?</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Share your floor plan and load requirements — we&apos;ll design the optimal storage solution.
            </p>
          </div>
          <div className="flex gap-sm">
            <CTAButton href="/quote">Get a Quote</CTAButton>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" id="storage-whatsapp-btn"
              className="border border-outline text-on-surface-variant font-label-caps text-label-caps px-md py-sm rounded hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
