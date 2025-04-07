
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-agency-dark/90 backdrop-blur-md' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <span 
            className="text-3xl md:text-4xl font-bold font-grotesk text-white"
          >
            <span className="text-agency-purple">D</span>rawn
            <span className="text-agency-purple">O</span>nwar
            <span className="text-agency-purple">D</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-8">
          {['About', 'Services', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-space text-lg text-white hover:text-agency-purple transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="hidden lg:block">
          <a 
            href="#contact" 
            className="neo-brutalist bg-agency-pink text-white font-space px-6 py-3 rounded-lg font-medium"
          >
            Get in touch
          </a>
        </div>
        
        <button 
          className="block lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-8 h-8"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"}
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-agency-dark lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {['About', 'Services', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-space text-3xl text-white hover:text-agency-purple transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="neo-brutalist mt-6 bg-agency-pink text-white font-space px-8 py-4 rounded-lg font-medium text-xl"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
