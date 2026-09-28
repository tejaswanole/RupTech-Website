'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { BUSINESS, whatsappLink } from '@/lib/constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'Panel Enclosures & Boxes', href: '/products/panel-enclosures' },
      { label: 'Sheet Metal Fabrication', href: '/products/sheet-metal-fabrication' },
      { label: 'Cable Management', href: '/products/cable-management' },
      { label: 'Industrial Storage', href: '/products/industrial-storage' },
      { label: 'Custom Manufacturing', href: '/products/custom-manufacturing' },
    ],
  },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Clients', href: '/clients' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const waUrl = whatsappLink();

  return (
    <header
      className={`bg-surface border-b border-outline-variant top-0 sticky z-50 transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt={`${BUSINESS.shortName} Logo`}
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-md h-full">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href} className="relative h-full flex items-center">
                <button
                  id={`nav-products-btn`}
                  onClick={() => setProductsOpen(!productsOpen)}
                  onBlur={() => setTimeout(() => setProductsOpen(false), 150)}
                  className={`font-label-caps text-label-caps flex items-center gap-1 transition-colors ${
                    isActive(link.href)
                      ? 'text-primary border-b-2 border-primary h-full'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg py-sm min-w-[240px] z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-md py-sm font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-caps text-label-caps transition-colors h-full flex items-center ${
                  isActive(link.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-sm">
          {waUrl && (
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-btn"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          )}
          <Link
            href="/quote"
            id="navbar-quote-btn"
            className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded hover:bg-[#0c6b5c] transition-colors"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-on-surface p-1"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant px-gutter py-md space-y-sm">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block font-label-caps text-label-caps py-sm transition-colors ${
                  isActive(link.href) ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-md space-y-xs border-l-2 border-outline-variant ml-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block font-body-sm text-body-sm text-on-surface-variant hover:text-primary py-xs transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-sm border-t border-outline-variant flex flex-col gap-sm">
            {waUrl && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-label-caps text-label-caps px-md py-sm rounded text-center"
              >
                WhatsApp Us
              </a>
            )}
            <Link
              href="/quote"
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded text-center"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
