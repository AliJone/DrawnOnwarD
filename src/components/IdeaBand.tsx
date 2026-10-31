import React from 'react';
import { ArrowRight } from 'lucide-react';
import WaveDecoration from './WaveDecoration';

interface IdeaBandProps {
  examples: string[];
}

// Mid-page invitation. No estimator or form here: the CTA leads to the contact form.
const IdeaBand: React.FC<IdeaBandProps> = ({ examples }) => (
  <section id="idea" aria-labelledby="idea-heading" className="relative overflow-hidden bg-brand-navy py-20 text-white md:py-28">
    <WaveDecoration className="-left-28 -bottom-24 h-[360px] w-[560px] text-white/60" />
    <WaveDecoration className="-right-28 -top-24 h-[360px] w-[560px] text-white/60" flip />
    <div className="container relative mx-auto px-4 text-center md:px-8">
      <h2 id="idea-heading" className="display-heading text-5xl text-white md:text-6xl lg:text-7xl">
        Have an idea?
      </h2>
      <span aria-hidden="true" className="teal-rule mx-auto mt-6" />
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brand-on-navy md:text-xl">
        Tell us what you are building and who it is for. Within one business day you get a free project roadmap: scope, timeline and a budget range you can take to your co-founder or your investors.
      </p>
      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Founders usually bring us</p>
      <ul className="mt-4 flex flex-wrap justify-center gap-3" aria-label="Examples of what founders bring us">
        {examples.map((example) => (
          <li key={example} className="rounded-full border border-brand-teal/70 bg-white/5 px-4 py-2 text-sm font-medium text-white">
            {example}
          </li>
        ))}
      </ul>
      <a href="#contact" className="btn btn-teal mt-10">
        Get your free project roadmap
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </a>
      <p className="mt-4 text-sm text-brand-on-navy">No commitment. We reply within one business day.</p>
    </div>
  </section>
);

export default IdeaBand;
