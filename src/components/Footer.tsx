
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Linkedin, Mail } from 'lucide-react';
import WaveDecoration from './WaveDecoration';

const services = ['Web Development', 'Mobile Development', 'UI/UX Design', 'SEO', 'Tech Leads for Hire', 'Tech Consulting'];
const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Why DrawnOnwarD', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const footerLink = 'text-brand-on-navy transition-colors hover:text-white hover:underline underline-offset-4';

const Footer: React.FC = () => {
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'cookie' | null>(null);

  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'cookie') => {
    setPolicyType(type);
  };

  const handleClosePolicy = () => {
    setPolicyType(null);
  };

  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return {
          title: "Privacy Policy",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. Introduction</h3>
              <p className="mb-4">This Privacy Policy explains how DrawnOnwarD collects, uses, and discloses your information when you use our services. We are committed to protecting your privacy and personal data.</p>

              <h3 className="text-lg font-bold mb-4">2. Information We Collect</h3>
              <p className="mb-4">We collect information you provide directly, such as when you contact us, subscribe to our newsletter, or use our services. This may include names, email addresses, and other contact details. We also collect usage data when you visit our website.</p>

              <h3 className="text-lg font-bold mb-4">3. How We Use Your Information</h3>
              <p className="mb-4">We use your information to provide and improve our services, communicate with you, and comply with legal obligations. We may also use it for marketing purposes if you've given consent.</p>

              <h3 className="text-lg font-bold mb-4">4. Data Security</h3>
              <p className="mb-4">We implement appropriate security measures to protect your personal data against unauthorized access or disclosure.</p>

              <h3 className="text-lg font-bold mb-4">5. Contact Us</h3>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us at info@drawnonward.org.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: "Terms of Service",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. Acceptance of Terms</h3>
              <p className="mb-4">By accessing or using DrawnOnwarD's services, you agree to be bound by these Terms of Service.</p>

              <h3 className="text-lg font-bold mb-4">2. Use of Services</h3>
              <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage or impair the operation of our services.</p>

              <h3 className="text-lg font-bold mb-4">3. Intellectual Property</h3>
              <p className="mb-4">All content, features, and functionality on our website are owned by DrawnOnwarD and are protected by copyright, trademark, and other intellectual property laws.</p>

              <h3 className="text-lg font-bold mb-4">4. Limitation of Liability</h3>
              <p className="mb-4">DrawnOnwarD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>

              <h3 className="text-lg font-bold mb-4">5. Changes to Terms</h3>
              <p className="mb-4">We may revise these Terms from time to time. The most current version will always be posted on our website.</p>
            </div>
          )
        };
      case 'cookie':
        return {
          title: "Cookie Policy",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. What Are Cookies</h3>
              <p className="mb-4">Cookies are small text files that are stored on your device when you visit a website. They help to provide you with a better browsing experience.</p>

              <h3 className="text-lg font-bold mb-4">2. How We Use Cookies</h3>
              <p className="mb-4">We use cookies to understand how you use our website, to remember your preferences, and to improve your experience.</p>

              <h3 className="text-lg font-bold mb-4">3. Types of Cookies We Use</h3>
              <p className="mb-4">
                - Essential cookies: Required for the website to function properly<br/>
                - Preference cookies: Remember your settings and preferences<br/>
                - Analytics cookies: Help us understand how visitors interact with the website<br/>
                - Marketing cookies: Used to track visitors across websites
              </p>

              <h3 className="text-lg font-bold mb-4">4. Managing Cookies</h3>
              <p className="mb-4">Most web browsers allow you to control cookies through their settings. You can delete existing cookies and set your browser to prevent new cookies from being set.</p>

              <h3 className="text-lg font-bold mb-4">5. Changes to this Policy</h3>
              <p className="mb-4">We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices.</p>
            </div>
          )
        };
      default:
        return { title: "", content: null };
    }
  };

  const policyData = getPolicyContent();

  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <WaveDecoration className="-right-32 -top-24 h-[360px] w-[560px] text-white/30" flip />

      <div className="container relative mx-auto px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
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
                  <a href="#services" className={footerLink}>
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
              <button type="button" onClick={() => handleOpenPolicy('privacy')} className={footerLink}>
                Privacy Policy
              </button>
              <button type="button" onClick={() => handleOpenPolicy('terms')} className={footerLink}>
                Terms of Service
              </button>
              <button type="button" onClick={() => handleOpenPolicy('cookie')} className={footerLink}>
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Dialog */}
      <Dialog open={policyType !== null} onOpenChange={handleClosePolicy}>
        <DialogContent className="max-h-[80vh] overflow-y-auto bg-white text-brand-ink">
          <DialogHeader>
            <DialogTitle className="text-brand-navy">{policyData.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {policyData.content}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
