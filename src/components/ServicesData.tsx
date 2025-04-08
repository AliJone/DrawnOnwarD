
import React from 'react';
import { Globe, Smartphone, Palette, Search, Home, Briefcase } from 'lucide-react';

// Types for the service data
export interface ServiceItem {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  imageUrl?: string;
}

// Get icon based on service title
export const getServiceIcon = (title: string): React.ReactNode => {
  const icons: Record<string, React.ReactNode> = {
    "Web Development": <Globe className="h-6 w-6" />,
    "Mobile Development": <Smartphone className="h-6 w-6" />,
    "UI/UX Design": <Palette className="h-6 w-6" />,
    "SEO": <Search className="h-6 w-6" />,
    "Real Estate Website": <Home className="h-6 w-6" />,
    "Tech Consulting": <Briefcase className="h-6 w-6" />
  };
  
  return icons[title] || <Globe className="h-6 w-6" />;
};

// Default descriptions for services if not provided
export const getServiceDescription = (title: string): string => {
  const descriptions: Record<string, string> = {
    "Web Development": "Custom, responsive websites and web applications that deliver exceptional user experiences across all devices.",
    "Mobile Development": "Native and cross-platform mobile apps that engage users and drive business growth on iOS and Android.",
    "UI/UX Design": "Beautiful, intuitive interfaces and user experiences that delight customers and increase conversions.",
    "SEO": "Data-driven search engine optimization strategies that improve your visibility and drive organic traffic.",
    "Real Estate Website": "Specialized web solutions for real estate businesses with property listings, virtual tours, and lead generation.",
    "Tech Consulting": "Expert guidance on technology strategy, digital transformation, and innovative solutions for business growth."
  };
  
  return descriptions[title] || "Innovative digital solutions tailored to your specific business needs.";
};
