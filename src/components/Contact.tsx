
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Mail, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';

// Form backend (e.g. a Formspree URL) set at build time; see .env.example
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const CONTACT_EMAIL = 'info@drawnonward.org';

// The three most common objections, most common first
const promises = [
  'Fixed scope and quote before any work starts',
  'Weekly demos, so you see progress every week',
  'Senior engineers only. The people you meet are the people who build',
];

const inputClass =
  'w-full rounded-md border-2 border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-brand-muted/70 transition-colors focus:border-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // No endpoint configured: hand off to the visitor's mail client so no lead is lost
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Project roadmap request from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast({
        title: "Request received!",
        description: "We'll send your project roadmap within one business day.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please email us directly at ${CONTACT_EMAIL}.`,
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title="Contact us"
              subtitle="Tell us what you're building. You'll get a free project roadmap: scope, timeline and a budget range, within one business day."
            />

            <ul className="space-y-4">
              {promises.map((promise) => (
                <li key={promise} className="flex items-start gap-3 text-lg text-brand-ink">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-ink" aria-hidden="true" />
                  <span>{promise}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4 text-lg font-medium text-brand-navy transition-colors hover:text-brand-teal-ink">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-teal text-brand-navy">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://www.linkedin.com/company/drawnonward/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-lg font-medium text-brand-navy transition-colors hover:text-brand-teal-ink"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-teal text-brand-navy">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </span>
                DrawnOnwarD on LinkedIn
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-brand-line md:p-10">
            <h3 className="text-2xl font-semibold text-brand-navy">Send us a message</h3>
            <p className="mt-2 text-sm text-brand-muted">Three fields. We read every one.</p>

            <div className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-ink">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-ink">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-ink">
                  What are you building?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={inputClass}
                  placeholder="Tell us about your project, timeline and goals..."
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn btn-primary w-full disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Get my free roadmap'}
              </button>
              <p className="text-center text-sm text-brand-muted">
                No commitment. We reply within one business day.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
