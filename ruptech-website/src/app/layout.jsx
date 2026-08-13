import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BUSINESS } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    'Ruptech Engineers Pvt. Ltd. — Precision manufacturer of electrical panel enclosures, cable trays, industrial storage racks, and custom sheet metal solutions in Ahmednagar, Maharashtra.',
  keywords: [
    'sheet metal fabrication',
    'panel enclosures',
    'distribution box',
    'cable tray',
    'industrial storage racks',
    'MCCB box',
    'EV charger box',
    'CNC laser cutting',
    'Ahmednagar manufacturer',
    'Ruptech Engineers',
  ],
  metadataBase: new URL('https://www.ruptechengineers.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.ruptechengineers.com',
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description:
      'Precision manufacturer of electrical panel enclosures, cable management, and industrial storage solutions. MIDC Ahmednagar, Maharashtra.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${BUSINESS.name}` }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col bg-background text-on-background`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
