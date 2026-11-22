import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Linkedin, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

export interface Testimonial {
  name: string;
  company: string;
  testimoni: string;
  imageUrl?: string;
  linkedinUrl?: string;
  companyUrl: string;
  label?: string; // eyebrow on a featured card, e.g. the service the quote is about
  featured?: boolean; // renders full-width beneath the grid instead of as a column card
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const NameLine = ({ testimonial }: { testimonial: Testimonial }) =>
  testimonial.linkedinUrl ? (
    <a
      href={testimonial.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-semibold text-brand-navy transition-colors hover:text-brand-teal-ink"
    >
      {testimonial.name}
      <Linkedin className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">on LinkedIn</span>
    </a>
  ) : (
    <span className="font-semibold text-brand-navy">{testimonial.name}</span>
  );

const SiteLink = ({ testimonial }: { testimonial: Testimonial }) => (
  <a
    href={testimonial.companyUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal-ink underline decoration-brand-teal/60 underline-offset-4 transition-colors hover:text-brand-navy"
  >
    Visit live site
    <span className="sr-only">: {new URL(testimonial.companyUrl).hostname}</span>
    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
  </a>
);

const Attribution = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex items-start gap-4">
    <Avatar className="h-14 w-14 shrink-0 ring-2 ring-white">
      <AvatarImage src={testimonial.imageUrl} alt="" className="object-cover" />
      <AvatarFallback className="bg-brand-navy text-xl font-semibold text-white">{testimonial.name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div>
      <NameLine testimonial={testimonial} />
      <p className="text-sm text-brand-muted">{testimonial.company}</p>
      <SiteLink testimonial={testimonial} />
    </div>
  </div>
);

// Wall of proof: every testimonial visible at once, each tied to a live product so visitors can verify it themselves.
const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const cards = testimonials.filter((t) => !t.featured);
  const featured = testimonials.filter((t) => t.featured);
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          align="center"
          title="Testimonials"
          subtitle="Real founders, real products. Every company links to its live site."
        />

        <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((testimonial) => (
            <li key={testimonial.name} className="flex h-full flex-col rounded-2xl border border-brand-line bg-brand-paper p-8">
              <Quote className="h-8 w-8 text-brand-teal" aria-hidden="true" />
              <blockquote className="mt-5 flex-1">
                <p className="text-lg leading-relaxed text-brand-ink">&ldquo;{testimonial.testimoni}&rdquo;</p>
              </blockquote>
              <div className="mt-6 border-t border-brand-line pt-6">
                <Attribution testimonial={testimonial} />
              </div>
            </li>
          ))}

          {/* Featured quotes span the row; the long quote sits beside its attribution instead of stacking into a tall card */}
          {featured.map((testimonial) => (
            <li key={testimonial.name} className="rounded-2xl border border-brand-line bg-brand-paper p-8 md:col-span-3 md:p-10">
              <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
                <div>
                  <Quote className="h-8 w-8 text-brand-teal" aria-hidden="true" />
                  <blockquote className="mt-5">
                    <p className="text-lg leading-relaxed text-brand-ink">&ldquo;{testimonial.testimoni}&rdquo;</p>
                  </blockquote>
                </div>
                <div className="border-t border-brand-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                  {testimonial.label && (
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-ink">{testimonial.label}</p>
                  )}
                  <Attribution testimonial={testimonial} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
