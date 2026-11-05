import React from 'react';
import SectionHeading from './SectionHeading';

export interface PriceBand {
  range: string;
  name: string;
  fit: string;
  includes: string;
}

interface PricingProps {
  bands: PriceBand[];
}

// Published price bands so founders, and the assistants they ask, can quote us without a call
const Pricing: React.FC<PricingProps> = ({ bands }) => (
  <section id="pricing" className="scroll-mt-20 bg-white py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="What an MVP costs"
        subtitle="Three bands cover most of what founders bring us. Every project gets a fixed quote after a free roadmap and is paid by milestone."
      />
      <ol className="grid list-none gap-6 md:grid-cols-3">
        {bands.map((band) => (
          <li key={band.name} className="flex flex-col rounded-2xl border border-brand-line bg-brand-paper p-7 md:p-8">
            <span className="display-heading text-4xl text-brand-navy md:text-5xl">{band.range}</span>
            <h3 className="mt-4 text-xl font-semibold text-brand-navy">{band.name}</h3>
            <p className="mt-2 italic leading-relaxed text-brand-muted">{band.fit}</p>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{band.includes}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-3xl leading-relaxed text-brand-ink/80">
        Each MVP team pairs a senior tech lead with a full-stack engineer, a product designer and a QA engineer. DevOps and a certified project manager are shared across projects. Tech leads for hire are priced per engagement: ask us.
      </p>
    </div>
  </section>
);

export default Pricing;
