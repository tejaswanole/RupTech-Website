import Image from 'next/image';
import { Shield, Settings, Handshake, CheckCircle, Calendar, Building2, TrendingUp, Layers } from 'lucide-react';
import ClientLogoGrid from '@/components/ClientLogoGrid';
import CTAButton from '@/components/CTAButton';
import StatsBar from '@/components/StatsBar';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'About Us',
  description:
    'Learn about Ruptech Engineers — our story, infrastructure, quality commitment, and why we are the preferred partner for sheet metal manufacturing in Maharashtra.',
  path: '/about',
});

const keyFacts = [
  { icon: Calendar, label: 'Year Established', value: '2019', sub: 'Ahmednagar, Maharashtra' },
  { icon: Building2, label: 'Manufacturing Area', value: '10,000+ sqft', sub: 'Across 2 facilities, MIDC' },
  { icon: TrendingUp, label: 'Annual Turnover', value: '₹3.4 Cr+', sub: 'FY 2023–24' },
  { icon: Layers, label: 'Capital Invested', value: '₹2.5 Cr', sub: 'Plant & Machinery' },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Uncompromising Quality Control',
    desc: 'Our rigorous multi-stage inspection process ensures that every component leaving our facility meets exact tolerances. We maintain detailed inspection records for full traceability.',
  },
  {
    icon: Settings,
    title: 'Advanced Manufacturing Capabilities',
    desc: 'Equipped with CNC laser cutters, turret punches, press brakes, and an in-house powder coating line — we handle complex fabrication projects at scale.',
  },
  {
    icon: Handshake,
    title: 'Client-Centric Engineering Support',
    desc: 'We act as an extension of your engineering team, collaborating closely to optimize designs for manufacturability (DFM) while reducing cost and improving reliability.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-surface-container-high overflow-hidden border-b border-outline-variant">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('/images/products/storage-racks/slotted_angle_rack_0.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10" />
        <div className="relative z-20 text-center max-w-3xl px-gutter">
          <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-sm block">
            Corporate Overview
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-md">About Ruptech Engineers</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Engineering excellence and precision manufacturing for the modern industrial sector.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Legacy of Precision</h2>
            <div className="w-16 h-1 bg-primary" />
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Founded in 2019 with a vision to deliver unparalleled engineering solutions, Ruptech Engineers has
              established itself as a trusted name in the industrial sheet metal manufacturing landscape of
              Maharashtra. Starting from our facility in MIDC Ahmednagar, we set out with a commitment to
              stringent quality standards and relentless pursuit of manufacturing excellence.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Today, we operate across two facilities — Plot L-237 and Plot L-248 in MIDC Ahmednagar — with a
              combined built-up area exceeding 10,000 sqft. Our capabilities span CNC laser cutting, turret
              punching, CNC press brake bending, MIG/TIG welding, and in-house powder coating. We proudly serve
              some of the most demanding clients across the power, electrical, and industrial sectors.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Whether it is a single custom enclosure or a batch production run of 1,000+ cable trays, we bring
              the same precision, quality consciousness, and on-time delivery commitment to every order.
            </p>
            <CTAButton href="/contact">Get in Touch</CTAButton>
          </div>

          <div className="relative h-[500px] rounded border border-outline-variant overflow-hidden group p-2 bg-surface-container-lowest">
            <div className="relative w-full h-full rounded overflow-hidden bg-surface-container">
              <Image
                src="/images/products/feeder-pillar/feeder_pillar_0.webp"
                alt="Outdoor feeder pillar enclosure built at the Ruptech MIDC Ahmednagar facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover motion-scale transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {/* Floating ISO card */}
            <div className="absolute bottom-lg right-lg z-20 glass-panel p-md rounded shadow-sm">
              <div className="flex items-center gap-sm">
                <CheckCircle size={32} className="text-primary" />
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">Quality Standard</p>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-bold">ISO 9001:2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts / Bento */}
      <section className="bg-surface-container-low py-xl border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-lg">
            <h2 className="font-headline-md text-headline-md text-on-surface">Operational Scale</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">
              Key metrics defining our infrastructure capacity
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {keyFacts.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col justify-between hover:border-primary transition-colors"
              >
                <Icon size={24} className="text-primary mb-md" />
                <div className="font-label-caps text-label-caps text-on-surface-variant mb-xs">{label}</div>
                <div className="font-headline-md text-headline-md text-on-surface">{value}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-container-max mx-auto px-gutter py-xl">
        <div className="mb-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Why Choose Ruptech</h2>
          <div className="w-16 h-1 bg-primary mt-sm" />
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

      {/* Clients Strip */}
      <section className="bg-surface-container-low border-y border-outline-variant py-xl">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-lg">Trusted By Leading Names</h2>
          <ClientLogoGrid size="sm" />
        </div>
      </section>
    </>
  );
}
