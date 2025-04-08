
import React, { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ParallaxContainer from './ParallaxContainer';
import { Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-agency-purple to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-agency-pink/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-agency-purple/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
            Get in <span className="highlight-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-2xl">
            Ready to start your next digital project? Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ParallaxContainer speed={0.05}>
              <div className="space-y-8">
                <div className="reveal-on-scroll">
                  <h3 className="text-2xl font-grotesk font-bold mb-4 text-agency-purple">Let's Talk</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    We're ready to discuss your ideas and turn them into reality. Reach out to us using the form or through our contact details below.
                  </p>
                </div>
                
                <div className="reveal-on-scroll space-y-4" style={{ transitionDelay: '100ms' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-agency-purple/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-agency-purple" />
                    </div>
                    <a href="mailto:info@drawnOnward.org" className="text-lg text-gray-300 hover:text-agency-purple transition-colors">
                      info@drawnOnward.org
                    </a>
                  </div>
                </div>
                
                <div className="reveal-on-scroll pt-6" style={{ transitionDelay: '200ms' }}>
                  <h3 className="text-2xl font-grotesk font-bold mb-4 text-agency-pink">Follow Us</h3>
                  <div className="flex gap-4">
                    <a 
                      href="http://linkedin.com/company/drawnonward/"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-gray-300 hover:text-agency-purple transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-agency-purple/20 flex items-center justify-center text-white hover:bg-agency-purple transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </ParallaxContainer>
          </div>
          
          <div className="reveal-on-scroll">
            <form onSubmit={handleSubmit} className="neo-brutalist bg-white p-8 rounded-xl">
              <h3 className="text-2xl font-grotesk font-bold mb-6 text-agency-dark">Send us a message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-agency-purple focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-agency-purple focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-agency-purple focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-agency-purple text-white font-medium rounded-md hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
