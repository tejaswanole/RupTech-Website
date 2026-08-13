import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
];

const resourceLinks = [
  { label: 'Certifications', href: '/certifications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Clients', href: '/clients' },
  { label: 'Request a Quote', href: '/quote' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface w-full">
      <div className="max-w-container-max mx-auto px-gutter py-xl grid grid-cols-1 md:grid-cols-4 gap-md">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="mb-md">
            <Image
              src="/logo.png"
              alt={`${BUSINESS.shortName} Logo`}
              width={120}
              height={40}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="font-body-sm text-body-sm text-surface-variant mb-md leading-relaxed">
            {BUSINESS.tagline}. Engineering Excellence since {BUSINESS.established}.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary-fixed mb-md">Quick Links</h4>
          <ul className="space-y-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body-sm text-body-sm text-surface-variant hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary-fixed mb-md">Resources</h4>
          <ul className="space-y-sm">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body-sm text-body-sm text-surface-variant hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-label-caps text-label-caps text-primary-fixed mb-md">Contact</h4>
          <ul className="space-y-sm font-body-sm text-body-sm text-surface-variant">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary-fixed opacity-70" />
              <span>
                {BUSINESS.addresses[0].line1}, {BUSINESS.addresses[0].line2}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0 text-primary-fixed opacity-70" />
              <span>
                {BUSINESS.addresses[1].line1}, {BUSINESS.addresses[1].line2}
              </span>
            </li>
            <li>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-primary-fixed opacity-70" />
                {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-primary-fixed opacity-70" />
                {BUSINESS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-outline/30">
        <div className="max-w-container-max mx-auto px-gutter py-md text-center">
          <p className="font-body-sm text-body-sm text-surface-variant">
            © {currentYear} {BUSINESS.name} All Rights Reserved.{' '}
            {BUSINESS.gst !== '[GSTIN Pending]' && `GSTIN: ${BUSINESS.gst}`}
            {BUSINESS.gst === '[GSTIN Pending]' && 'GSTIN: [Pending]'}
          </p>
        </div>
      </div>
    </footer>
  );
}
