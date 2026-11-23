import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ExternalLink, Quote } from 'lucide-react';
import { seoTemplates } from '@/lib/seoTemplates';
import { serviceContent, ServiceTable } from '@/content/services';
import { getServiceIcon } from '@/components/ServicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import RichText from '@/components/RichText';
import NotFound from '@/pages/NotFound';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const h3 = 'mt-12 text-xl font-semibold text-brand-navy';

// First column is the row label; the table scrolls sideways on narrow screens like the About team table
const Table: React.FC<{ table: ServiceTable }> = ({ table }) => (
  <div className="mt-6 overflow-x-auto rounded-2xl border border-brand-line bg-white">
    <table className="w-full min-w-[640px] text-left text-sm">
      <thead className="bg-brand-paper text-xs uppercase tracking-[0.12em] text-brand-muted">
        <tr>
          {table.columns.map((column, i) => (
            <th key={i} scope="col" className="px-4 py-3 font-semibold">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row[0]} className="border-t border-brand-line align-top text-brand-ink">
            {row.map((cell, i) => (
              i === 0
                ? <th key={i} scope="row" className="px-4 py-3 text-left font-medium text-brand-navy">{cell}</th>
                : <td key={i} className="px-4 py-3 leading-relaxed">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    {table.note && <p className="border-t border-brand-line px-4 py-3 text-sm text-brand-muted">{table.note}</p>}
  </div>
);

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? serviceContent[serviceSlug] : undefined;
  const seo = serviceSlug ? seoTemplates[serviceSlug] : undefined;

  // The prerendered head already carries the title; this keeps it right after client-side navigation
  useEffect(() => {
    if (seo) document.title = seo.title;
  }, [seo]);

  if (!service || !seo) return <NotFound />;

  const others = Object.entries(serviceContent).filter(([slug]) => slug !== serviceSlug);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-4 pb-20 pt-32 md:px-8 md:pt-40">
        <a href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal-ink hover:text-brand-navy">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All services
        </a>
        <div className="mt-6 text-brand-navy">{getServiceIcon(service.icon)}</div>
        {service.h1 && <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal-ink">{service.title}</p>}
        <h1 className="display-heading mt-4 text-4xl md:text-6xl">{service.h1 ?? service.title}</h1>
        <span aria-hidden="true" className="teal-rule mt-5" />
        <h2 className="mt-8 text-2xl font-semibold text-brand-navy md:text-3xl">{service.heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-ink/80 md:text-xl">{service.description}</p>
        <p className="mt-4 text-sm text-brand-muted">Last updated {formatDate(seo.lastmod)}.</p>

        {service.facts && (
          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {service.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-brand-line bg-brand-paper p-5">
                <dd className="display-heading text-2xl text-brand-navy md:text-3xl">{fact.value}</dd>
                <dt className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{fact.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {service.intro?.map((paragraph) => (
          <p key={paragraph} className="mt-6 leading-relaxed text-brand-ink/80"><RichText text={paragraph} /></p>
        ))}

        {service.caseStudy && (
          <a href={service.caseStudy.href} className="mt-8 flex items-center justify-between gap-4 rounded-2xl border border-brand-line bg-brand-paper px-5 py-4 font-medium text-brand-navy hover:border-brand-navy">
            <span><span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-ink">Case study</span>{service.caseStudy.label}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        )}

        <h3 className={h3}>{service.benefitsHeading ?? 'Key benefits'}</h3>
        <ul className="mt-4 space-y-3">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-brand-ink">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-ink" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <h3 className={h3}>{service.processHeading ?? 'Our process'}</h3>
        <ol className="mt-4 space-y-3">
          {service.process.map((step, index) => (
            <li key={step} className="flex items-start gap-4 text-brand-ink">
              <span aria-hidden="true" className="display-heading inline-flex h-9 w-9 shrink-0 items-center justify-center bg-brand-teal text-lg text-brand-navy">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="pt-1.5">{step}</span>
            </li>
          ))}
        </ol>

        {service.sections?.map((section) => (
          <section key={section.heading}>
            <h3 className={h3}>{section.heading}</h3>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-brand-ink/80"><RichText text={paragraph} /></p>
            ))}
            {section.table && <Table table={section.table} />}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-brand-ink">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-ink" aria-hidden="true" />
                    <span><RichText text={bullet} /></span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {service.testimonial && (
          <figure className="mt-14 rounded-2xl border border-brand-line bg-brand-paper p-7 md:p-9">
            <Quote className="h-8 w-8 text-brand-teal" aria-hidden="true" />
            <blockquote className="mt-4 text-lg leading-relaxed text-brand-ink">&ldquo;{service.testimonial.quote}&rdquo;</blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-muted">
              <span className="font-semibold text-brand-navy">{service.testimonial.name}</span>
              <span>{service.testimonial.role}</span>
              <a
                href={service.testimonial.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-brand-teal-ink underline decoration-brand-teal/60 underline-offset-4 hover:text-brand-navy"
              >
                Visit live site <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        )}

        {service.faqs && (
          <section>
            <h3 className={h3}>Frequently asked questions</h3>
            <dl className="mt-4 divide-y divide-brand-line rounded-2xl border border-brand-line bg-white">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="px-5 py-5">
                  <dt className="font-semibold text-brand-navy">{faq.question}</dt>
                  <dd className="mt-2 leading-relaxed text-brand-ink/80">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <CtaBand />

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-ink">Other services</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {others.map(([slug, other]) => (
            <li key={slug}>
              <a href={`/services/${slug}/`} className="flex items-center justify-between rounded-xl border border-brand-line bg-white px-5 py-4 font-medium text-brand-navy hover:border-brand-navy">
                {other.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
