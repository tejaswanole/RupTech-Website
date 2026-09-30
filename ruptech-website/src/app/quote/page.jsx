import QuoteClient from './QuoteClient';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Request a Quote',
  description:
    'Submit an RFQ to Ruptech Engineers for panel enclosures, cable trays, industrial racks, or custom sheet metal fabrication. Response within 24 hours.',
  path: '/quote',
});

export default function QuotePage() {
  return <QuoteClient />;
}
