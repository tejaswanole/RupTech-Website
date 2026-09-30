import GalleryClient from './GalleryClient';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Gallery',
  description:
    'View Ruptech Engineers\' gallery — panel enclosures, cable trays, storage racks, and manufacturing facility photos.',
  path: '/gallery',
});

export default function GalleryPage() {
  return <GalleryClient />;
}
