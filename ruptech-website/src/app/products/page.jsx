import Link from 'next/link';
import { ArrowRight, FileDown } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Our Products',
  description:
    'Browse Ruptech Engineers\' complete range of sheet metal products — panel enclosures, cable management, industrial storage, and custom fabrication.',
};

const categories = [
  {
    title: 'Panel Enclosures & Boxes',
    description:
      'Customizable sheet metal enclosures for electrical panels, control systems, and industrial electronics, built to IP/NEMA standards.',
    href: '/products/panel-enclosures',
  },
  {
    title: 'Sheet Metal Fabrication',
    description:
      'Precision laser cutting, CNC bending, and welding services for high-tolerance industrial components and assemblies.',
    href: '/products/sheet-metal-fabrication',
  },
  {
    title: 'Cable Management',
    description:
      'Robust cable trays, ladders, and raceways designed for secure and organized industrial electrical routing.',
    href: '/products/cable-management',
  },
  {
    title: 'Industrial Storage',
    description:
      'Heavy-duty shelving, racks, and industrial cabinets engineered for maximum load capacity and operational efficiency.',
    href: '/products/industrial-storage',
  },
  {
    title: 'Custom Manufacturing',
    description:
      'Bespoke engineering solutions tailored to specific client requirements, from design prototyping to full-scale production.',
    href: '/products/custom-manufacturing',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-surface-container-low py-xl border-b border-outline-variant relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 10px 10px, #6e7a76 2px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-container-max mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-md">Our Products</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Precision-engineered industrial solutions designed for durability, safety, and optimal performance in
            demanding environments. Browse our core product categories below.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-xl max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {categories.map((cat) => (
            <ProductCard key={cat.href} {...cat} />
          ))}
        </div>
      </section>

      {/* PDF Download CTA */}
      <section className="bg-surface-container py-lg border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-md">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">
              Technical Specifications & Details
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Access complete dimensions, material specs, and compliance data for all our products.
            </p>
          </div>
          <a
            href="/Ruptech_All_Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="catalogue-download-btn"
            className="bg-primary text-on-primary font-label-caps text-label-caps px-lg py-sm rounded hover:bg-[#0c6b5d] transition-colors flex items-center gap-sm whitespace-nowrap shadow-sm"
          >
            <FileDown size={20} />
            Download Full Product Catalogue (PDF)
          </a>
        </div>
      </section>
    </>
  );
}
