'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import SpecTable from '@/components/SpecTable';
import CTAButton from '@/components/CTAButton';
import { panelEnclosures } from '@/lib/productData';
import { BUSINESS } from '@/lib/constants';

const tabs = [
  { key: 'distributionBox', label: 'Distribution Boxes' },
  { key: 'mccbBox', label: 'MCCB Boxes' },
  { key: 'meterBox', label: 'Meter Boxes' },
  { key: 'evChargerBox', label: 'EV Charger Boxes' },
  { key: 'agricultureBox', label: 'Agriculture Boxes' },
  { key: 'panelBox', label: 'Panel Boxes' },
];

export default function PanelEnclosuresPage() {
  const [activeTab, setActiveTab] = useState('distributionBox');
  const waUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hello! I am interested in Panel Enclosures & Boxes. Please share pricing details.')}`;

  const specCols = [
    { key: 'code', label: 'Product Code', className: 'w-1/4 text-primary font-bold' },
    { key: 'description', label: 'Description', className: 'w-1/2' },
    { key: 'size', label: 'Dimensions', className: 'w-1/4' },
  ];

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
                <span className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container text-on-surface-variant rounded font-label-caps text-label-caps border border-outline-variant">
                  IP65 Rated
                </span>
                <span className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container text-on-surface-variant rounded font-label-caps text-label-caps border border-outline-variant">
                  Precision Crafted
                </span>
                <span className="inline-flex items-center gap-xs px-sm py-xs bg-surface-container text-on-surface-variant rounded font-label-caps text-label-caps border border-outline-variant">
                  Powder Coated
                </span>
              </div>
            </div>
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-low">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Specs */}
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
                * Material: Mild Steel (M.S.) unless specified. Thickness: 1.2mm – 2mm. Finish: Powder coated (RAL
                7035 Light Grey or custom). Custom dimensions available on request.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Product Gallery</h3>
            <div className="grid grid-cols-2 gap-sm">
              {[
                { bg: '#e5e9e6', label: 'Distribution Box' },
                { bg: '#dfe3e1', label: 'MCCB Box' },
                { bg: '#ebefec', label: 'Meter Box' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square bg-surface-container border border-outline-variant rounded overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: item.bg }}
                >
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-center p-2 text-xs">{item.label}</span>
                </div>
              ))}
              <div className="aspect-square bg-surface-variant border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer group">
                <span className="font-label-caps text-label-caps text-on-surface-variant group-hover:text-primary flex flex-col items-center gap-xs text-center text-xs">
                  View All Photos
                </span>
              </div>
            </div>

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
