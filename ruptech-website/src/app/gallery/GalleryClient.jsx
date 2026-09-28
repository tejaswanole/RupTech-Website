'use client';
import { useState } from 'react';
import Image from 'next/image';

export const metadata = undefined; // metadata is set in the server wrapper

const filters = ['All', 'Panels & Boxes', 'Cable Trays', 'Storage Racks'];

const galleryItems = [
  // Panels & Boxes
  { id: 1, category: 'Panels & Boxes', label: 'Single Door Panel Box', src: '/images/products/panel-box/panel_box_0.webp' },
  { id: 2, category: 'Panels & Boxes', label: 'Distribution Box 800x800', src: '/images/products/distribution-box/mseb_box_0.webp' },
  { id: 3, category: 'Panels & Boxes', label: '100A Double Circuit MSEB Box', src: '/images/products/distribution-box/mseb_box_1.webp' },
  { id: 4, category: 'Panels & Boxes', label: 'MCCB Box', src: '/images/products/mcb-box/mccb_box_0.webp' },
  { id: 5, category: 'Panels & Boxes', label: 'EV Charger Box', src: '/images/products/ev-charger-box/ev_charger_box_0.webp' },
  { id: 6, category: 'Panels & Boxes', label: '3 Way MCB Box', src: '/images/products/mcb-box/mcb_box_0.webp' },
  { id: 7, category: 'Panels & Boxes', label: 'Double Door Generation Meter Box', src: '/images/products/generation-meter-box/generation_meter_box_0.webp' },
  { id: 8, category: 'Panels & Boxes', label: 'Single Phase Meter Box', src: '/images/products/meter-box/meter_boxsinglethree_0.webp' },
  { id: 9, category: 'Panels & Boxes', label: 'Agriculture Box', src: '/images/products/agriculture-box/agriculture_box_0.webp' },
  { id: 10, category: 'Panels & Boxes', label: 'AC Box 3 Way SP MCB Metal Socket', src: '/images/products/panel-enclosures/mcb_plus_clad_socket_box_0.webp' },
  
  // Cable Trays
  { id: 11, category: 'Cable Trays', label: 'G.I. Cable Tray with Cover', src: '/images/products/cable-trays/cable_tray_0.webp' },

  // Storage Racks
  { id: 12, category: 'Storage Racks', label: 'Slotted Angle Rack', src: '/images/products/storage-racks/slotted_angle_rack_0.webp' },
  { id: 13, category: 'Storage Racks', label: 'Super Shop / Mall Rack', src: '/images/products/storage-racks/mall_rack_0.webp' },
  { id: 14, category: 'Storage Racks', label: 'Hardware Rack', src: '/images/products/storage-racks/hardware_rack_0.webp' },
];

export default function GalleryPageClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-container-low border-b border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-sm">Product Gallery</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A showcase of our precision sheet metal work — panels, enclosures, cable management, and storage racks.
          </p>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-gutter py-xl">
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto gap-sm no-scrollbar mb-lg border-b border-outline-variant pb-sm">
          {filters.map((f) => (
            <button
              key={f}
              id={`gallery-filter-${f.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setActiveFilter(f)}
              className={`font-label-caps text-label-caps px-md py-sm rounded whitespace-nowrap transition-colors ${
                activeFilter === f
                  ? 'bg-primary-container text-on-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-md space-y-md">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid border border-outline-variant rounded overflow-hidden group hover:border-primary transition-colors cursor-pointer relative bg-surface-container"
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: item.category === 'Panels & Boxes' ? '3/4' : '4/3' }}>
                <Image 
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="font-headline-sm text-headline-sm text-white drop-shadow-md">
                  {item.label}
                </span>
                <span className="font-label-caps text-label-caps text-gray-200 mt-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-xl text-on-surface-variant font-body-md text-body-md">
            No items in this category yet.
          </div>
        )}
      </main>
    </>
  );
}
