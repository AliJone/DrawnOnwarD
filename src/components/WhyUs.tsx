import React from 'react';
import SectionHeading from './SectionHeading';

export interface Reason {
  title: string;
  problem: string;
  answer: string;
}

interface WhyUsProps {
  reasons: Reason[];
}

// Numbered reason blocks: one plain-English founder problem, then the concrete thing we do about it
const WhyUs: React.FC<WhyUsProps> = ({ reasons }) => (
  <section id="why" className="scroll-mt-20 py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="Why DrawnOnwarD"
        subtitle="Six things founders tell us went wrong with their last agency, and what we do differently on every project."
      />
      <ol className="grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <li key={reason.title} className="flex flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-8">
            <span aria-hidden="true" className="display-heading inline-flex h-14 w-14 items-center justify-center bg-brand-teal text-3xl">
              {String(index + 1).padStart(2, '0')}
            </span>
            <p className="mt-6 text-base italic leading-relaxed text-brand-muted">&ldquo;{reason.problem}&rdquo;</p>
            <h3 className="mt-3 text-xl font-semibold text-brand-navy">{reason.title}</h3>
            <p className="mt-2 leading-relaxed text-brand-ink/80">{reason.answer}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default WhyUs;
