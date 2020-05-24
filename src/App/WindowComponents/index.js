import React, { useRef, useEffect } from 'react';
import Logo from '../Logo.png';
import LogoWhite from '../Logo-White.png';

function WindowComponents({ currentSection, windowRef }) {
  const scrollRef = useRef(null);
  const isLogoWhite = [
    'portfolio-section-mercedes', 
    'portfolio-section-emirates',
    'online-section-steam',
    'online-section-linkedin',
    'online-section-keybase',
    'online-section-twitter',
  ].includes(currentSection);

  useEffect(() => {
    const handleScrollPosition = e => {
      const yPos = e.target.scrollTop / e.target.scrollHeight * 340;
      
      scrollRef.current.style.transform = `translate(0, ${yPos}px)`;
    };

    windowRef.current.addEventListener('scroll', handleScrollPosition);

    return () => {
      windowRef.current.removeEventListener('scroll', handleScrollPosition);
    }
  }, []);


  return (
    <div className="window-components">
      <div className="logo">
        <img src={isLogoWhite ? LogoWhite : Logo} alt="logo" />
      </div>
      <div className="navbar">
        {["about", "work", "contact"].map((item) => (
          <div className="navbar-item" key={item}>
            {item}
          </div>
        ))}
      </div>
      <div className="scrollbar">
        <div className="scrollbar-text">scroll</div>
        <div className="scrollbar-bar" ref={scrollRef}></div>
      </div>
    </div>
  );
}

export default WindowComponents;