import { CLIENTS } from '@/lib/constants';

export default function ClientLogoGrid({ clients = CLIENTS, size = 'md', className = '' }) {
  const gridCols = {
    sm: 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
    md: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    lg: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
  };

  const cardHeight = {
    sm: 'h-20',
    md: 'h-24',
    lg: 'h-28',
  };

  return (
    <div className={`grid ${gridCols[size]} gap-md ${className}`}>
      {clients.map((client, i) => (
        <div
          key={i}
          className={`bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center ${cardHeight[size]} p-md hover:border-primary transition-colors`}
        >
          <span className="font-headline-sm text-headline-sm text-on-surface-variant text-center text-sm">
            {client}
          </span>
        </div>
      ))}
    </div>
  );
}
