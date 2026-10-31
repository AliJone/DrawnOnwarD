import React from 'react';
import { CircleCheckBig } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProofItem {
  label: string;
  href?: string;
  external?: boolean;
  // Rating badges (Clutch, GoodFirms) can be added later as items with their own icon
  icon?: React.ReactNode;
}

interface ProofRowProps {
  items: ProofItem[];
  className?: string;
}

// Trust row under the hero CTAs. Only verifiable proof goes in here.
const ProofRow: React.FC<ProofRowProps> = ({ items, className }) => (
  <ul className={cn('flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-brand-line py-4 text-sm font-medium text-brand-ink', className)}>
    {items.map((item) => (
      <li key={item.label} className="flex items-center gap-2.5">
        <span className="shrink-0 text-brand-teal-ink">
          {item.icon ?? <CircleCheckBig className="h-5 w-5" aria-hidden="true" />}
        </span>
        {item.href ? (
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            className="underline decoration-brand-teal decoration-2 underline-offset-4 transition-colors hover:text-brand-navy"
          >
            {item.label}
          </a>
        ) : (
          <span>{item.label}</span>
        )}
      </li>
    ))}
  </ul>
);

export default ProofRow;
