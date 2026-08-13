import { MessageCircle } from 'lucide-react';
import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { cableTrays } from '@/lib/productData';
import { BUSINESS } from '@/lib/constants';

export const metadata = {
  title: 'Cable Management Systems',
  description:
    'Ruptech Engineers\' range of perforated cable trays, cable ladders, and accessories — galvanized mild steel, available in standard and custom sizes.',
};

const specCols = [
  { key: 'code', label: 'Product Code', className: 'text-primary font-bold' },
  { key: 'description', label: 'Description' },
  { key: 'size', label: 'Width × Height' },
  { key: 'material', label: 'Material' },
];

export default function CableManagementPage() {
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I am interested in Cable Trays / Cable Management. Please share details.')}`;

  return (
    <>
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Cable Management Systems</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Robust perforated cable trays and heavy-duty cable ladders designed for secure, organized electrical
            routing in industrial and commercial installations. All trays are available in hot-dip galvanized M.S.
            finish for corrosion resistance.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          <div className="lg:col-span-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">
              Perforated Cable Trays & Ladders — Specifications
            </h2>
            <SpecTable rows={cableTrays} columns={specCols} />
            <div className="mt-md p-md bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Accessories Available</h4>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-xs list-disc list-inside">
                <li>Straight couplers, bends (90°, 45°), tee sections</li>
                <li>Reducers, crosses, and end caps</li>
                <li>Mounting brackets and holding clamps</li>
                <li>Fish plates (splice plates) for tray joints</li>
                <li>Standard length: 2.5m / 3m per piece</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-md">
            <div className="p-md bg-surface-container-low border border-outline-variant rounded-lg">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Key Features</h4>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-sm">
                {[
                  'Hot-dip galvanized M.S. finish',
                  'Perforations for cable tie-down',
                  '20% weight reduction vs solid tray',
                  'Corrosion resistant coating',
                  'Custom widths & depths available',
                  'Compatible with all accessories',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-md bg-surface-container-low border border-outline-variant rounded-lg">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Need Custom Dimensions?</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                We manufacture cable trays in any width, height, and length to your project requirements.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="cable-whatsapp-btn"
                className="w-full flex justify-center items-center gap-sm font-label-caps text-label-caps px-md py-sm bg-primary-container text-on-primary hover:bg-[#0c6b5c] rounded transition-colors"
              >
                <MessageCircle size={18} /> Request Quote
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
