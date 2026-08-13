import QuoteClient from './QuoteClient';

export const metadata = {
  title: 'Request a Quote',
  description:
    'Submit an RFQ to Ruptech Engineers for panel enclosures, cable trays, industrial racks, or custom sheet metal fabrication. Response within 24 hours.',
};

export default function QuotePage() {
  return <QuoteClient />;
}
