export interface PageSeo {
  path: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  lastmod: string;
  structuredData: Record<string, unknown>;
}

const SITE = 'https://drawnonward.org';

interface ServiceSeoInput {
  slug: string;
  name: string;
  serviceType: string;
  title: string;
  description: string;
  keywords: string;
  lastmod: string;
}

// One Service node per page, tied to the organization and website defined on the homepage
const servicePage = (s: ServiceSeoInput): PageSeo => {
  const url = `${SITE}/services/${s.slug}`;
  return {
    path: `/services/${s.slug}`,
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
          provider: { '@id': `${SITE}/#organization` },
          areaServed: 'Worldwide',
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: s.title,
          description: s.description,
          inLanguage: 'en',
          isPartOf: { '@id': `${SITE}/#website` },
          about: { '@id': `${SITE}/#service-${s.slug}` },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
            { '@type': 'ListItem', position: 3, name: s.name, item: url },
          ],
        },
      ],
    },
  };
};

// Keyed by URL slug so the lookup in ServiceDetailPage is the route parameter itself
export const seoTemplates: Record<string, PageSeo> = {
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
    lastmod: '2026-11-07',
    title: 'Hire Senior Developers and Tech Leads for Your Startup | DrawnOnwarD',
    description: 'Senior developers and tech leads embedded in your team on flexible terms (staff augmentation). Engineers averaging 8 years of experience, matched to your stack, priced per engagement.',
    keywords: 'hire senior developers, staff augmentation for startups, tech leads for hire, dedicated development team, hire a tech lead',
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

export interface PrerenderRoute {
  path: string;
  lastmod: string;
  meta: PageSeo | null; // null keeps the homepage head that index.html already carries
}

// Every URL the build writes, the sitemap lists and IndexNow submits
export const prerenderRoutes: PrerenderRoute[] = [
  { path: '/', lastmod: '2026-11-05', meta: null },
  ...Object.values(seoTemplates).map((page) => ({ path: page.path, lastmod: page.lastmod, meta: page })),
];
