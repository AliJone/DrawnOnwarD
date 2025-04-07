
import React, { useEffect } from 'react';
import ParallaxContainer from './ParallaxContainer';

const About: React.FC = () => {
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
    <section id="about" className="py-20 md:py-32 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-80 h-80 bg-agency-purple/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-agency-pink/10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-grotesk mb-4">
            About <span className="highlight-text">DrawnOnwarD</span>
          </h2>
          <p className="text-xl text-gray-400 text-center max-w-2xl">
            We're a team of creative technologists pushing the boundaries of digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ParallaxContainer speed={0.08} direction="vertical" className="order-2 lg:order-1">
            <div className="glass-panel p-8 relative">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-agency-purple rounded-md"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-agency-pink rounded-full"></div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="neo-brutalist bg-white text-agency-dark p-6 rounded-md">
                  <h3 className="font-grotesk text-3xl font-bold mb-1">10+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="neo-brutalist bg-white text-agency-dark p-6 rounded-md">
                  <h3 className="font-grotesk text-3xl font-bold mb-1">150+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="neo-brutalist bg-white text-agency-dark p-6 rounded-md">
                  <h3 className="font-grotesk text-3xl font-bold mb-1">40+</h3>
                  <p>Team Members</p>
                </div>
                <div className="neo-brutalist bg-white text-agency-dark p-6 rounded-md">
                  <h3 className="font-grotesk text-3xl font-bold mb-1">12</h3>
                  <p>Design Awards</p>
                </div>
              </div>
            </div>
          </ParallaxContainer>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="reveal-on-scroll">
                <h3 className="text-2xl font-grotesk font-bold mb-3 text-agency-purple">Our Philosophy</h3>
                <p className="text-lg text-gray-300">
                  At DrawnOnwarD, we believe in creating digital experiences that not only meet objectives but also surprise and delight users. Our forward-thinking approach combines innovative technology with beautiful design to craft memorable interactions.
                </p>
              </div>
              
              <div className="reveal-on-scroll">
                <h3 className="text-2xl font-grotesk font-bold mb-3 text-agency-pink">Our Approach</h3>
                <p className="text-lg text-gray-300">
                  We follow a collaborative process that starts with deep understanding and moves through creative exploration, technical innovation, and continuous refinement. Every project is an opportunity to push ourselves and create something extraordinary.
                </p>
              </div>
              
              <div className="reveal-on-scroll">
                <h3 className="text-2xl font-grotesk font-bold mb-3 text-agency-neon">Our Team</h3>
                <p className="text-lg text-gray-300">
                  Our diverse team brings together experts in design, development, animation, and strategy. We're united by our passion for creating exceptional digital products that make an impact and drive results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
