
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LinkedIn, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  
  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'cookie') => {
    setPolicyType(type);
  };

  const handleClosePolicy = () => {
    setPolicyType(null);
  };

  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return {
          title: "Privacy Policy",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. Introduction</h3>
              <p className="mb-4">This Privacy Policy explains how DrawnOnwarD collects, uses, and discloses your information when you use our services. We are committed to protecting your privacy and personal data.</p>
              
              <h3 className="text-lg font-bold mb-4">2. Information We Collect</h3>
              <p className="mb-4">We collect information you provide directly, such as when you contact us, subscribe to our newsletter, or use our services. This may include names, email addresses, and other contact details. We also collect usage data when you visit our website.</p>
              
              <h3 className="text-lg font-bold mb-4">3. How We Use Your Information</h3>
              <p className="mb-4">We use your information to provide and improve our services, communicate with you, and comply with legal obligations. We may also use it for marketing purposes if you've given consent.</p>
              
              <h3 className="text-lg font-bold mb-4">4. Data Security</h3>
              <p className="mb-4">We implement appropriate security measures to protect your personal data against unauthorized access or disclosure.</p>
              
              <h3 className="text-lg font-bold mb-4">5. Contact Us</h3>
              <p className="mb-4">If you have questions about this Privacy Policy, please contact us at info@drawnonward.org.</p>
            </div>
          )
        };
      case 'terms':
        return {
          title: "Terms of Service",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. Acceptance of Terms</h3>
              <p className="mb-4">By accessing or using DrawnOnwarD's services, you agree to be bound by these Terms of Service.</p>
              
              <h3 className="text-lg font-bold mb-4">2. Use of Services</h3>
              <p className="mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that could damage or impair the operation of our services.</p>
              
              <h3 className="text-lg font-bold mb-4">3. Intellectual Property</h3>
              <p className="mb-4">All content, features, and functionality on our website are owned by DrawnOnwarD and are protected by copyright, trademark, and other intellectual property laws.</p>
              
              <h3 className="text-lg font-bold mb-4">4. Limitation of Liability</h3>
              <p className="mb-4">DrawnOnwarD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
              
              <h3 className="text-lg font-bold mb-4">5. Changes to Terms</h3>
              <p className="mb-4">We may revise these Terms from time to time. The most current version will always be posted on our website.</p>
            </div>
          )
        };
      case 'cookie':
        return {
          title: "Cookie Policy",
          content: (
            <div className="text-left">
              <h3 className="text-lg font-bold mb-4">1. What Are Cookies</h3>
              <p className="mb-4">Cookies are small text files that are stored on your device when you visit a website. They help to provide you with a better browsing experience.</p>
              
              <h3 className="text-lg font-bold mb-4">2. How We Use Cookies</h3>
              <p className="mb-4">We use cookies to understand how you use our website, to remember your preferences, and to improve your experience.</p>
              
              <h3 className="text-lg font-bold mb-4">3. Types of Cookies We Use</h3>
              <p className="mb-4">
                - Essential cookies: Required for the website to function properly<br/>
                - Preference cookies: Remember your settings and preferences<br/>
                - Analytics cookies: Help us understand how visitors interact with the website<br/>
                - Marketing cookies: Used to track visitors across websites
              </p>
              
              <h3 className="text-lg font-bold mb-4">4. Managing Cookies</h3>
              <p className="mb-4">Most web browsers allow you to control cookies through their settings. You can delete existing cookies and set your browser to prevent new cookies from being set.</p>
              
              <h3 className="text-lg font-bold mb-4">5. Changes to this Policy</h3>
              <p className="mb-4">We may update our Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices.</p>
            </div>
          )
        };
      default:
        return { title: "", content: null };
    }
  };

  const policyData = getPolicyContent();

  return (
    <footer className="bg-agency-dark py-12 relative">
      {/* Top Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-agency-purple to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-grotesk text-white mb-6">
              <span className="text-agency-purple">D</span>rawn
              <span className="text-agency-purple">O</span>nwar
              <span className="text-agency-purple">D</span>
            </h3>
            <p className="text-gray-400">
              Creating exceptional digital experiences that push the boundaries of innovation and creativity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['UI/UX Design', 'Web Development', 'Mobile Apps', 'Digital Strategy', 'Interactive Experiences'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-agency-purple transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-agency-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="http://linkedin.com/company/drawnonward/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-agency-purple transition-colors flex items-center gap-2"
              >
                <LinkedIn className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:info@drawnonward.org" className="hover:text-agency-purple transition-colors">
                info@drawnonward.org
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DrawnOnwarD. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <button 
              onClick={() => handleOpenPolicy('privacy')} 
              className="text-gray-500 hover:text-agency-purple transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => handleOpenPolicy('terms')} 
              className="text-gray-500 hover:text-agency-purple transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => handleOpenPolicy('cookie')} 
              className="text-gray-500 hover:text-agency-purple transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>

      {/* Policy Dialog */}
      <Dialog open={policyType !== null} onOpenChange={handleClosePolicy}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{policyData.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {policyData.content}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
