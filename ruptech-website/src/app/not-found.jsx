import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-gutter text-center bg-surface-container-low">
      <div className="mb-lg">
        <div className="font-headline-xl text-[120px] font-extrabold text-primary opacity-20 leading-none">404</div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface -mt-8 mb-md">Page Not Found</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto">
          We couldn&apos;t find the page you were looking for. It may have moved or doesn&apos;t exist.
        </p>
      </div>
      <div className="flex flex-wrap gap-sm justify-center">
        <Link
          href="/"
          className="bg-primary-container text-on-primary font-label-caps text-label-caps px-lg py-sm rounded hover:bg-[#0c6b5c] transition-colors flex items-center gap-2"
        >
          <Home size={16} /> Back to Home
        </Link>
        <Link
          href="/contact"
          className="border border-outline text-on-surface-variant font-label-caps text-label-caps px-lg py-sm rounded hover:border-primary hover:text-primary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
