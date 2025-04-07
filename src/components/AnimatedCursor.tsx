
import React, { useState, useEffect } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);

    const onLinkHoverIn = () => setLinkHovered(true);
    const onLinkHoverOut = () => setLinkHovered(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', onLinkHoverIn);
      link.addEventListener('mouseleave', onLinkHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', onLinkHoverIn);
        link.removeEventListener('mouseleave', onLinkHoverOut);
      });
    };
  }, []);

  const cursorStyles: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: 'opacity 0.15s ease-in-out, transform 0.1s ease-out',
    mixBlendMode: 'difference',
    zIndex: 9999,
    opacity: hidden ? 0 : 1
  };

  return (
    <>
      <div 
        style={{
          ...cursorStyles,
          width: clicked ? '20px' : linkHovered ? '40px' : '20px',
          height: clicked ? '20px' : linkHovered ? '40px' : '20px',
          borderRadius: '50%',
          backgroundColor: 'white',
          marginLeft: clicked ? '-10px' : linkHovered ? '-20px' : '-10px',
          marginTop: clicked ? '-10px' : linkHovered ? '-20px' : '-10px',
        }}
      />
      <div 
        style={{
          ...cursorStyles,
          width: clicked ? '30px' : linkHovered ? '60px' : '40px',
          height: clicked ? '30px' : linkHovered ? '60px' : '40px',
          border: '1px solid #8B5CF6',
          borderRadius: '50%',
          marginLeft: clicked ? '-15px' : linkHovered ? '-30px' : '-20px',
          marginTop: clicked ? '-15px' : linkHovered ? '-30px' : '-20px',
          transition: 'width 0.2s, height 0.2s, margin 0.2s, opacity 0.15s ease-in-out, transform 0.3s ease-out'
        }}
      />
    </>
  );
};

export default AnimatedCursor;
