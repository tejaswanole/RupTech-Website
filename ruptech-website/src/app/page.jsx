import Link from 'next/link';
import { ArrowRight, Phone, Shield, Settings, Handshake, CheckCircle } from 'lucide-react';
import StatsBar from '@/components/StatsBar';
import ProductCard from '@/components/ProductCard';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import CTAButton from '@/components/CTAButton';
import { whatsappLink, phoneLink } from '@/lib/constants';

export const metadata = {
  title: 'Complete Sheet Metal Product Solutions',
  description:
    'Ruptech Engineers — Precision manufacturer of electrical panel enclosures, cable trays, industrial storage, and custom sheet metal solutions in Ahmednagar, MIDC.',
};

const productCategories = [
  {
    title: 'Panel Enclosures & Boxes',
    description:
      'Customizable sheet metal enclosures for electrical panels, control systems, and industrial electronics.',
    href: '/products/panel-enclosures',
    image: '/images/products/distribution-box/mseb_box_0.webp',
  },
  {
    title: 'Sheet Metal Fabrication',
    description:
      'Precision laser cutting, CNC bending, and welding services for high-tolerance industrial components.',
    href: '/products/sheet-metal-fabrication',
    image: '/images/products/generation-meter-box/generation_meter_box_0.webp',
  },
  {
    title: 'Cable Management',
    description:
      'Robust cable trays, ladders, and raceways designed for secure and organized industrial electrical routing.',
    href: '/products/cable-management',
    image: '/images/products/cable-trays/cable_tray_0.webp',
  },
  {
    title: 'Industrial Storage',
    description:
      'Heavy-duty shelving, racks, and industrial cabinets engineered for maximum load capacity.',
    href: '/products/industrial-storage',
    image: '/images/products/storage-racks/slotted_angle_rack_0.webp',
  },
  {
    title: 'Custom Manufacturing',
    description:
      'Bespoke engineering solutions tailored to specific client requirements — from prototyping to full-scale production.',
    href: '/products/custom-manufacturing',
    image: '/images/products/agriculture-box/agriculture_box_0.webp',
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Uncompromising Quality Control',
    desc: 'Our rigorous multi-stage inspection process ensures every component meets exact tolerances. ISO 9001:2015 quality system governs every step from raw material to dispatch.',
  },
  {
    icon: Settings,
    title: 'Advanced Manufacturing Capabilities',
    desc: 'CNC laser cutting, CNC turret punching, press brake bending, MIG/TIG welding — all in-house. We handle complex projects from rapid prototyping to full-volume production.',
  },
  {
    icon: Handshake,
    title: 'Client-Centric Engineering Support',
    desc: 'We act as an extension of your engineering team. Our dedicated team collaborates closely to optimize designs for manufacturability (DFM), driving down costs while improving quality.',
  },
];

export default function HomePage() {
  const waUrl = whatsappLink();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-inverse-surface overflow-hidden">
        {/* Background overlay */}
        <div
          className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface via-inverse-surface/80 to-transparent z-[1]" />

        <div className="max-w-container-max mx-auto px-gutter relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-surface-container-low/10 text-primary-fixed border border-primary-fixed/30 px-sm py-xs rounded mb-md backdrop-blur-sm w-max">
              <CheckCircle size={16} />
              <span className="font-label-caps text-label-caps">Engineering Excellence Since 2019</span>
            </div>

            <h1 className="font-headline-xl text-headline-xl text-surface-container-lowest mb-lg leading-tight">
              Complete Sheet Metal
              <br />
              <span className="text-primary-fixed">Product Solutions</span>
            </h1>

            <p className="font-body-lg text-body-lg text-surface-variant mb-xl max-w-2xl">
              Precision manufacturing of electrical enclosures, cable trays, and storage systems — delivering
              high-quality custom sheet metal solutions from MIDC Ahmednagar.
            </p>

            <div className="flex flex-wrap gap-sm">
              <CTAButton href="/quote" size="lg" className="text-on-primary">
                Request a Quote
              </CTAButton>
              {phoneLink && (
                <a
                  href={phoneLink}
                  className="bg-transparent border border-surface-container-lowest text-surface-container-lowest font-label-caps text-label-caps px-lg py-sm rounded hover:bg-surface-container-lowest/10 active:scale-[0.97] transition flex items-center gap-2"
                >
                  <Phone size={16} /> Call Us
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* Why Choose Us */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="text-center mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Why Choose Ruptech</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {whyChooseUs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="border border-outline-variant rounded p-lg bg-surface-container-lowest group hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center mb-md group-hover:bg-primary-container transition-colors">
                <Icon size={22} className="text-on-surface-variant group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">{title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Overview */}
      <section className="bg-surface-container-low border-y border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex items-end justify-between mb-lg">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Products</h2>
              <div className="w-16 h-1 bg-primary mt-sm" />
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-1 font-label-caps text-label-caps text-primary hover:underline"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {productCategories.map((cat) => (
              <ProductCard key={cat.href} {...cat} />
            ))}
          </div>
          <div className="mt-lg md:hidden text-center">
            <CTAButton href="/products">View All Products</CTAButton>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-surface py-xl border-b border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-lg">Trusted By Industry Leaders</h2>
          <ClientLogoGrid size="md" className="mb-xl" />
          <CTAButton href="/clients">View Our Clients &amp; Testimonials</CTAButton>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-inverse-surface py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg text-inverse-on-surface mb-sm">
            Ready to Start Your Project?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant mb-lg max-w-2xl mx-auto">
            Share your drawings or specifications and our engineering team will get back to you within 24 hours.
          </p>
          <div className="flex flex-wrap gap-sm justify-center">
            <CTAButton href="/quote" size="lg">Request a Quote</CTAButton>
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-label-caps text-label-caps px-lg py-sm rounded hover:bg-[#1ebe5e] active:scale-[0.97] transition flex items-center gap-2"
              >
                WhatsApp Us
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
