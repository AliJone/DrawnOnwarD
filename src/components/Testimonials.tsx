import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Linkedin, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

export interface Testimonial {
  name: string;
  company: string;
  testimoni: string;
  imageUrl?: string;
  linkedinUrl: string;
  companyUrl: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Wall of proof: every testimonial visible at once, each linked to a real
// person and a live product so visitors can verify it themselves.
const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          align="center"
          title="Testimonials"
          subtitle="Real founders, real products. Every name links to a LinkedIn profile and every company to a live site."
        />

        <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.linkedinUrl} className="flex h-full flex-col rounded-2xl border border-brand-line bg-brand-paper p-8">
              <Quote className="h-8 w-8 text-brand-teal" aria-hidden="true" />
              <blockquote className="mt-5 flex-1">
                <p className="text-lg leading-relaxed text-brand-ink">&ldquo;{testimonial.testimoni}&rdquo;</p>
              </blockquote>
              <div className="mt-6 flex items-start gap-4 border-t border-brand-line pt-6">
                <Avatar className="h-14 w-14 shrink-0 ring-2 ring-white">
                  <AvatarImage
                    src={testimonial.imageUrl}
                    alt=""
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-brand-navy text-xl font-semibold text-white">{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
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
                  <p className="text-sm text-brand-muted">{testimonial.company}</p>
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
