import React, { useRef, useEffect } from 'react';
import Logo from '../Logo.png';
import LogoWhite from '../Logo-White.png';

function WindowComponents({ currentSection, windowRef }) {
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const isLogoWhite = [
    'portfolio-section-mercedes', 
    'portfolio-section-formuladrift',

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
      
      scrollRef.current.style.transform = `translate(0, ${yPos}px)`;
      mobileScrollRef.current.style.width = `${yPosMobile}px`;
    };

    currentWindow.addEventListener('scroll', handleScrollPosition);

    return () => {
      currentWindow.removeEventListener('scroll', handleScrollPosition);
    }
  });

  const handleNavItemClick = (e, item) => {
    document.getElementsByClassName(`${item}-section`)[0].scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="window-components">
      <div className="navbar-container">
        <div className="scrollbar-mobile" ref={mobileScrollRef}></div>
      </div>
      <div className="logo">
        <img src={isLogoWhite ? LogoWhite : Logo} alt="logo" />
      </div>
      <div className="navbar">
        {["about", "portfolio", "work", "online"].map((item) => (
          <div className="navbar-item" key={item} onClick={e => handleNavItemClick(e, item)}>
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