import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { storageRacks } from '@/lib/productData';
import { BUSINESS } from '@/lib/constants';
import { MessageCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Industrial Storage Solutions',
  description:
    'Heavy-duty industrial storage racks, slotted angle racks, pallet racks, boltless shelving, and steel cabinets from Ruptech Engineers, Ahmednagar.',
};

const specCols = [
  { key: 'code', label: 'Code', className: 'text-primary font-bold' },
  { key: 'description', label: 'Description' },
  { key: 'size', label: 'Dimensions (W×H×D)' },
  { key: 'loadCapacity', label: 'Load Capacity' },
];

export default function IndustrialStoragePage() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I am interested in Industrial Storage Racks. Please share details and pricing.')}`;

  return (
    <>
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Industrial Storage Solutions</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Heavy-duty shelving racks, pallet racking systems, boltless shelves, and industrial steel cabinets
            — engineered for maximum load bearing and long service life in warehouse and factory environments.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-xl space-y-lg">
        {/* TBC Notice */}
        <div className="flex items-start gap-sm p-md bg-surface-container border border-outline-variant rounded">
          <AlertTriangle size={18} className="text-tertiary-container mt-0.5 shrink-0" />
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            <strong className="text-on-surface">Note:</strong> Load capacities marked &ldquo;TBC&rdquo; are to be confirmed with final engineering specifications. Contact us for confirmed ratings on your specific configuration.
          </p>
        </div>

        {/* Spec Table */}
        <section>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Storage Rack Specifications</h2>
          <SpecTable rows={storageRacks} columns={specCols} />
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {[
            { title: 'Slotted Angle Racks', desc: 'Versatile, easy-to-assemble racks for light-to-medium storage. Adjustable shelf heights, bolt-free assembly options.' },
            { title: 'Pallet Racking Systems', desc: 'High-density selective pallet racking designed for forklift access. Suitable for warehouses handling heavy loads.' },
            { title: 'Custom Mezzanine Floors', desc: 'Multi-level storage platforms that double your usable floor space. Custom engineered to site dimensions and load requirements.' },
          ].map((item) => (
            <div key={item.title} className="border border-outline-variant rounded-lg p-lg bg-surface-container-lowest hover:border-primary transition-colors hover:shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{item.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
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
