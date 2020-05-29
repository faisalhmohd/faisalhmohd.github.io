import React, { useRef, useEffect } from 'react';
import Logo from '../Logo.png';
import LogoWhite from '../Logo-White.png';

function WindowComponents({ currentSection, windowRef }) {
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const isLogoWhite = [
    'portfolio-section-mercedes', 
    'portfolio-section-emirates',
    'portfolio-section-medium',

    'online-section-steam',
    'online-section-linkedin',
    'online-section-keybase',
    'online-section-twitter',
    'online-section-youtube',
  ].includes(currentSection);

  useEffect(() => {
    const currentWindow = windowRef.current;
    const handleScrollPosition = e => {
      const offsetScroll = e.target.clientWidth > 1024 ? 50 : 25;
      const yPos = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) * (300 - offsetScroll + 5);
      const yPosMobile = (e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight) * e.target.clientWidth) ;
      console.log(e);
      
      
      scrollRef.current.style.transform = `translate(0, ${yPos}px)`;
      mobileScrollRef.current.style.width = `${yPosMobile}px`;
    };

    currentWindow.addEventListener('scroll', handleScrollPosition);

    return () => {
      currentWindow.removeEventListener('scroll', handleScrollPosition);
    }
  });


  return (
    <div className="window-components">
      <div className="navbar-container">
        <div className="scrollbar-mobile" ref={mobileScrollRef}></div>
      </div>
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