export const BUSINESS = {
  name: 'Ruptech Engineers Pvt. Ltd.',
  shortName: 'Ruptech Engineers',
  tagline: 'Complete Sheet Metal Product Solutions',
  email: 'ruptechengineers@gmail.com',
  // Placeholder numbers: replace with the client-confirmed public number before launch.
  // Call and WhatsApp buttons are hidden sitewide if these are left empty.
  phone: '+91 98765 43210',
  whatsapp: '919876543210', // country code, no + or spaces
  whatsappMessage: 'Hello! I am interested in your products and services.',
  addresses: [
    {
      label: 'Work 1 / Office',
      line1: 'Plot No. L-237, MIDC',
      line2: 'Ahmednagar, Maharashtra 414111',
      short: 'Plot L-237, MIDC Ahmednagar',
    },
    {
      label: 'Work 2',
      line1: 'Plot No. L-248, MIDC',
      line2: 'Ahmednagar, Maharashtra 414111',
      short: 'Plot L-248, MIDC Ahmednagar',
    },
  ],
  gst: '', // GSTIN, shown in the footer once filled in
  established: 2019,
  turnover: '₹3.4 Cr+',
  capital: '₹2.5 Cr',
  area: '10,000+ sqft',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
  ],
};

// wa.me link with a pre-filled message, or null when no WhatsApp number is set.
export function whatsappLink(message = BUSINESS.whatsappMessage) {
  if (!BUSINESS.whatsapp) return null;
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

// tel: link, or null when no phone number is set.
export const phoneLink = BUSINESS.phone ? `tel:${BUSINESS.phone.replace(/\s/g, '')}` : null;

export const CLIENTS = [
  'CG Power',
  'Schneider Electric',
  'Exide',
  'L&T',
  'ISMT',
  'Survi Solar',
  'Raychem RPG',
  'Tata Green',
  'Heatcon',
  'Laxmi',
  'S.K. Enterprises',
];
