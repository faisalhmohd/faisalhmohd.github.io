import React from 'react';
import Logo from '../Logo.png';
import LogoWhite from '../Logo-White.png';

function WindowComponents({ currentSection }) {
  const isLogoWhite = ['portfolio-section-mercedes', 'portfolio-section-emirates'].includes(currentSection);

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
    </div>
  );
}

export default WindowComponents;