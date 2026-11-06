import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Check } from 'lucide-react';
import { guides, work } from '@/content/articles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import NotFound from '@/pages/NotFound';

interface ArticlePageProps {
  kind: 'guide' | 'work';
}

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Renders a registry entry: breadcrumb, eyebrow, H1, author and updated date, sections, closing CTA
const ArticlePage: React.FC<ArticlePageProps> = ({ kind }) => {
  const { slug } = useParams<{ slug: string }>();
  const article = (kind === 'guide' ? guides : work).find((a) => a.slug === slug);

  // The prerendered head already carries the title; this keeps it right after client-side navigation
  useEffect(() => {
    if (article) document.title = `${article.title} | DrawnOnwarD`;
  }, [article]);

  if (!article) return <NotFound />;

  const parentHref = kind === 'guide' ? '/#services' : '/#projects';
  const parentLabel = kind === 'guide' ? 'Guides' : 'Work';

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 pb-20 pt-32 md:px-8 md:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-brand-teal-ink">
          <a href="/" className="hover:text-brand-navy">Home</a>
          <span aria-hidden="true"> / </span>
          <a href={parentHref} className="hover:text-brand-navy">{parentLabel}</a>
        </nav>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal-ink">{kind === 'guide' ? 'Guide' : 'Case study'}</p>
        <h1 className="display-heading mt-3 text-4xl md:text-6xl">{article.title}</h1>
        <span aria-hidden="true" className="teal-rule mt-5" />
        <p className="mt-6 text-sm text-brand-muted">
          By{' '}
          <a href="https://www.linkedin.com/in/ali-jone-merchant/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-navy underline underline-offset-4">
            Ali Jone Merchant
          </a>
          , Founder. Last updated {formatDate(article.dateModified)}.
          {article.client && (
            <>
              {' '}Client:{' '}
              <a href={article.client.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-navy underline underline-offset-4">
                {article.client.name}
              </a>
              .
            </>
          )}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-brand-ink/80 md:text-xl">{article.description}</p>

        {article.sections.map((section, index) => (
          <section key={section.heading ?? index} className="mt-10">
            {section.heading && <h2 className="text-2xl font-semibold text-brand-navy">{section.heading}</h2>}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-brand-ink/80">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-brand-ink">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-ink" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <CtaBand />
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;
