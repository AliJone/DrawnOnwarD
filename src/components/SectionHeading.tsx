import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  id?: string;
  className?: string;
}

// Deck-style section title: condensed uppercase display type with a short teal rule beneath
const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'left', tone = 'light', id, className }) => {
  const centered = align === 'center';
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      <h2 id={id} className={cn('display-heading text-4xl md:text-5xl lg:text-6xl', tone === 'dark' && 'text-white')}>
        {title}
      </h2>
      <span aria-hidden="true" className={cn('teal-rule mt-5', centered && 'mx-auto')} />
      {subtitle && (
        <p className={cn('mt-6 max-w-2xl text-lg leading-relaxed', centered && 'mx-auto', tone === 'dark' ? 'text-brand-on-navy' : 'text-brand-muted')}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
