'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, ImageOff } from 'lucide-react';
import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { panelEnclosures } from '@/lib/productData';
import { BUSINESS } from '@/lib/constants';

const tabs = [
  { key: 'combiBox',           label: 'MCB + Socket (Combi) Box' },
  { key: 'evChargerBox',       label: 'EV Charger Boxes' },
  { key: 'mcbBox',             label: 'MCB Boxes' },
  { key: 'distributionBox',    label: 'Distribution Boxes' },
  { key: 'meterBox',           label: 'Meter Boxes' },
  { key: 'generationMeterBox', label: 'Generation Meter Boxes' },
  { key: 'agricultureBox',     label: 'Agriculture Boxes' },
  { key: 'panelBox',           label: 'Panel Boxes' },
];

/**
 * Gallery images per tab.
 * ─────────────────────────────────────────────────────────────────────────────
 * HOW TO ADD YOUR REAL PRODUCT PHOTOS:
 *
 * 1. Run:  python optimize_images.py
 *    (This converts your JPG/PNG → WebP and creates thumbnails automatically)
 *
 * 2. Drop the WebP files into the matching folder:
 *      /public/images/products/panel-enclosures/
 *      /public/images/products/distribution-box/
 *      /public/images/products/meter-box/  ... etc.
 *
 * 3. Update the `src` values below with your actual filenames:
 *      src: '/images/products/distribution-box/db-600x800.webp'
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */
const galleryImages = {
  combiBox: [
    { src: '/images/products/panel-enclosures/mcb_plus_clad_socket_box_0.webp',  alt: 'AC Box 3 Way SP MCB Metal Socket' },
  ],
  evChargerBox: [
    { src: '/images/products/ev-charger-box/ev_charger_box_0.webp',   alt: 'EV Charger Box' },
    { src: '/images/products/ev-charger-box/ev_charger_box_1.webp', alt: 'EV Charger Box Side View' },
    { src: '/images/products/ev-charger-box/ev_charger_box_2.webp', alt: 'EV Charger Box Alternate' },
  ],
  mcbBox: [
    { src: '/images/products/mcb-box/mcb_box_0.webp',  alt: '3 Way MCB Box' },
    { src: '/images/products/mcb-box/mccb_box_0.webp', alt: 'MCCB Box' },
  ],
  distributionBox: [
    { src: '/images/products/distribution-box/mseb_box_0.webp',   alt: 'M.S. Distribution Box 800W×800H' },
    { src: '/images/products/distribution-box/mseb_box_1.webp',   alt: '100A Double Circuit MSEB Box' },
  ],
  meterBox: [
    { src: '/images/products/meter-box/meter_boxsinglethree_0.webp', alt: 'Single Phase Energy Meter Box' },
    { src: '/images/products/meter-box/meter_boxsinglethree_1.webp', alt: 'Three Phase Energy Meter Box' },
  ],
  generationMeterBox: [
    { src: '/images/products/generation-meter-box/generation_meter_box_0.webp', alt: 'Double Door Generation Meter Box' },
    { src: '/images/products/generation-meter-box/generation_meter_box_1.webp', alt: 'Generation Meter Box 500x1000' },
    { src: '/images/products/generation-meter-box/generation_meter_box_2.webp', alt: 'Generation Meter Box 600x600' },
  ],
  agricultureBox: [
    { src: '/images/products/agriculture-box/agriculture_box_0.webp',  alt: 'Agriculture Box' },
  ],
  panelBox: [
    { src: '/images/products/panel-box/panel_box_0.webp',  alt: 'Single Door Panel Box' },
  ],
};

/** Renders one gallery image with graceful fallback if file not yet added */
function ProductImage({ src, alt }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="aspect-square bg-surface-container border border-dashed border-outline-variant rounded flex flex-col items-center justify-center gap-xs">
        <ImageOff size={20} className="text-outline" />
        <span className="font-label-caps text-label-caps text-outline text-[10px] text-center px-1 leading-tight">{alt}</span>
      </div>
    );
  }

  return (
    <div className="aspect-square relative rounded border border-outline-variant overflow-hidden bg-surface-container group">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 200px"
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
}

export default function PanelEnclosuresPage() {
  const [activeTab, setActiveTab] = useState('distributionBox');
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I am interested in Panel Enclosures & Boxes. Please share pricing details.')}`;

  const specCols = [
    { key: 'code',        label: 'Product Code', className: 'w-1/4 text-primary font-bold' },
    { key: 'description', label: 'Description',  className: 'w-1/2' },
    { key: 'size',        label: 'Dimensions',   className: 'w-1/4' },
  ];

  const images = galleryImages[activeTab] || [];

  return (
    <>
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

            {/* Hero image — replace src with your best product photo */}
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low">
              <Image
                src="/images/products/panel-enclosures/hero.webp"
                alt="Ruptech Panel Enclosures and Electrical Boxes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">

          {/* Specs + Tabs */}
          <div className="lg:col-span-8 space-y-lg">
            {/* Tabs */}
            <div className="flex overflow-x-auto gap-md border-b border-outline-variant mb-lg pb-sm no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  id={`tab-${tab.key}`}
                  onClick={() => setActiveTab(tab.key)}
                  className={`font-label-caps text-label-caps pb-sm whitespace-nowrap px-xs transition-colors ${
                    activeTab === tab.key
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-md">Technical Specifications</h2>
              <SpecTable rows={panelEnclosures[activeTab] || []} columns={specCols} />
              <p className="mt-sm font-body-sm text-body-sm text-on-surface-variant">
                * Dimensions sourced from Ruptech All Catalogue. Material: M.S. (Mild Steel) / CRCA / HRCA.
                Finish: In-house Powder Coated. Custom dimensions available on request.
              </p>
            </section>
          </div>

          {/* Sidebar — Gallery + CTA */}
          <div className="lg:col-span-4 space-y-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
              Product Photos
              <span className="ml-2 font-body-sm text-body-sm text-on-surface-variant font-normal">
                ({tabs.find(t => t.key === activeTab)?.label})
              </span>
            </h3>

            {images.length > 0 ? (
              <div className="grid grid-cols-2 gap-sm">
                {images.map((img) => (
                  <ProductImage key={img.src} src={img.src} alt={img.alt} />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-outline-variant rounded p-md text-center">
                <ImageOff size={24} className="text-outline mx-auto mb-xs" />
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  No photos yet for this category. Add WebP images to<br />
                  <code className="text-xs text-primary">/public/images/products/</code>
                </p>
              </div>
            )}

            <div className="mt-lg p-md bg-surface-container-low border border-outline-variant rounded-lg">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-xs">Need a Custom Size?</h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                We offer bespoke engineering solutions tailored to your specific dimensional and environmental
                requirements.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="panel-whatsapp-btn"
                className="w-full flex justify-center items-center gap-sm font-label-caps text-label-caps px-md py-sm bg-primary-container text-on-primary hover:bg-[#0c6b5c] rounded transition-colors"
              >
                <MessageCircle size={18} />
                Request Quote for This Category
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
