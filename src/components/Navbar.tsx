
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = ['About', 'Services', 'Pricing', 'Projects', 'Testimonials', 'Contact'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300',
        scrolled || menuOpen ? 'bg-white/95 py-2 shadow-sm' : 'py-4',
        // backdrop-filter turns the nav into the containing block for the fixed mobile menu, so only blur while it is closed
        scrolled && !menuOpen && 'backdrop-blur'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <a href="/" className="flex items-center gap-3 text-brand-navy">
          <img src="/logo-96.webp" alt="" width={44} height={44} className="h-11 w-11" />
          <span className="text-xl font-bold tracking-tight md:text-2xl">DrawnOnwarD</span>
          <span className="sr-only">home</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-[15px] font-medium text-brand-ink transition-colors hover:text-brand-navy"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="/#contact" className="btn btn-primary btn-sm">
            Get a free roadmap
          </a>
        </div>

        <button
          type="button"
          className="-mr-2 rounded-md p-2 text-brand-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-8 w-8"
            aria-hidden="true"
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
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[64px] overflow-y-auto bg-white lg:hidden">
          <div className="flex min-h-full flex-col items-center justify-center gap-7 px-4 py-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-2xl font-semibold text-brand-navy transition-colors hover:text-brand-teal-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/#contact"
              className="btn btn-primary mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Get a free roadmap
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
