
import React from 'react';
import { useParams } from 'react-router-dom';
import { seoTemplates } from '@/lib/seoTemplates';
import SEO from '@/components/SEO';

// Service content mapping
const serviceContent = {
  'web-development': {
    title: 'Custom Web Development',
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
  'real-estate-website': {
    title: 'Real Estate Website Development',
    heading: 'Specialized Solutions for Real Estate Professionals',
    description: 'Custom websites for real estate agencies, brokers, and property managers with advanced property listing features.',
    benefits: [
      'Integrated MLS and property listing capabilities',
      'Advanced search and filtering options',
      'Virtual tours and high-quality image galleries',
      'Lead generation and contact management',
      'Mobile-responsive designs for on-the-go access'
    ],
    process: [
      'Agency needs assessment',
      'Feature prioritization and planning',
      'Design and development',
      'MLS integration and data setup',
      'Launch and marketing support'
    ]
  },
  'seo': {
    title: 'Search Engine Optimization',
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

const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const seoKey = serviceSlug?.replace(/-/g, '') as keyof typeof seoTemplates;
  
  // If the service doesn't exist in our mapping, handle gracefully
  if (!serviceSlug || !serviceContent[serviceSlug as keyof typeof serviceContent]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  const service = serviceContent[serviceSlug as keyof typeof serviceContent];
  const seoData = seoTemplates[seoKey] || seoTemplates.webDevelopment;

  return (
    <>
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* H1 heading with primary keyword */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
        
        {/* H2 heading with secondary keywords */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">{service.heading}</h2>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed mb-8">{service.description}</p>
          
          {/* H3 headings for subsections */}
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul className="space-y-2 mb-8">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 text-primary">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold mb-4">Our Process</h3>
          <ol className="space-y-4 mb-8">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2 font-bold">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          
          {/* Call to action */}
          <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to discuss your project?</h3>
            <p className="mb-6">Contact us for a free consultation and let's bring your vision to life.</p>
            <a 
              href="#contact" 
              className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
