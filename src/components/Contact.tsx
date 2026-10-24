
import React, { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ParallaxContainer from './ParallaxContainer';
import { Linkedin, Mail, Check } from 'lucide-react';

// Form backend (e.g. a Formspree URL) set at build time; see .env.example
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const CONTACT_EMAIL = 'info@drawnonward.org';

// The three most common objections, most common first
const promises = [
  'Fixed scope and quote before any work starts',
  'Weekly demos, so you see progress every week',
  'Senior engineers only. The people you meet are the people who build',
];

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // No endpoint configured: hand off to the visitor's mail client so no lead is lost
    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Project roadmap request from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      toast({
        title: "Request received!",
        description: "We'll send your project roadmap within one business day.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast({
        title: "Something went wrong",
        description: `Please email us directly at ${CONTACT_EMAIL}.`,
        variant: 'destructive',
      });
    } finally {
      setSending(false);
    }
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
            Tell us what you're building. You'll get a free project roadmap: scope, timeline and a budget range, within one business day.
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
                  <ul className="space-y-3">
                    {promises.map((promise) => (
                      <li key={promise} className="flex items-start gap-3 text-lg text-gray-300">
                        <Check className="w-6 h-6 mt-0.5 shrink-0 text-agency-neon" />
                        <span>{promise}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="reveal-on-scroll space-y-4" style={{ transitionDelay: '100ms' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-agency-purple/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-agency-purple" />
                    </div>
                    <a href="mailto:info@drawnonward.org" className="text-lg text-gray-300 hover:text-agency-purple transition-colors">
                      info@drawnonward.org
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
                    What are you building?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:border-agency-purple focus:outline-none"
                    placeholder="Tell us about your project, timeline and goals..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 px-6 bg-violet-600 text-white font-medium rounded-md hover:bg-violet-700 transition-colors disabled:opacity-60"
                >
                  {sending ? 'Sending...' : 'Get my free roadmap'}
                </button>
                <p className="text-center text-sm text-gray-500">
                  No commitment. We reply within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
