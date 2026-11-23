import { guides, work, type Article } from '@/content/articles';
import { serviceContent } from '@/content/services';

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  lastmod: string;
  priority?: string; // sitemap priority; defaults to 0.8 (homepage 1.0)
  structuredData: Record<string, unknown>;
}

const SITE = 'https://drawnonward.org';
const ORG_ID = `${SITE}/#organization`;
const WEBSITE_ID = `${SITE}/#website`;
const FOUNDER_ID = `${SITE}/#ali-jone-merchant`;

// Same @id as the founder node on the homepage, so every page points at one Person
const founderNode = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Ali Jone Merchant',
  jobTitle: 'Founder',
  worksFor: { '@id': ORG_ID },
  sameAs: ['https://www.linkedin.com/in/ali-jone-merchant/'],
};

const breadcrumbs = (items: { name: string; item: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: it.item })),
});

interface ServiceSeoInput {
  slug: string;
  name: string;
  serviceType: string;
  title: string;
  description: string;
  keywords: string;
  lastmod: string;
  offers?: { name: string; minPrice: number; maxPrice: number }[]; // priced bands, USD
}

// One Service node per page, tied to the organization and website defined on the homepage.
// Trailing slashes match what GitHub Pages serves, so canonical and sitemap URLs never redirect.
const servicePage = (s: ServiceSeoInput): PageSeo => {
  const url = `${SITE}/services/${s.slug}/`;
  const faqs = serviceContent[s.slug]?.faqs;
  return {
    path: `/services/${s.slug}/`,
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    canonical: url,
    lastmod: s.lastmod,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${SITE}/#service-${s.slug}`,
          name: s.name,
          serviceType: s.serviceType,
          description: s.description,
          url,
          provider: { '@id': ORG_ID },
          areaServed: 'Worldwide',
          ...(s.offers
            ? {
                offers: s.offers.map((o) => ({
                  '@type': 'Offer',
                  name: o.name,
                  priceSpecification: { '@type': 'PriceSpecification', minPrice: o.minPrice, maxPrice: o.maxPrice, priceCurrency: 'USD' },
                })),
              }
            : {}),
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: s.title,
          description: s.description,
          inLanguage: 'en',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': `${SITE}/#service-${s.slug}` },
        },
        // Questions and answers come from the page content, so schema and copy cannot drift apart
        ...(faqs
          ? [
              {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.question,
                  acceptedAnswer: { '@type': 'Answer', text: f.answer },
                })),
              },
            ]
          : []),
        breadcrumbs([
          { name: 'Home', item: `${SITE}/` },
          { name: 'Services', item: `${SITE}/#services` },
          { name: s.name, item: url },
        ]),
      ],
    },
  };
};

// Keyed by URL slug so the lookup in ServiceDetailPage is the route parameter itself
export const seoTemplates: Record<string, PageSeo> = {
  'mvp-development': servicePage({
    slug: 'mvp-development',
    name: 'MVP Development',
    serviceType: 'MVP development',
    lastmod: '2026-11-23',
    title: 'MVP Development Services for B2B SaaS Startups | DrawnOnwarD',
    description: 'A 10-person agency builds your B2B SaaS MVP in 8 to 12 weeks for a fixed $15k–40k quote after a free roadmap. Senior engineers, weekly demos, you own the code.',
    keywords: 'mvp development services, mvp development company, build an mvp for a startup, b2b saas mvp development, mvp development cost, startup mvp agency',
    offers: [
      { name: 'Scoped build', minPrice: 5000, maxPrice: 15000 },
      { name: 'B2B SaaS MVP', minPrice: 15000, maxPrice: 40000 },
      { name: 'Data or API platform', minPrice: 40000, maxPrice: 80000 },
    ],
  }),
  'web-development': servicePage({
    slug: 'web-development',
    name: 'Web Development',
    serviceType: 'Web development',
    lastmod: '2026-11-07',
    title: 'Custom Web Development Services | DrawnOnwarD',
    description: 'Custom web applications and websites built by senior engineers in Next.js, Nuxt, React and Vue on Node.js, Go or .NET. Fixed quote after a free roadmap.',
    keywords: 'custom web development, web application development, responsive website design, scalable web solutions, web development agency',
  }),
  'mobile-development': servicePage({
    slug: 'mobile-development',
    name: 'Mobile Development',
    serviceType: 'Mobile app development',
    lastmod: '2026-11-07',
    title: 'Mobile App Development Company | DrawnOnwarD',
    description: 'iOS and Android apps in React Native and Flutter, built by senior engineers with weekly demos and milestone payments.',
    keywords: 'mobile app development company, iOS app development, Android app development, React Native development, Flutter development',
  }),
  'ui-ux-design': servicePage({
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    serviceType: 'UI/UX design',
    lastmod: '2026-11-07',
    title: 'UI/UX Design Services | DrawnOnwarD',
    description: 'User-centered interface and experience design for web and mobile products, from research and wireframes to a tested visual design.',
    keywords: 'UI/UX design services, user interface design, user experience design, product design agency, mobile app design',
  }),
  seo: servicePage({
    slug: 'seo',
    name: 'SEO',
    serviceType: 'Search engine optimization',
    lastmod: '2026-11-07',
    title: 'SEO Services for Software Products | DrawnOnwarD',
    description: 'Technical and content SEO for software products: audits, keyword strategy, on-page optimization and content that earns organic traffic.',
    keywords: 'SEO services, search engine optimization, technical SEO, organic traffic growth, SaaS SEO',
  }),
  'tech-leads-for-hire': servicePage({
    slug: 'tech-leads-for-hire',
    name: 'Tech Leads for Hire',
    serviceType: 'Staff augmentation',
    lastmod: '2026-11-23',
    title: 'Hire Senior Developers and Tech Leads for Your Startup | DrawnOnwarD',
    description: 'Staff augmentation for startups: senior developers and tech leads from a 10-person team, 8 years\' average experience, shortlist in 5 days, month to month.',
    keywords: 'hire senior developers, staff augmentation for startups, tech leads for hire, hire a tech lead, dedicated development team, toptal alternative for startups',
  }),
  'tech-consulting': servicePage({
    slug: 'tech-consulting',
    name: 'Tech Consulting',
    serviceType: 'Technology consulting',
    lastmod: '2026-11-07',
    title: 'Technology Consulting for Startups | DrawnOnwarD',
    description: 'Stack, architecture and build-versus-buy decisions for founders, made before they get expensive. Senior engineers, not slide decks.',
    keywords: 'tech consulting services, technology strategy, software architecture consulting, startup CTO advice, digital transformation consulting',
  }),
};

interface StaticPageInput {
  path: string;
  title: string;
  description: string;
  keywords: string;
  lastmod: string;
  breadcrumb: string;
  pageType?: 'WebPage' | 'AboutPage';
  priority?: string;
}

// Standalone pages: WebPage (or AboutPage) plus breadcrumb; the About page also carries the founder Person
const staticPage = (p: StaticPageInput): PageSeo => {
  const url = `${SITE}${p.path}`;
  const pageType = p.pageType ?? 'WebPage';
  return {
    path: p.path,
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    canonical: url,
    lastmod: p.lastmod,
    priority: p.priority,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': pageType,
          '@id': `${url}#webpage`,
          url,
          name: p.title,
          description: p.description,
          inLanguage: 'en',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': ORG_ID },
          ...(pageType === 'AboutPage' ? { mainEntity: { '@id': ORG_ID } } : {}),
        },
        ...(pageType === 'AboutPage' ? [founderNode] : []),
        breadcrumbs([
          { name: 'Home', item: `${SITE}/` },
          { name: p.breadcrumb, item: url },
        ]),
      ],
    },
  };
};

export const staticPages: PageSeo[] = [
  staticPage({
    path: '/about/',
    pageType: 'AboutPage',
    breadcrumb: 'About',
    lastmod: '2026-11-22',
    title: 'About DrawnOnwarD: a 10-person software agency for startup founders',
    description: 'Founded in 2024 by Ali Jone Merchant. Ten people, engineers averaging 8 years, based in Pakistan with engineers in the USA, Germany and Estonia. How we work, our stack and our pricing.',
    keywords: 'DrawnOnwarD, software agency Pakistan, startup software development team, senior engineers, MVP development agency about',
  }),
  staticPage({
    path: '/privacy/',
    breadcrumb: 'Privacy Policy',
    lastmod: '2026-11-22',
    priority: '0.3',
    title: 'Privacy Policy | DrawnOnwarD',
    description: 'What DrawnOnwarD collects when you contact us, how it is used, who else sees it, cookies, retention and your rights.',
    keywords: 'DrawnOnwarD privacy policy',
  }),
  staticPage({
    path: '/terms/',
    breadcrumb: 'Terms of Service',
    lastmod: '2026-11-22',
    priority: '0.3',
    title: 'Terms of Service | DrawnOnwarD',
    description: 'Terms for using drawnonward.org, and the project terms founders can rely on: fixed quote, milestone payments, weekly demos, full code and IP ownership.',
    keywords: 'DrawnOnwarD terms of service',
  }),
];

// Guides and case studies: Article with a named author and dates, tied to the organization
export const articlePage = (a: Article): PageSeo => {
  const base = a.kind === 'guide' ? 'guides' : 'work';
  const url = `${SITE}/${base}/${a.slug}/`;
  const title = `${a.title} | DrawnOnwarD`;
  return {
    path: `/${base}/${a.slug}/`,
    title,
    description: a.description,
    keywords: a.keywords,
    canonical: url,
    lastmod: a.dateModified,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: a.title,
          description: a.description,
          datePublished: a.datePublished,
          dateModified: a.dateModified,
          author: { '@id': FOUNDER_ID },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: { '@id': `${url}#webpage` },
          inLanguage: 'en',
          ...(a.client ? { about: { '@type': 'Organization', name: a.client.name, url: a.client.url } } : {}),
        },
        founderNode,
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: title,
          description: a.description,
          inLanguage: 'en',
          isPartOf: { '@id': WEBSITE_ID },
        },
        breadcrumbs([
          { name: 'Home', item: `${SITE}/` },
          { name: a.kind === 'guide' ? 'Guides' : 'Work', item: a.kind === 'guide' ? `${SITE}/#services` : `${SITE}/#projects` },
          { name: a.title, item: url },
        ]),
      ],
    },
  };
};

export interface PrerenderRoute {
  path: string;
  lastmod: string;
  priority?: string;
  meta: PageSeo | null; // null keeps the homepage head that index.html already carries
}

const toRoute = (page: PageSeo): PrerenderRoute => ({ path: page.path, lastmod: page.lastmod, priority: page.priority, meta: page });

// Every URL the build writes, the sitemap lists and IndexNow submits
export const prerenderRoutes: PrerenderRoute[] = [
  { path: '/', lastmod: '2026-11-23', meta: null },
  ...Object.values(seoTemplates).map(toRoute),
  ...staticPages.map(toRoute),
  ...guides.map((a) => toRoute(articlePage(a))),
  ...work.map((a) => toRoute(articlePage(a))),
];
