
import React from 'react';

const Footer: React.FC = () => {
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
              {['About Us', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-').replace('projects', 'projects')}`} 
                    className="text-gray-400 hover:text-agency-purple transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none bg-gray-800 text-white"
              />
              <button 
                type="submit" 
                className="bg-agency-purple text-white px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DrawnOnwarD. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-agency-purple transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
