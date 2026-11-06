
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ServiceItem, getServiceDescription, getServiceIcon, getServiceProblem, serviceSlugs } from './ServicesData';
import SectionHeading from './SectionHeading';

interface ServicesProps {
  services: ServiceItem[];
}

// Numbered service blocks: the founder's problem first, then the service that answers it
const Services: React.FC<ServicesProps> = ({ services }) => (
  <section id="services" className="scroll-mt-20 bg-white py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionHeading
        title="Our services"
        subtitle="Six ways we help founders ship. Each one starts with the problem you bring us, not with the technology we would like to sell."
      />

      <ol className="grid list-none gap-px overflow-hidden rounded-2xl border border-brand-line bg-brand-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.title} className="flex flex-col bg-white p-7 transition-colors duration-300 hover:bg-brand-paper md:p-8">
            <div className="flex items-center justify-between">
              <span aria-hidden="true" className="display-heading inline-flex h-12 w-12 items-center justify-center bg-brand-teal text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-brand-navy">{service.icon ?? getServiceIcon(service.title)}</span>
            </div>
            <p className="mt-6 text-sm italic leading-relaxed text-brand-muted">&ldquo;{getServiceProblem(service.title)}&rdquo;</p>
            <h3 className="mt-3 text-xl font-semibold text-brand-navy md:text-2xl">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-brand-ink/80">{service.description || getServiceDescription(service.title)}</p>
            <a href={`/services/${serviceSlugs[service.title]}/`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-ink hover:text-brand-navy">
              More about {service.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Services;
