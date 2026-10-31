import React from 'react';
import WaveDecoration from './WaveDecoration';

export interface Stat {
  value: string;
  label: string;
}

interface StatsBandProps {
  stats: Stat[];
}

// Navy band with teal numbers (deck palette). The figures are owner-approved and are not changed here.
const StatsBand: React.FC<StatsBandProps> = ({ stats }) => (
  <section aria-label="DrawnOnwarD in numbers" className="relative overflow-hidden bg-brand-navy py-14 text-white md:py-20">
    <WaveDecoration className="-left-32 -top-24 h-[360px] w-[560px] text-white/60" />
    <div className="container relative mx-auto px-4 md:px-8">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label} className="border-l-4 border-brand-teal pl-5">
            <span className="display-heading block text-5xl text-brand-teal md:text-6xl">{stat.value}</span>
            <span className="mt-2 block text-sm font-medium text-brand-on-navy md:text-base">{stat.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default StatsBand;
