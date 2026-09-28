import Image from 'next/image';
import { CLIENTS } from '@/lib/constants';

export default function ClientLogoGrid({ clients = CLIENTS, size = 'md', className = '' }) {
  const gridCols = {
    sm: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
    md: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
    lg: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6',
  };

  const cardHeight = {
    sm: 'h-20',
    md: 'h-24',
    lg: 'h-28',
  };

  return (
    <ul className={`grid ${gridCols[size]} gap-md ${className}`}>
      {clients.map((client) => (
        <li
          key={client.name}
          className={`bg-surface-container-lowest border border-outline-variant rounded flex items-center justify-center ${cardHeight[size]} p-sm hover:border-primary transition-colors`}
        >
          {client.logo ? (
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="(max-width: 640px) 50vw, 200px"
                className="object-contain"
              />
            </div>
          ) : (
            <span className="font-headline-sm text-headline-sm text-on-surface-variant text-center">{client.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
