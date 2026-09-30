import ContactClient from './ContactClient';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Contact Us',
  description:
    'Contact Ruptech Engineers — Plot L-237 & L-248, MIDC Ahmednagar. Phone, email, WhatsApp, and online inquiry form.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactClient />;
}
