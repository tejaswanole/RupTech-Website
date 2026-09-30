import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BUSINESS, SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: '500',
  variable: '--font-jetbrains',
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
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
    description:
      'Precision manufacturer of electrical panel enclosures, cable management, and industrial storage solutions. MIDC Ahmednagar, Maharashtra.',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className={`antialiased min-h-screen flex flex-col bg-background text-on-background`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
