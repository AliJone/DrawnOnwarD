import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { seoTemplates } from '@/lib/seoTemplates';
import { getServiceIcon } from '@/components/ServicesData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaBand from '@/components/CtaBand';
import NotFound from '@/pages/NotFound';

// Service content mapping (copy unchanged; rewritten per the content plan later)
const serviceContent = {
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
    icon: 'Tech Leads for Hire',
    heading: 'Senior Technical Leadership, On Your Terms',
    description: 'Embed vetted senior engineers and team leads into your organisation on flexible engagements, without the overhead of a permanent hire.',
    benefits: [
      'Hand-picked senior engineers and team leads',
      'Flexible engagements from a few weeks to long-term',
      'Onboarded and productive within days, not months',
      'Seamless integration with your tools and workflows',
      'Scale your team up or down as priorities change'
    ],
    process: [
      'Requirements and skills assessment',
      'Candidate shortlist and interviews',
      'Onboarding and team integration',
      'Delivery with regular check-ins',
      'Scale, extend, or hand over as needed'
    ]
  },
  'seo': {
    title: 'Search Engine Optimization',
    icon: 'SEO',
    heading: 'Data-Driven SEO Strategies That Deliver Results',
    description: 'Comprehensive SEO services to improve your website\'s visibility, increase organic traffic, and boost conversions.',
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

type Slug = keyof typeof serviceContent;

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? serviceContent[serviceSlug as Slug] : undefined;
  const seo = serviceSlug ? seoTemplates[serviceSlug] : undefined;

  // The prerendered head already carries the title; this keeps it right after client-side navigation
  useEffect(() => {
    if (seo) document.title = seo.title;
  }, [seo]);

  if (!service || !seo) return <NotFound />;

  const others = (Object.entries(serviceContent) as [Slug, (typeof serviceContent)[Slug]][]).filter(([slug]) => slug !== serviceSlug);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-4xl px-4 pb-20 pt-32 md:px-8 md:pt-40">
        <a href="/#services" className="inline-flex items-center gap-2 text-sm font-medium text-brand-teal-ink hover:text-brand-navy">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All services
        </a>
        <div className="mt-6 text-brand-navy">{getServiceIcon(service.icon)}</div>
        <h1 className="display-heading mt-4 text-4xl md:text-6xl">{service.title}</h1>
        <span aria-hidden="true" className="teal-rule mt-5" />
        <h2 className="mt-8 text-2xl font-semibold text-brand-navy md:text-3xl">{service.heading}</h2>
        <p className="mt-6 text-lg leading-relaxed text-brand-ink/80 md:text-xl">{service.description}</p>

        <h3 className="mt-12 text-xl font-semibold text-brand-navy">Key benefits</h3>
        <ul className="mt-4 space-y-3">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-brand-ink">
              <Check className="mt-1 h-5 w-5 shrink-0 text-brand-teal-ink" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-xl font-semibold text-brand-navy">Our process</h3>
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
