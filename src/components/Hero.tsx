
import React, { useEffect, useRef } from 'react';
import ParallaxContainer from './ParallaxContainer';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Reveal elements on scroll
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
  
  // Parallax mouse effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;
      
      const layers = containerRef.current?.querySelectorAll('.parallax-layer');
      layers?.forEach((layer, index) => {
        const factor = (index + 1) * 0.5;
        const htmlLayer = layer as HTMLElement;
        htmlLayer.style.transform = `translate3d(${xPos * factor}px, ${yPos * factor}px, 0)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-agency-dark pt-20">
      {/* Decorative Elements */}
      <div className="parallax-layer -z-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-agency-purple/20 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-agency-pink/20 blur-3xl"></div>
      </div>
      <div className="parallax-layer -z-10">
        <div className="absolute top-40 right-60 w-20 h-20 rounded-full bg-agency-neon/10 blur-2xl"></div>
      </div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.8)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="reveal-on-scroll text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-grotesk leading-tight text-white">
              We <span className="text-agency-purple">craft</span> digital <span className="text-agency-pink">experiences</span>
            </h1>
            <p className="reveal-on-scroll text-lg md:text-xl mb-8 text-gray-300 max-w-lg delay-100">
              DrawnOnwarD is a software agency specializing in creating immersive digital experiences that push the boundaries of web technology.
            </p>
            <div className="reveal-on-scroll flex flex-col sm:flex-row gap-4 delay-200">
              <a href="#services" className="neo-brutalist bg-agency-purple text-white font-space text-lg px-8 py-4 rounded-lg font-medium">
                Our Services
              </a>
              <a href="#projects" className="border-2 border-white hover:border-agency-pink text-white font-space text-lg px-8 py-4 rounded-lg font-medium transition-colors">
                See Our Work
              </a>
            </div>
          </div>
          
          <ParallaxContainer speed={0.05} className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Abstract 3D-looking shapes */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-agency-purple/30 rounded-3xl rotate-45 transform-gpu animate-float"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center -translate-x-6 translate-y-6">
                <div className="w-56 h-56 glass-panel rounded-3xl rotate-12 transform-gpu animate-float delay-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center translate-x-10 -translate-y-10">
                <div className="w-40 h-40 bg-agency-pink/20 backdrop-blur-xl rounded-full transform-gpu animate-pulse-glow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold font-grotesk text-white transform-gpu">D.O.D</div>
              </div>
            </div>
          </ParallaxContainer>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce mt-2"></div>
          </div>
          <p className="text-center text-white/70 mt-2">Scroll</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
