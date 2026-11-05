
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import StatsBand, { Stat } from '@/components/StatsBand';
import Services from '@/components/Services';
import WhyUs, { Reason } from '@/components/WhyUs';
import IdeaBand from '@/components/IdeaBand';
import Pricing, { PriceBand } from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio, { Project } from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import { ProofItem } from '@/components/ProofRow';
import { ServiceItem, getServiceIcon } from '@/components/ServicesData';

// Portfolio data
const portfolioData: Project[] = [
  {
    id: "asd1293uasdads1",
    title: "PreMed.PK",
    imageUrl: "/images/premed.webp",
    type: "Website",
    industry: "EdTech",
    url: "https://www.premed.pk/",
    result: "Used by 100,000+ students",
    responsibility: [
      "Website Development",
      "UI/UX Design"
    ],
    description: "DrawnOnward took on the ambitious project of transforming PreMed.pk into the quintessential online hub for medical exam preparation. Recognizing the need for a centralized, accessible, and cost-effective educational resource, we reimagined the platform to cater to the aspirational needs of future healthcare professionals."
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Nahj al-Balagha",
    imageUrl: "/images/nehjul-balagha.webp",
    type: "Mobile Apps",
    industry: "Mobile · Education",
    description: "Drawn Onward embarked on this heartfelt project to craft the Nahj Al-Balagha app, bringing the profound teachings of Imam Ali (a.s) into the modern digital realm. Leveraging the robust security of Firebase Auth and the seamless efficiency of Firebase Firestore, we've created an app that not only connects you to tradition but also ensures a reliable and user-friendly experience for accessing wisdom on the go.",
    responsibility: [
      "Mobile Development",
      "UI/UX Design"
    ]
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "Asaan Retail",
    imageUrl: "/images/asaan-retail.webp",
    type: "Website",
    industry: "Retail SaaS",
    url: "https://asaanretail.io/",
    description: "Asaan Retail represents the pinnacle of inventory management, fulfillment, and accounting software for multi-channel commerce. It stands as a testament to DrawnOnward's commitment to simplifying complex business processes. This initiative reshapes how businesses manage their inventory, fulfill orders, and maintain financial stability in the ever-evolving world of commerce.",
    responsibility: [
      "Website Development",
      "UI/UX Design"
    ]
  },
  {
    id: "asd1293uvbvcbbd4",
    title: "Survey Kollect",
    imageUrl: "/images/survey-kollect.webp",
    type: "Mobile Apps",
    industry: "Mobile · Field research",
    description: "Survey Kollect exemplifies state-of-the-art data collection and analysis, tailored for field researchers, organizations, and academic professionals. It offers robust tools for creating, distributing, and analyzing surveys with unparalleled ease and efficiency. This platform is designed to streamline complex survey processes, enabling users to gather insightful data from various demographics and geographical locations.",
    responsibility: [
      "Mobile Development",
      "UI/UX Design"
    ]
  }
];

// Testimonial data
const testimonialData = [
  {
    name: "Saqlain Raza",
    company: "Founder and CEO, Asaan Retail",
    companyUrl: "https://asaanretail.io/",
    linkedinUrl: "https://www.linkedin.com/in/saqlain-raza-bhimani/",
    testimoni: "DrawnOnward's expertise elevated Asaan Retail's online presence with a stunning, efficient website that truly understands customer needs.",
    imageUrl: "/images/saqlain.webp"
  },
  {
    name: "Fahd Niaz Shaikh",
    company: "Co-founder and CEO, PreMed.PK",
    companyUrl: "https://www.premed.pk/",
    linkedinUrl: "https://www.linkedin.com/in/fahd-niaz-shaikh/",
    testimoni: "DrawnOnward transformed our vision into reality with exceptional skill, creating a user-friendly and innovative website for Premed.pk.",
    imageUrl: "/images/fahad.webp"
  },
  {
    name: "Hasnain Mankani",
    company: "Co-founder, PreMed.PK",
    companyUrl: "https://www.premed.pk/",
    linkedinUrl: "https://www.linkedin.com/in/hasnain-mankani/",
    // TODO: draft wording. Get Hasnain's sign-off and a photo before deploying.
    testimoni: "DrawnOnward rebuilt PreMed.PK into a platform that now serves over 100,000 students. They understood what medical students actually needed and delivered it without drama."
  }
];

// Service data with added icons
const serviceData: ServiceItem[] = [
  { title: "Web Development", icon: getServiceIcon("Web Development") },
  { title: "Mobile Development", icon: getServiceIcon("Mobile Development") },
  { title: "UI/UX Design", icon: getServiceIcon("UI/UX Design") },
  { title: "SEO", icon: getServiceIcon("SEO") },
  { title: "Tech Leads for Hire", icon: getServiceIcon("Tech Leads for Hire") },
  { title: "Tech Consulting", icon: getServiceIcon("Tech Consulting") }
];

// Trust row under the hero CTAs: verifiable proof only (no ratings until we have them)
const proofItems: ProofItem[] = [
  { label: "100,000+ students use a platform we built", href: "#project-asd1293uasdads1" },
  { label: "3 founders on the record", href: "#testimonials" },
  { label: "Replies within one business day" },
];

// Owner-supplied figures (fact sheet, 5 Nov 2026)
const stats: Stat[] = [
  { value: "2024", label: "Founded" },
  { value: "8 yrs", label: "Average engineer experience" },
  { value: "10", label: "Core team members" },
  { value: "15", label: "Projects delivered" },
];

// Published bands; the fixed quote comes after the free roadmap
const priceBands: PriceBand[] = [
  {
    range: "$5k–15k",
    name: "Scoped build",
    fit: "One core workflow, a prototype that must go to production, or a focused web or mobile app.",
    includes: "Scoping roadmap, design, build, QA and deployment. Typically 4 to 6 weeks.",
  },
  {
    range: "$15k–40k",
    name: "B2B SaaS MVP",
    fit: "The first sellable version of a SaaS product.",
    includes: "Authentication, roles, billing, multi-tenant data, one integration and an admin view. Typically 8 to 12 weeks.",
  },
  {
    range: "$40k–80k",
    name: "Data or API platform",
    fit: "Products where the engine is the product.",
    includes: "Public API with auth and rate limits, data pipelines, dashboards and the SaaS layer around them. Typically 12 to 16 weeks.",
  },
];

// Each reason restates a promise the site already makes, in the founder's words
const reasons: Reason[] = [
  {
    problem: "I pitched to one team and got handed to another.",
    title: "The people you meet are the people who build",
    answer: "The engineers on your first call are the engineers who write your code. No hand-offs, no account manager in between.",
  },
  {
    problem: "A junior learned on my budget, then we paid again for the rewrite.",
    title: "Senior engineers only",
    answer: "Every engineer at DrawnOnwarD is senior. We are a team of ten and there is no bench of trainees to hand your product to.",
  },
  {
    problem: "The estimate grew every sprint.",
    title: "Fixed price, locked before code",
    answer: "Your free roadmap turns into a fixed scope and a fixed quote. The price is agreed before a line of code is written.",
  },
  {
    problem: "Silence for a month, then a surprise.",
    title: "Weekly demos",
    answer: "You see working software every week in a live demo, so course corrections happen early, while they are still cheap.",
  },
  {
    problem: "At the end I found out the agency owned the repo.",
    title: "You own 100% of the code and IP from day one",
    answer: "Code, designs and intellectual property belong to you from the first commit, not after the final invoice.",
  },
  {
    problem: "I waited a week to hear back about my own project.",
    title: "A reply within one business day",
    answer: "Every message gets an answer within one business day, starting with the first one you send us.",
  },
];

const ideaExamples = [
  "A B2B SaaS idea",
  "A Lovable or Bolt prototype that needs to go to production",
  "A team that needs a senior tech lead",
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero projects={portfolioData} proof={proofItems} />
        <About />
        <StatsBand stats={stats} />
        <Services services={serviceData} />
        <WhyUs reasons={reasons} />
        <Pricing bands={priceBands} />
        <IdeaBand examples={ideaExamples} />
        <Portfolio projects={portfolioData} />
        <Testimonials testimonials={testimonialData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
