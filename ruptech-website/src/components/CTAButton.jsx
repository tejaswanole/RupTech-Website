import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = true,
  onClick,
  type = 'button',
  disabled = false,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-label-caps text-label-caps rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none';

  const sizes = {
    sm: 'px-sm py-xs',
    md: 'px-md py-sm',
    lg: 'px-lg py-sm',
  };

  const variants = {
    primary: 'bg-primary-container text-on-primary hover:bg-[#0c6b5c] focus:ring-primary-container',
    secondary: 'border border-secondary text-secondary hover:bg-surface-container focus:ring-secondary',
    dark: 'bg-inverse-surface text-inverse-on-surface hover:bg-[#1a1e1c]',
    ghost: 'text-primary hover:bg-surface-container focus:ring-primary',
    whatsapp: 'bg-[#1D4E89] text-white hover:bg-[#174078]',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={16} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
}
