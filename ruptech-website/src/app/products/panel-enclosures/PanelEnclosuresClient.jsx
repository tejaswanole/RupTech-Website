'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MessageCircle, ImageOff } from 'lucide-react';
import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { panelEnclosures } from '@/lib/productData';
import { whatsappLink } from '@/lib/constants';

const tabs = [
  { key: 'combiBox',           label: 'MCB + Socket (Combi) Box' },
  { key: 'evChargerBox',       label: 'EV Charger Boxes' },
  { key: 'mcbBox',             label: 'MCCB Boxes' },
  { key: 'distributionBox',    label: 'Distribution Boxes' },
  { key: 'meterBox',           label: 'Meter Boxes' },
  { key: 'generationMeterBox', label: 'Generation Meter Boxes' },
  { key: 'agricultureBox',     label: 'Agriculture Boxes' },
  { key: 'panelBox',           label: 'Panel Boxes' },
];

const galleryImages = {
  combiBox: [
    { src: '/images/products/panel-enclosures/mcb_plus_clad_socket_box_0.webp',  alt: 'AC Box 3 Way SP MCB Metal Socket' },
  ],
  evChargerBox: [
    { src: '/images/products/ev-charger-box/ev_charger_box_1.webp', alt: 'EV Charger Box, front with door closed' },
    { src: '/images/products/ev-charger-box/ev_charger_box_2.webp', alt: 'EV Charger Box with door open' },
    { src: '/images/products/ev-charger-box/ev_charger_box_0.webp', alt: 'EV Charger Box, side with ventilation grille' },
  ],
  mcbBox: [
    { src: '/images/products/mcb-box/mccb_box_0.webp', alt: 'MCCB Box' },
    { src: '/images/products/mcb-box/mcb_box_0.webp',  alt: '3 Way MCB Box' },
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

export default function PanelEnclosuresClient() {
  const [activeTab, setActiveTab] = useState('distributionBox');
  const waUrl = whatsappLink('Hello! I am interested in Panel Enclosures & Boxes. Please share pricing details.');

  const specCols = [
    { key: 'code',        label: 'Product Code', className: 'w-1/4 text-primary font-bold' },
    { key: 'description', label: 'Description',  className: 'w-1/2' },
    { key: 'size',        label: 'Dimensions',   className: 'w-1/4' },
  ];

  const images = galleryImages[activeTab] || [];
  const activeLabel = tabs.find((t) => t.key === activeTab)?.label;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
      {/* Specs + Tabs */}
      <div className="lg:col-span-8 space-y-lg">
        <div role="tablist" aria-label="Enclosure types" className="flex flex-wrap gap-x-md gap-y-xs border-b border-outline-variant mb-lg">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              id={`tab-${tab.key}`}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls="panel-specs"
              onClick={() => setActiveTab(tab.key)}
              className={`font-label-caps text-label-caps py-sm min-h-11 whitespace-nowrap px-xs transition-colors border-b-2 ${
                activeTab === tab.key
                  ? 'text-primary border-primary'
                  : 'text-on-surface-variant border-transparent hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section id="panel-specs" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
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
        <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
          Product Photos
          <span className="ml-2 font-body-sm text-body-sm text-on-surface-variant font-normal">({activeLabel})</span>
        </h2>

        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-sm">
            {images.map((img) => (
              <ProductImage key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        )}

        <div className="mt-lg p-md bg-surface-container-low border border-outline-variant rounded-lg">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Need a Custom Size?</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
            We offer bespoke engineering solutions tailored to your specific dimensional and environmental
            requirements.
          </p>
          <div className="flex flex-col gap-sm">
            <CTAButton href="/quote" className="w-full">Request a Quote</CTAButton>
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="panel-whatsapp-btn"
                className="w-full flex justify-center items-center gap-sm font-label-caps text-label-caps px-md py-sm bg-[#25D366] text-white hover:bg-[#1ebe5e] rounded transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
