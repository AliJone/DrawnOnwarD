import React from 'react';
import { ArrowRight } from 'lucide-react';

// Closing call to action shared by the service, guide, case-study and about pages
const CtaBand: React.FC = () => (
  <div className="mt-14 rounded-2xl bg-brand-navy p-8 text-center text-white md:p-10">
    <h3 className="display-heading text-3xl text-white md:text-4xl">Ready to discuss your project?</h3>
    <p className="mx-auto mt-4 max-w-xl text-brand-on-navy">
      Tell us what you are building. You get a free project roadmap, with scope, timeline and a budget range, within one business day.
    </p>
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      <a href="/#contact" className="btn btn-teal">
        Get your free project roadmap <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </a>
      <a href="/#pricing" className="btn btn-light">See what an MVP costs</a>
    </div>
  </div>
);

export default CtaBand;
