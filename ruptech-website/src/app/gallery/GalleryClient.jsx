'use client';
import { useState } from 'react';

export const metadata = undefined; // metadata is set in the server wrapper

const filters = ['All', 'Panels', 'Enclosures', 'Cable Trays', 'Storage', 'Factory'];

const galleryItems = [
  { id: 1, category: 'Panels', label: 'Distribution Panels', bg: '#e5e9e6' },
  { id: 2, category: 'Enclosures', label: 'MCCB Enclosures', bg: '#dfe3e1' },
  { id: 3, category: 'Factory', label: 'CNC Laser Cutting', bg: '#ebefec' },
  { id: 4, category: 'Cable Trays', label: 'Perforated Trays', bg: '#f0f5f2' },
  { id: 5, category: 'Storage', label: 'Pallet Racks', bg: '#e5e9e6' },
  { id: 6, category: 'Enclosures', label: 'EV Charger Box', bg: '#dfe3e1' },
  { id: 7, category: 'Factory', label: 'Press Brake Operation', bg: '#ebefec' },
  { id: 8, category: 'Panels', label: 'Meter Box Installation', bg: '#f0f5f2' },
  { id: 9, category: 'Storage', label: 'Slotted Angle Racks', bg: '#e5e9e6' },
  { id: 10, category: 'Cable Trays', label: 'Cable Ladder', bg: '#dfe3e1' },
  { id: 11, category: 'Factory', label: 'Powder Coating Line', bg: '#ebefec' },
  { id: 12, category: 'Enclosures', label: 'Agriculture Box', bg: '#f0f5f2' },
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
            A showcase of our precision sheet metal work — panels, enclosures, cable management, and our
            manufacturing facility. Real product photography to be updated by the client.
          </p>
        </div>
      </section>

      <main className="max-w-container-max mx-auto px-gutter py-xl">
        {/* Filter Tabs */}
        <div className="flex overflow-x-auto gap-sm no-scrollbar mb-lg border-b border-outline-variant pb-sm">
          {filters.map((f) => (
            <button
              key={f}
              id={`gallery-filter-${f.toLowerCase().replace(' ', '-')}`}
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
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`break-inside-avoid border border-outline-variant rounded overflow-hidden group hover:border-primary transition-colors cursor-pointer ${
                i % 5 === 0 ? 'h-72' : i % 3 === 0 ? 'h-56' : 'h-48'
              }`}
              style={{ backgroundColor: item.bg }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-md relative">
                <span className="font-headline-sm text-headline-sm text-on-surface-variant opacity-40 text-center">
                  {item.label}
                </span>
                <span className="absolute top-3 left-3 font-label-caps text-label-caps text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded-sm text-xs opacity-70">
                  {item.category}
                </span>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-xl text-on-surface-variant font-body-md text-body-md">
            No items in this category yet.
          </div>
        )}

        <div className="mt-xl text-center p-lg bg-surface-container-low border border-outline-variant rounded">
          <p className="font-body-md text-body-md text-on-surface-variant">
            📷 <strong>Client Action Required:</strong> Real product and factory photography to be provided by Ruptech Engineers for final gallery update.
          </p>
        </div>
      </main>
    </>
  );
}
