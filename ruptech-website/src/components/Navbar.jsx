'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ChevronDown, Phone } from 'lucide-react';
import { BUSINESS, whatsappLink, phoneLink } from '@/lib/constants';

const productLinks = [
  { label: 'All Products', href: '/products' },
  { label: 'Panel Enclosures & Boxes', href: '/products/panel-enclosures' },
  { label: 'Sheet Metal Fabrication', href: '/products/sheet-metal-fabrication' },
  { label: 'Cable Management', href: '/products/cable-management' },
  { label: 'Industrial Storage', href: '/products/industrial-storage' },
  { label: 'Custom Manufacturing', href: '/products/custom-manufacturing' },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products', children: productLinks },
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
  const productsRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on Escape, and the dropdown on any click outside it.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e) => {
      if (productsRef.current && !productsRef.current.contains(e.target)) setProductsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
    };
  }, []);

  const closeMenus = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const waUrl = whatsappLink();

  return (
    <header
      className={`bg-surface/90 backdrop-blur-md border-b border-outline-variant top-0 sticky z-50 transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-container-max mx-auto px-gutter flex justify-between items-center h-xl gap-md">
        {/* Logo */}
        <Link href="/" onClick={closeMenus} className="flex items-center shrink-0 py-2">
          <Image
            src="/logo-horizontal.png"
            alt={BUSINESS.shortName}
            width={162}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-md h-full">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                ref={productsRef}
                className="relative h-full flex items-center"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href={link.href}
                  onClick={closeMenus}
                  className={`font-label-caps text-label-caps h-full flex items-center transition-colors border-b-2 ${
                    isActive(link.href) ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
                <button
                  id="nav-products-btn"
                  type="button"
                  aria-label="Show product categories"
                  aria-expanded={productsOpen}
                  aria-controls="nav-products-menu"
                  onClick={() => setProductsOpen((open) => !open)}
                  className="ml-1 p-1 rounded text-on-surface-variant hover:text-primary"
                >
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  id="nav-products-menu"
                  className={`absolute top-full left-0 origin-top-left bg-surface-container-lowest border border-outline-variant rounded-lg shadow-lg py-sm min-w-[260px] z-50 transition duration-200 ease-out ${
                    productsOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMenus}
                      className={`block px-md py-sm font-body-sm text-body-sm hover:text-primary hover:bg-surface-container-low transition-colors ${
                        pathname === child.href ? 'text-primary' : 'text-on-surface-variant'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`font-label-caps text-label-caps transition-colors h-full flex items-center border-b-2 ${
                  isActive(link.href) ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-sm">
          {phoneLink && (
            <a
              href={phoneLink}
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
            >
              <Phone size={16} />
              Call
            </a>
          )}
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
            className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded hover:bg-[#0c6b5c] active:scale-[0.97] transition"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="lg:hidden text-on-surface w-11 h-11 -mr-2 flex items-center justify-center rounded"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer: overlays the page instead of pushing it down */}
      <div
        className={`lg:hidden fixed inset-x-0 top-xl bottom-0 z-40 bg-black/30 transition-opacity duration-200 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={`lg:hidden absolute inset-x-0 top-full z-50 bg-surface border-b border-outline-variant shadow-lg max-h-[calc(100dvh-80px)] overflow-y-auto origin-top transition duration-200 ease-out ${
          mobileOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <nav aria-label="Mobile" className="px-gutter py-sm">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenus}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`flex items-center min-h-11 font-label-caps text-label-caps transition-colors ${
                  isActive(link.href) ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-md border-l-2 border-outline-variant ml-2">
                  {link.children.slice(1).map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={closeMenus}
                      className="flex items-center min-h-11 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-sm mt-sm border-t border-outline-variant flex flex-col gap-sm pb-sm">
            {phoneLink && (
              <a href={phoneLink} className="border border-outline text-on-surface font-label-caps text-label-caps px-md py-sm rounded text-center">
                Call Us
              </a>
            )}
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
              onClick={closeMenus}
              className="bg-primary-container text-on-primary font-label-caps text-label-caps px-md py-sm rounded text-center"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
