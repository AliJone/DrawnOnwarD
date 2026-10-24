
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedCursor from '@/components/AnimatedCursor';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import { ServiceItem, getServiceIcon } from '@/components/ServicesData';

// Portfolio data
const portfolioData = [
  {
    id: "asd1293uasdads1",
    title: "Premed.pk",
    imageUrl: "/images/premed.webp",
    type: "Website",
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
    title: "Nehjul Balagha",
    imageUrl: "/images/nehjul-balagha.webp",
    type: "Mobile Apps",
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

const Index = () => {
  useEffect(() => {
    // Set up scroll reveal
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };

    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen relative animate-in fade-in duration-500">
        <AnimatedCursor />
        <Navbar />
        <Hero />
        <About />
        <Services services={serviceData} />
        <Portfolio projects={portfolioData} />
        <Testimonials testimonials={testimonialData} />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
