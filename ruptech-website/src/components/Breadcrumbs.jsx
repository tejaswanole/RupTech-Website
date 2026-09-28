import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { SITE_URL } from '@/lib/constants';

// items: [{ label, href }]. The last item is the current page.
export default function Breadcrumbs({ items }) {
  const trail = [{ label: 'Home', href: '/' }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="max-w-container-max mx-auto px-gutter pt-md">
        <ol className="flex flex-wrap items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-xs">
                {last ? (
                  <span aria-current="page" className="text-on-surface">{item.label}</span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-primary transition-colors py-1">
                      {item.label}
                    </Link>
                    <ChevronRight size={14} aria-hidden="true" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: trail.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
          })),
        }}
      />
    </>
  );
}
