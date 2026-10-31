
import React from 'react';
import { Globe, Smartphone, Palette, Search, Users, Briefcase } from 'lucide-react';

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
    "Tech Leads for Hire": <Users className="h-6 w-6" />,
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
    "Tech Leads for Hire": "Senior developers and tech leads embedded in your team on flexible terms: staff augmentation that lifts delivery from day one.",
    "Tech Consulting": "Expert guidance on technology strategy, digital transformation, and innovative solutions for business growth."
  };

  return descriptions[title] || "Innovative digital solutions tailored to your specific business needs.";
};

// The founder problem each service answers, in the buyer's words
export const getServiceProblem = (title: string): string => {
  const problems: Record<string, string> = {
    "Web Development": "I need a web product customers can sign up for and pay in, not another brochure site.",
    "Mobile Development": "My users live on their phones and the web app alone is not enough.",
    "UI/UX Design": "People try the product once and never come back.",
    "SEO": "The product is good, but nobody finds it on Google.",
    "Tech Leads for Hire": "My team needs a senior tech lead now, and hiring one takes months.",
    "Tech Consulting": "I have to pick a stack and an architecture, and a wrong call gets expensive fast."
  };

  return problems[title] || "I need a technology partner who understands my business.";
};
