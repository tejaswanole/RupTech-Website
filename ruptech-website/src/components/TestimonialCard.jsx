import { Quote } from 'lucide-react';

export default function TestimonialCard({ quote, name, company, role, isPending = false }) {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded p-lg relative flex flex-col h-full">
      <Quote size={36} className="text-surface-variant absolute top-lg right-lg opacity-50" />
      {isPending && (
        <div className="mb-sm">
          <span className="font-mono-label text-mono-label text-on-surface-variant bg-surface-container px-sm py-xs rounded border border-outline-variant text-xs">
            [Testimonial pending — to be collected]
          </span>
        </div>
      )}
      <p className="font-body-md text-body-md text-on-surface-variant italic mb-md relative z-10 flex-grow">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-outline-variant pt-md">
        <p className="font-headline-sm text-headline-sm text-primary">{name}</p>
        {role && <p className="font-body-sm text-body-sm text-on-surface-variant">{role}</p>}
        {company && <p className="font-body-sm text-body-sm text-on-surface-variant">{company}</p>}
      </div>
    </div>
  );
}
