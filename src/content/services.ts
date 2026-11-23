export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
  companyUrl: string;
}

export interface ServiceTable {
  columns: string[]; // first column is the row label
  rows: string[][];
  note?: string;
}

export interface ServiceSection {
  heading: string;
  paragraphs?: string[]; // [text](url) renders as a link
  bullets?: string[];
  table?: ServiceTable;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceFact {
  value: string;
  label: string;
}

export interface ServiceContent {
  title: string; // service name, used in lists and breadcrumbs
  h1?: string; // buyer-wording heading when it differs from the service name
  icon: string;
  heading: string;
  description: string;
  facts?: ServiceFact[];
  intro?: string[];
  benefitsHeading?: string;
  benefits: string[];
  processHeading?: string;
  process: string[];
  sections?: ServiceSection[];
  testimonial?: ServiceTestimonial;
  faqs?: ServiceFaq[];
  caseStudy?: { label: string; href: string };
}

const SOURCES_CHECKED = 'Rates checked 23 November 2026.';

// Content per URL slug. Rewritten hubs carry facts, sections and FAQs; the others keep their original copy until their turn in the content plan.
export const serviceContent: Record<string, ServiceContent> = {
  'mvp-development': {
    title: 'MVP Development',
    h1: 'MVP Development Services for Pre-Seed Startups',
    icon: 'MVP Development',
    heading: 'Your B2B SaaS MVP, built by senior engineers in 8 to 12 weeks for a fixed quote',
    description:
      'DrawnOnwarD is a 10-person software agency in Karachi, Pakistan that builds B2B SaaS MVPs for pre-seed founders. A typical MVP takes 8 to 12 weeks and costs $15,000 to $40,000, fixed after a free scoping roadmap. A senior tech lead, a full-stack engineer, a product designer and a QA engineer build it, and you see working software in a live demo every week.',
    facts: [
      { value: '8–12 wks', label: 'B2B SaaS MVP timeline' },
      { value: '$15k–40k', label: 'Fixed quote, before code' },
      { value: '4 people', label: 'Tech lead, engineer, designer, QA' },
      { value: '100%', label: 'Code and IP yours from day one' },
    ],
    intro: [
      'Pre-seed money has to buy a product customers can pay for, not a prototype that needs rebuilding. That is the brief we build to: a sellable first version with authentication, roles, billing, multi-tenant data, one integration and an admin view, on a stack a future in-house team can take over without a rewrite.',
      'Proof you can check: [PreMed.PK](https://www.premed.pk/), an exam-preparation platform we designed and built, is used by more than 100,000 students. [Asaan Retail](https://asaanretail.io/), a retail SaaS company, asked us to rebuild a website that produced almost no leads; within months it was producing 20+ organic leads a month and 50+ from ads, and it now ranks first on Google and Bing for its name. [Read the Asaan Retail case study](/work/asaan-retail/).',
    ],
    benefitsHeading: 'What you get',
    benefits: [
      'A fixed quote before any code is written, based on a free scoping roadmap delivered within one business day',
      'A senior tech lead, a full-stack engineer, a product designer and a QA engineer on your MVP; DevOps and a certified project manager are shared across projects',
      'A live demo of working software every week, and payment by milestone after you have seen the work',
      'Repository access from the first commit: you own 100% of the code, designs and IP',
      'A stack an in-house team can hire for and take over: Next.js, Nuxt, React or Vue on Node.js, Go or .NET; React Native or Flutter for mobile',
      'NDA on request. We never ask for equity.',
    ],
    processHeading: 'How an MVP build runs',
    process: [
      'Roadmap, free, within one business day: you describe the product; we return scope, timeline and a budget range you can take to your co-founder or investors.',
      'Scoping: user flows, data model, integrations and the cut line for version one. The fixed quote and the milestones are agreed here.',
      'Design: a clickable prototype of every screen in the MVP, approved by you before engineering starts.',
      'Build: milestone by milestone, with a live demo every week and QA from the first milestone, so course corrections happen while they are cheap.',
      'Launch: production deployment, monitoring, documentation and a handover session. The repository has been yours all along.',
      'After launch: a support arrangement if you want one, or a clean handover to your own team.',
    ],
    sections: [
      {
        heading: 'What $15k, $30k and $50k buy',
        paragraphs: [
          'These are the published bands from our [pricing section](/#pricing), shown as what each price typically includes. Your quote is fixed after the roadmap; if scope changes mid-build, we quote the change before building it, so the price never grows quietly.',
        ],
        table: {
          columns: ['', '$15,000', '$30,000', '$50,000'],
          rows: [
            ['Band', 'Top of Scoped build ($5k–15k)', 'B2B SaaS MVP ($15k–40k)', 'Data or API platform ($40k–80k)'],
            ['Timeline', '4 to 6 weeks', '8 to 12 weeks', '12 to 16 weeks'],
            ['Users and access', 'Sign-up, login, one user role', 'Sign-up, login, roles and permissions, team workspaces on multi-tenant data', 'Everything at $30k, plus API keys and, where needed, SSO'],
            ['Core product', 'One core workflow, end to end, ready for real users', 'The first sellable version: your core workflows, subscription billing, one third-party integration, an admin view', 'A public API with authentication and rate limits, data pipelines, dashboards and the SaaS layer around them'],
            ['Design', 'Responsive web app in your branding', 'Full product design with a clickable prototype before build', 'Full product design with a clickable prototype before build'],
            ['Quality and operations', 'QA on the core flow, production deployment', 'QA on every milestone, staging and production environments, monitoring', 'QA on every milestone, staging and production, monitoring and alerting'],
            ['Not included', 'Billing, multi-tenancy, integrations', 'Native mobile apps, more than one integration, custom data pipelines', 'Native mobile apps (quoted separately)'],
          ],
          note: 'Every project is quoted individually after the roadmap. A Lovable, Bolt or v0 prototype that needs to go to production usually falls in the Scoped build band.',
        },
      },
      {
        heading: 'Agency, tech lead, freelancer, full-time hire or fractional CTO?',
        paragraphs: [
          'At pre-seed, one US senior salary is most of a round. The honest comparison is not price alone but who carries delivery when something goes wrong.',
        ],
        table: {
          columns: ['Option', 'Typical cost', 'Time to start', 'Who owns delivery', 'Fits when'],
          rows: [
            ['MVP agency (DrawnOnwarD)', '$15k–40k fixed for a B2B SaaS MVP', 'Roadmap in one business day; build starts after scoping', 'We do: fixed scope, fixed price, weekly demos', 'You need a whole product shipped and nobody technical to run a team'],
            ['Tech lead for hire (DrawnOnwarD)', 'Monthly rate per engineer, quoted per engagement', 'Shortlist within 5 business days', 'You do: the engineer works inside your team', 'You have a team or a plan and need senior hands on it'],
            ['Freelancer', '$15–110+ an hour on Arc; Lemon.io reports senior full-stack developers earning $40–54 an hour before its margin', 'Days to weeks', 'You do, including when they leave', 'One well-defined piece of work and someone to review it'],
            ['Full-time senior engineer (US)', '$135,980 median salary (US Bureau of Labor Statistics, May 2025), before benefits, equity and recruiting', 'Weeks to months to hire', 'They do, once hired; a wrong hire is your cost', 'You have 12+ months of runway for the role and paying customers'],
            ['Fractional CTO', '$4,000–10,000 a month advisory (10–15 hours); $10,000–25,000 active (20–40 hours), per A.Team, June 2026', 'Days', 'Advises; someone else still builds', 'You have engineers and need technical leadership, not more code'],
          ],
        },
        bullets: [
          'Sources: [Arc pricing](https://arc.dev/pricing?type=freelance), [Lemon.io full-stack developer rates, Q3 2026](https://lemon.io/rate-calculator/full-stack-developers/), [BLS Occupational Outlook: software developers](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm), [A.Team: fractional CTO rates](https://www.a.team/talent/guides/fractional-cto-rates). ' + SOURCES_CHECKED,
          'Need the second option? See [Tech Leads for Hire](/services/tech-leads-for-hire/).',
        ],
      },
      {
        heading: 'You own the code, the repository and the IP from day one',
        paragraphs: [
          'You have access to the repository from day one and own 100% of the code, designs and intellectual property from the first commit, not after the final invoice. If you prefer, the repository lives in your own GitHub organisation and our engineers work in it as collaborators, so removing our access takes one click and nothing breaks.',
          'Payment is by milestone, after you have seen that milestone working in a live demo. Milestones and dates are agreed with the fixed quote. NDA on request. We take no equity and ask for none.',
        ],
      },
      {
        heading: 'Already have a prototype?',
        paragraphs: [
          'If you have a Lovable, Bolt or v0 prototype, or a half-built MVP from another team, the roadmap starts with an audit of the code and the accounts: repository, hosting, domains, secrets. We then quote finishing it or rebuilding it and tell you which is cheaper. Taking a prototype to production usually means authentication done properly, row-level security on the database, secrets out of the client, CI/CD, monitoring and backups, and it usually fits the Scoped build band.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does MVP development cost?',
        answer: 'At DrawnOnwarD, a B2B SaaS MVP costs $15,000 to $40,000. A scoped build of one core workflow costs $5,000 to $15,000, and a data or API platform $40,000 to $80,000. The number is fixed in a quote before any code is written.',
      },
      {
        question: 'How long does it take to build an MVP?',
        answer: '8 to 12 weeks for a B2B SaaS MVP, 4 to 6 weeks for a scoped build, and 12 to 16 weeks for a data or API platform. The scope agreed in the roadmap sets the timeline, and you see progress in a live demo every week.',
      },
      {
        question: 'What is in the free roadmap?',
        answer: 'Scope (what version one does and does not do), a timeline, a budget range and the stack we recommend, within one business day of your message. It is yours to keep, and to take to other agencies if you want to compare.',
      },
      {
        question: 'Who exactly works on my MVP?',
        answer: 'A senior tech lead, a full-stack engineer, a product designer and a QA engineer, with DevOps and a certified project manager shared across projects. The engineers on your first call are the engineers who build; there are no juniors and no hand-offs.',
      },
      {
        question: 'Do I own the code?',
        answer: 'Yes. 100% of the code, designs and IP from the first commit, with repository access from day one. NDA on request, and no equity.',
      },
      {
        question: 'What stack do you use?',
        answer: 'Next.js, Nuxt, React or Vue on Node.js, Go or .NET for web; React Native or Flutter for mobile. We pick the stack an in-house team can hire for and take over without a rewrite.',
      },
      {
        question: 'Can you take over a prototype or a half-built MVP?',
        answer: 'Yes. We audit the code and the accounts (repository, hosting, domains, secrets) first, then quote either finishing it or rebuilding it, and we tell you which is cheaper.',
      },
      {
        question: 'How do payments and changes work?',
        answer: 'You pay by milestone, after a live demo of the work in that milestone. Changes to the agreed scope are quoted before they are built, so the fixed price never grows silently; small adjustments inside the scope are part of the build.',
      },
    ],
  },
  'web-development': {
    title: 'Custom Web Development',
    icon: 'Web Development',
    heading: 'Enterprise-Grade Web Development Solutions',
    description: 'Our expert team creates scalable, high-performance web applications using modern technologies and frameworks.',
    benefits: [
      'Responsive designs that work on all devices',
      'Performance-optimized code for fast loading times',
      'Scalable architecture that grows with your business',
      'Secure development practices to protect your data',
      'SEO-friendly structure for better visibility'
    ],
    process: [
      'Discovery and requirements gathering',
      'UI/UX design and prototyping',
      'Development and testing',
      'Deployment and launch',
      'Ongoing support and maintenance'
    ]
  },
  'mobile-development': {
    title: 'Mobile App Development',
    icon: 'Mobile Development',
    heading: 'Native & Cross-Platform Mobile Applications',
    description: 'We build intuitive, feature-rich mobile applications for iOS and Android that engage users and drive business growth.',
    benefits: [
      'Native performance on iOS and Android platforms',
      'Cross-platform solutions for cost efficiency',
      'Engaging user interfaces that drive retention',
      'Integration with device features and APIs',
      'Ongoing maintenance and version updates'
    ],
    process: [
      'Concept and strategy development',
      'UX/UI design and prototyping',
      'Core development and feature implementation',
      'Testing across devices and platforms',
      'App store submission and optimization'
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    icon: 'UI/UX Design',
    heading: 'User-Centered Design That Converts',
    description: 'Our design team creates intuitive, beautiful interfaces that enhance user experience and drive conversions.',
    benefits: [
      'Improved user satisfaction and engagement',
      'Higher conversion rates through optimized flows',
      'Consistent branding across all touchpoints',
      'Accessible designs that work for all users',
      'Data-driven design decisions'
    ],
    process: [
      'User research and personas',
      'Information architecture',
      'Wireframing and prototyping',
      'Visual design and branding',
      'Usability testing and refinement'
    ]
  },
  'tech-leads-for-hire': {
    title: 'Tech Leads for Hire',
    h1: 'Hire Senior Developers and Tech Leads for Your Startup',
    icon: 'Tech Leads for Hire',
    heading: 'Staff augmentation for startups: senior engineers from our team, embedded in yours',
    description:
      'DrawnOnwarD places senior developers and tech leads inside startup engineering teams. Our engineers have 4 to 9 years of experience and average 8; tech leads have 7 or more. You get a shortlist within 5 business days, and the engineer is live with your team from 7 pm to midnight Pakistan time, which covers US Eastern mornings and European afternoons. Part-time or full-time, month to month, priced per engagement.',
    facts: [
      { value: '8 yrs', label: 'Average engineer experience' },
      { value: '5 days', label: 'Business days to a shortlist' },
      { value: '5 hrs', label: 'Daily live overlap with US Eastern' },
      { value: 'Monthly', label: 'Month to month, no placement fee' },
    ],
    intro: [
      'Hiring a senior engineer in the US takes months and costs a median $135,980 a year in salary alone ([US Bureau of Labor Statistics](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm), May 2025). Marketplaces are faster, but you vet, manage and replace the freelancer yourself. Tech Leads for Hire sits between the two: a vetted senior engineer or tech lead from our own team, working inside yours, with us accountable for the fit.',
    ],
    benefitsHeading: 'What you get',
    benefits: [
      'Engineers from our own 10-person team, not a marketplace: 4 to 9 years of experience, 8 on average; tech leads with 7 years or more',
      'A shortlist within 5 business days, interviews with you, and a start within two weeks of your decision',
      'Part-time (20 hours a week) or full-time (40 hours a week), month to month; change hours or stop with two weeks\' notice',
      'Live with your team 7 pm to midnight Pakistan time (US Eastern mornings, European afternoons), asynchronous in your tools the rest of the day',
      'Replacement guarantee: if the engineer is not the right fit in the first two weeks, we replace them at no charge',
      'One monthly invoice per engineer, quoted per engagement. No subscription, no placement fee',
      'Your repository, your tools, your process. NDA on request',
    ],
    processHeading: 'How a placement runs',
    process: [
      'Tell us the role: stack, seniority, hours, and what the first 90 days must deliver.',
      'Shortlist within 5 business days: one to three engineers from our team, with relevant work you can see and a monthly rate.',
      'You interview and choose. The engineer starts within two weeks of your decision.',
      'Onboarding week: access, codebase walkthrough, first ticket shipped.',
      'Monthly check-in with you on scope and fit. Extend, change hours, or hand over with two weeks\' notice.',
    ],
    sections: [
      {
        heading: 'Should you just hire one senior engineer instead of an agency?',
        paragraphs: [
          'Often, yes, and that is what this service is: one senior engineer embedded in your team, with no project manager in between and no agency overhead. If you already have a technical co-founder or a lead who can direct the work, a tech lead for hire is usually the cheaper and faster option, and the roadmap will say so.',
          'Choose an [MVP build](/services/mvp-development/) instead when nobody on your side can manage engineering day to day, when you need design, QA and DevOps as well as code, or when you want a fixed price for a fixed scope. One engineer cannot be a product designer, a QA engineer and a DevOps engineer at once; a four-person MVP team can.',
          'Choose a full-time hire when you have 12 months of runway for the salary, the product has paying customers, and you want someone whose equity is in your company. Teams often start with a tech lead for hire and recruit their own lead once the product has revenue; we hand over cleanly when that happens.',
        ],
      },
      {
        heading: 'Rates compared: Toptal, Lemon.io, Arc and DrawnOnwarD',
        paragraphs: [
          'We do not publish an hourly rate because engagements are priced per role and hours. The roadmap includes the monthly figure, so you can compare it with these before any call.',
        ],
        table: {
          columns: ['', 'Published rate', 'Fees', 'Who vets, who manages'],
          rows: [
            ['Toptal', 'Not published', '$79 a month client subscription (Toptal FAQ)', 'Toptal screens; you manage'],
            ['Lemon.io', 'Developer pay of $40–54 an hour for senior full-stack (Lemon.io rate calculator, Q3 2026); the client price is quoted separately', 'Not published on its rate pages', 'Lemon.io vets; you manage'],
            ['Arc', '$15–110+ an hour for freelance hires (Arc pricing page)', '20% of annual salary for a full-time hire', 'Arc vets; you manage'],
            ['DrawnOnwarD', 'Monthly rate per engineer, quoted within one business day', 'None beyond the monthly rate', 'We vet from our own team and stay accountable for the fit; you direct the work'],
          ],
        },
        bullets: [
          'Sources: [Toptal FAQ](https://www.toptal.com/faq), [Lemon.io full-stack developer rates](https://lemon.io/rate-calculator/full-stack-developers/), [Arc pricing](https://arc.dev/pricing?type=freelance). ' + SOURCES_CHECKED,
        ],
      },
      {
        heading: 'What a tech lead for hire does in your team',
        bullets: [
          'Owns architecture and code review for their area, and ships code themselves: this is a hands-on role, not an advisory one',
          'Turns founder priorities into tickets, estimates and a weekly plan',
          'Mentors your junior and mid-level developers',
          'Sets up or fixes CI/CD, environments, monitoring and release discipline',
          'Reports to you or your CTO, in your tools',
        ],
      },
      {
        heading: 'Stacks we place engineers in',
        paragraphs: [
          'Node.js, Next.js, Nuxt, React, Vue, Go, .NET, React Native, Flutter, cloud infrastructure and CI/CD. If your stack is not on this list, say so in the first message and we will tell you quickly whether we have the right person.',
        ],
      },
    ],
    testimonial: {
      quote: 'We recently hired technical leads through DrawnOnwarD, and the experience has been exceptional. Their leads seamlessly integrated into our company culture right from the start. They brought excellent technical knowledge to the table and consistently demonstrated a willingness to go above and beyond what was expected. A special shoutout to Jone and Hamza, who worked directly with us. Their dedication and expertise were invaluable to our project\'s success. Highly recommend DrawnOnwarD for anyone looking for top-tier tech talent!',
      name: 'Zain',
      role: 'CEO, SayHisaab',
      companyUrl: 'https://sayhisaab.com/',
    },
    faqs: [
      {
        question: 'What is staff augmentation?',
        answer: 'Adding engineers from an outside company to your own team, under your direction, for as long as you need them. You get the capacity without recruiting, and without handing the project to an agency.',
      },
      {
        question: 'How senior are the engineers?',
        answer: '4 to 9 years of professional experience, 8 on average; tech leads have 7 or more. They are members of our team with work you can see, not profiles from a marketplace.',
      },
      {
        question: 'How fast can someone start?',
        answer: 'A shortlist within 5 business days of your brief, and a start within two weeks of your decision.',
      },
      {
        question: 'What hours will they work?',
        answer: 'Part-time is 20 hours a week, full-time 40. Every engagement includes live overlap from 7 pm to midnight Pakistan time (US Eastern mornings, European afternoons); the rest is asynchronous in your tools.',
      },
      {
        question: 'How much does it cost?',
        answer: 'A monthly rate per engineer, set by role and hours and quoted per engagement within one business day. There is no subscription and no placement fee.',
      },
      {
        question: 'What if it is not working out?',
        answer: 'Tell us within the first two weeks and we replace the engineer at no charge. After that, change hours or end the engagement with two weeks\' notice.',
      },
      {
        question: 'Who owns the work?',
        answer: 'You do. The engineer works in your repository and your tools, and everything they produce is yours. NDA on request.',
      },
      {
        question: 'Is this cheaper than an agency build?',
        answer: 'For ongoing work inside an existing team, yes: you pay for one engineer, not a project team. For a fixed-scope product with nobody to manage it, an MVP build at a fixed price is usually cheaper overall. The roadmap says which fits.',
      },
    ],
  },
  'seo': {
    title: 'Search Engine Optimization',
    icon: 'SEO',
    heading: 'Data-Driven SEO Strategies That Deliver Results',
    description: 'Comprehensive SEO services to improve your website\'s visibility, increase organic traffic, and boost conversions.',
    caseStudy: { label: 'How Asaan Retail went from almost no website leads to 20+ organic leads a month', href: '/work/asaan-retail/' },
    benefits: [
      'Higher rankings in search engine results',
      'Increased organic traffic to your website',
      'Better qualified leads and conversions',
      'Improved user experience and engagement',
      'Long-term sustainable growth'
    ],
    process: [
      'Technical SEO audit',
      'Keyword research and strategy',
      'On-page optimization',
      'Content development and optimization',
      'Link building and off-page SEO'
    ]
  },
  'tech-consulting': {
    title: 'Technology Consulting',
    icon: 'Tech Consulting',
    heading: 'Strategic Technology Guidance for Business Growth',
    description: 'Expert advice to help businesses make informed technology decisions, optimize processes, and implement the right solutions.',
    benefits: [
      'Optimized technology stack and processes',
      'Reduced costs through efficient solutions',
      'Scalable architecture that supports growth',
      'Competitive advantage through innovation',
      'Risk mitigation and security improvements'
    ],
    process: [
      'Technology assessment and discovery',
      'Strategy development and roadmapping',
      'Solution architecture and design',
      'Implementation support and guidance',
      'Performance monitoring and optimization'
    ]
  }
};
