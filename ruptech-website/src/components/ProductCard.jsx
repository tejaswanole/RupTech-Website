import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ title, description, href, image, imageAlt }) {
  return (
    <Link
      href={href}
      className="group block bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden hover:border-primary transition-colors hover:shadow-sm"
    >
      {/* Image */}
      <div className="h-48 bg-surface-variant relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-container">
            <span className="text-on-surface-variant font-headline-sm text-headline-sm opacity-30">
              {title}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-md">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-sm group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">{description}</p>
        <span className="text-primary font-label-caps text-label-caps flex items-center gap-1">
          Explore Products <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
