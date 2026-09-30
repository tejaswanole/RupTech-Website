import { BUSINESS } from '@/lib/constants';

// Page metadata with a canonical URL and page-specific Open Graph fields.
export function pageMeta({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: BUSINESS.name,
      title: `${title} | ${BUSINESS.shortName}`,
      description,
      url: path,
      images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${BUSINESS.shortName}`,
      description,
    },
  };
}
