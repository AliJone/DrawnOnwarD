
import React, { useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

const ParallaxContainer: React.FC<ParallaxProps> = ({
  children,
  speed = 0.1,
  direction = 'vertical',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !elementRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const { top, height } = containerRect;
      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;
      
      // Calculate the position when element is in viewport
      if (top <= windowHeight && top + height >= 0) {
        // The distance from the element's center to the viewport center
        const distanceFromCenter = top + height / 2 - viewportCenter;
        
        // Calculate transform based on distance and speed
        const transform = distanceFromCenter * speed * -1;
        
        // Apply transform in the appropriate direction
        if (direction === 'vertical') {
          elementRef.current.style.transform = `translateY(${transform}px)`;
        } else {
          elementRef.current.style.transform = `translateX(${transform}px)`;
        }
      }
    };
    
    // Set up scroll and resize listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initialize position
    handleScroll();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [speed, direction]);
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={elementRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;
