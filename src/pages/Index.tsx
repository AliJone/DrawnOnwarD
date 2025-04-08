
import { useEffect, useState } from 'react';
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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Recruiting.png?alt=media&token=a493b218-9f87-4b82-8549-6d36a429c734",
    type: "Website",
    responsibility: [
      "Website Development",
      "UI/UX Design"
    ],
    description: "DrawnOnward took on the ambitious project of transforming PreMed.pk into the quintessential online hub for medical exam preparation. Recognizing the need for a centralized, accessible, and cost-effective educational resource, we reimagined the platform to cater to the aspirational needs of future healthcare professionals."
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Nehjul Balagha",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Freelance.png?alt=media&token=4f63167f-0efb-4c15-821d-500a81c9c4a6",
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
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Stream.png?alt=media&token=eb129e91-0f27-430d-afb8-2c8f964ab469",
    type: "Website",
    description: "Asaan Retail represents the pinnacle of inventory management, fulfillment, and accounting software for multi-channel commerce. It stands as a testament to DrawnOnward's commitment to simplifying complex business processes. This initiative reshapes how businesses manage their inventory, fulfill orders, and maintain financial stability in the ever-evolving world of commerce.",
    responsibility: [
      "Website Development",
      "UI/UX Design"
    ]
  },
  {
    id: "asd1293uvbvcbbd4",
    title: "Survey Kollect",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Kobo.png?alt=media&token=dcc672df-aede-43c7-8fc0-c8c11fbf3694",
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
    testimoni: "DrawnOnward's expertise elevated Asaan Retail's online presence with a stunning, efficient website that truly understands customer needs.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Saqlain.png?alt=media&token=8bce15eb-aa71-4a86-b9b4-23f9e9a6b8e8"
  },
  {
    name: "Fahd Niaz Shaikh",
    company: "Founder and CEO, Premed.pk",
    testimoni: "DrawnOnward transformed our vision into reality with exceptional skill, creating a user-friendly and innovative website for Premed.pk.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/drawnonward-d9cd9.appspot.com/o/Fahad.jpeg?alt=media&token=fd6e0eb2-4273-4ee4-932a-cdafb5d10e4e"
  }
];

// Service data with added icons
const serviceData: ServiceItem[] = [
  { title: "Web Development", icon: getServiceIcon("Web Development") },
  { title: "Mobile Development", icon: getServiceIcon("Mobile Development") },
  { title: "UI/UX Design", icon: getServiceIcon("UI/UX Design") },
  { title: "SEO", icon: getServiceIcon("SEO") },
  { title: "Real Estate Website", icon: getServiceIcon("Real Estate Website") },
  { title: "Tech Consulting", icon: getServiceIcon("Tech Consulting") }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Set initial loaded state
    setIsLoaded(true);

    // Initial check for elements in view
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen relative transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
  );
};

export default Index;
