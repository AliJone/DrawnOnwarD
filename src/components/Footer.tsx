
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import WaveDecoration from './WaveDecoration';
import { serviceSlugs } from './ServicesData';

const services = ['Web Development', 'Mobile Development', 'UI/UX Design', 'SEO', 'Tech Leads for Hire', 'Tech Consulting'];
// Absolute links so they also work from the service, guide and policy pages
const companyLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Why DrawnOnwarD', href: '/#why' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];
const policyLinks = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Cookie Policy', href: '/privacy/#cookies' },
];

const footerLink = 'text-brand-on-navy transition-colors hover:text-white hover:underline underline-offset-4';

const Footer: React.FC = () => (
  <footer className="relative overflow-hidden bg-brand-navy text-white">
    <WaveDecoration className="-right-32 -top-24 h-[360px] w-[560px] text-white/30" flip />
    <div className="container relative mx-auto px-4 py-16 md:px-8 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white p-1">
              <img src="/logo-96.webp" alt="" width={40} height={40} loading="lazy" decoding="async" className="h-10 w-10" />
            </span>
            <span className="text-xl font-bold tracking-tight">DrawnOnwarD</span>
            <span className="sr-only">home</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-brand-on-navy">
            Web and mobile products designed, built and shipped by senior engineers. Tech leads for hire.
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Services</h3>
          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service}>
                <a href={`/services/${serviceSlugs[service]}/`} className={footerLink}>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Company</h3>
          <ul className="space-y-3">
            {companyLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={footerLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Contact</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@drawnonward.org" className={`${footerLink} inline-flex items-center gap-2`}>
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                info@drawnonward.org
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/drawnonward/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${footerLink} inline-flex items-center gap-2`}
              >
                <Linkedin className="h-5 w-5 shrink-0" aria-hidden="true" />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-white/15 pt-8 text-sm text-brand-on-navy">
        <p>DrawnOnwarD the software agency is not affiliated with the Canadian artist collective Drawnonward.</p>
        <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Baked in at build time; the warning is suppressed so a new year never logs a hydration mismatch */}
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} DrawnOnwarD. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {policyLinks.map((item) => (
              <a key={item.label} href={item.href} className={footerLink}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
