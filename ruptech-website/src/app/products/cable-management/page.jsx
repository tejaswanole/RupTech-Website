import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import SpecTable from '@/components/SpecTable';
import { cableTrays } from '@/lib/productData';
import { whatsappLink } from '@/lib/constants';
import CTAButton from '@/components/CTAButton';

export const metadata = {
  title: 'Cable Management Systems',
  description:
    'Ruptech Engineers\' range of G.I. perforated cable trays with cover — 14 standard sizes from 50W×25H to 400W×75H mm, 2500mm standard length. Custom sizes available.',
};

const specCols = [
  { key: 'code', label: 'Product Code', className: 'text-primary font-bold' },
  { key: 'description', label: 'Description' },
  { key: 'size', label: 'Width × Height × Length' },
  { key: 'material', label: 'Material' },
];

export default function CableManagementPage() {
  const waUrl = whatsappLink('Hello! I am interested in Cable Trays / Cable Management. Please share details.');

  return (
    <>
      <header className="bg-surface-container-lowest py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Cable Management Systems</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            G.I. (Galvanized Iron) perforated cable trays with cover — 14 standard sizes available for organized,
            safe cable routing in industrial and commercial installations. Standard piece length: 2500mm.
            Custom widths and heights manufactured to order.
          </p>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          <div className="lg:col-span-8">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-md">
              G.I. Cable Tray with Cover — Specifications
            </h2>
            <SpecTable rows={cableTrays} columns={specCols} />
            <div className="mt-md p-md bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Accessories & Hardware</h4>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-xs list-disc list-inside">
                <li>Cable Tray Covers (matching widths)</li>
                <li>Straight couplers, bends (90°, 45°), tee sections</li>
                <li>Reducers, crosses, and end caps</li>
                <li>Mounting brackets and holding clamps</li>
                <li>Fish plates (splice plates) for tray joints</li>
                <li>Standard piece length: 2500mm</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-md">
            <div className="p-md bg-surface-container-low border border-outline-variant rounded-lg">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Product Photo</h3>
              <div className="aspect-video relative rounded border border-outline-variant overflow-hidden bg-surface-container group">
                <Image
                  src="/images/products/cable-trays/cable_tray_0.webp"
                  alt="G.I. Cable Tray with Cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-md bg-surface-container-low border border-outline-variant rounded-lg">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Key Features</h4>
              <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-sm">
                {[
                  'G.I. (Galvanized Iron) material',
                  'Includes matching cover',
                  'Standard length: 2500mm per piece',
                  'Sizes from 50W to 400W mm',
                  'Heights: 25mm and 75mm options',
                  'Custom widths & heights available',
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
              <div className="flex flex-col gap-sm">
                <CTAButton href="/quote" className="w-full">Request a Quote</CTAButton>
                {waUrl && (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cable-whatsapp-btn"
                    className="w-full flex justify-center items-center gap-sm font-label-caps text-label-caps px-md py-sm bg-[#25D366] text-white hover:bg-[#1ebe5e] rounded transition-colors"
                  >
                    <MessageCircle size={18} /> WhatsApp Us
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
