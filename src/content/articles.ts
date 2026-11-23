export interface ArticleSection {
  heading?: string;
  paragraphs?: string[]; // [text](url) renders as a link
  bullets?: string[];
}

export interface Article {
  slug: string;
  kind: 'guide' | 'work';
  title: string; // H1 and <title> (site name appended)
  description: string; // meta description, 150–160 characters
  keywords: string;
  datePublished: string;
  dateModified: string;
  client?: { name: string; url: string }; // case studies only
  sections: ArticleSection[];
}

// Filled from the content plan (pillars, hubs, spokes) from Day 5 onward
export const guides: Article[] = [];

// Case studies; every number comes from the client or the owner, no superlatives
export const work: Article[] = [
  {
    slug: 'asaan-retail',
    kind: 'work',
    title: 'Asaan Retail website rebuild: 20+ organic leads a month',
    description:
      'Asaan Retail\'s old site produced almost no leads. DrawnOnwarD rebuilt it in Next.js with new design, SEO and a CRM-linked form. Now 20+ organic leads a month.',
    keywords: 'Asaan Retail case study, B2B SaaS website redesign, website rebuild lead generation, technical SEO case study, Next.js website rebuild, DrawnOnwarD work',
    datePublished: '2026-11-23',
    dateModified: '2026-11-23',
    client: { name: 'Asaan Retail', url: 'https://asaanretail.io/' },
    sections: [
      {
        heading: 'At a glance',
        bullets: [
          'Client: [Asaan Retail](https://asaanretail.io/), inventory, order fulfilment and accounting software for retailers selling across several channels',
          'Launched July 2024, announced by Asaan Retail in a [LinkedIn post](https://www.linkedin.com/posts/asaanretail_asaanretail-drawnonward-websitedevelopment-activity-7214894291360370688-0nn6) naming DrawnOnwarD as its web development partner; SEO, tracking and conversion work continued after launch',
          'Founder and CEO: [Saqlain Raza](https://www.linkedin.com/in/saqlain-raza-bhimani/). DrawnOnwarD\'s first client',
          'Scope: UI/UX redesign, website rebuild in Next.js with server-side rendering, performance, technical SEO, analytics, a lead form connected to the sales CRM',
          'Before: almost no leads from the website. After: 20+ organic leads a month, consistently, and 50+ leads from ads in the month after launch',
          'Asaan Retail is the first result on Google and Bing for its name',
        ],
      },
      {
        heading: 'The client',
        paragraphs: [
          'Asaan Retail makes software that lets a retailer run inventory, order fulfilment and accounting from one place across online marketplaces, its own store and physical shops. Its buyers are business owners deciding whether to trust their stock and their books to new software, so the website has to earn that trust before a salesperson ever speaks to them.',
          'Saqlain Raza, the founder and CEO, was DrawnOnwarD\'s first client. He took a risk on a new agency, and the result below is the reason we still put his site first when founders ask what we have done.',
        ],
      },
      {
        heading: 'The problem',
        paragraphs: [
          'The existing website was built on WordPress. It looked dated, worked poorly on phones, and its search fundamentals were weak: no canonical tags, an inconsistent heading structure and pages that search engines indexed unreliably. The number of leads it produced was close to zero. Sales depended on outbound effort, and the site persuaded almost nobody who found it.',
        ],
      },
      {
        heading: 'What we did',
        paragraphs: [
          'The brief was a website that is found, loads fast, and asks for the sale. We worked through it in six parts.',
        ],
        bullets: [
          'Design: we redesigned the interface and the user journey around the buyer, a retailer comparing systems, and made every page fully responsive on mobile and desktop.',
          'Conversion: calls to action sit where a reader is ready to act, at the end of each product argument and on every pricing and feature page, not only in the header. Demo requests and sign-ups are one click from any screen.',
          'Speed: we rebuilt the site in Next.js with server-side rendering and optimised assets, so pages render fast on the first request and search engines receive the full content rather than an empty shell to execute.',
          'Technical SEO: canonical tags on every page, a correct heading hierarchy, page titles and descriptions written for the queries buyers use, and indexing verified in Google Search Console and Bing Webmaster Tools.',
          'Measurement: analytics that show where each visitor came from and where they left, so the team can see which pages convert and which lose people.',
          'Lead handling: form submissions flow straight into the sales team\'s CRM, so every lead gets a call instead of waiting in an inbox.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'From almost no website leads to 20+ organic leads a month, sustained month after month within a few months of launch',
          '50+ leads from paid ads in the month after launch, landing on the new pages',
          'First result on Google and Bing for the Asaan Retail name',
          'Every website lead reaches the sales team\'s CRM automatically',
        ],
      },
      {
        heading: 'What the founder says',
        paragraphs: [
          '"DrawnOnwarD\'s expertise elevated Asaan Retail\'s online presence with a stunning, efficient website that truly understands customer needs." Saqlain Raza, Founder and CEO, Asaan Retail ([LinkedIn](https://www.linkedin.com/in/saqlain-raza-bhimani/)).',
        ],
      },
      {
        heading: 'In Asaan Retail\'s words',
        paragraphs: [
          'When the site launched in July 2024, Asaan Retail posted on its company page: "We would like to extend a heartfelt thank you to DrawnOnwarD for their exceptional work as our Web Development Partner. Their expertise and dedication have been instrumental in creating our new, sleeker, and user-friendly website." [Read the post on LinkedIn](https://www.linkedin.com/posts/asaanretail_asaanretail-drawnonward-websitedevelopment-activity-7214894291360370688-0nn6).',
        ],
      },
      {
        heading: 'Why this matters for your startup',
        paragraphs: [
          'A B2B SaaS website is part of the product: it has to load fast, be found for the right queries and ask for the sale. The same team does this work as part of [MVP builds](/services/mvp-development/) and as a standalone [SEO engagement](/services/seo/). Ask for a free roadmap and we will tell you, within one business day, what your site is missing and what it would cost to fix.',
        ],
      },
    ],
  },
];
