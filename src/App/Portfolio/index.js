import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Mercedes from '../portfolio-mercedes.jpg';

function Portfolio() {
  const CursorAnimation = useContext(CursorAnimationContext);
 
  return (
    <div className="portfolio-section">
      <div className="portfolio-section-heading"  {...CursorAnimation.getProps('portfolio-section-heading')}>
        <h2>Portfolio</h2>
        <h1>Some work I have contributed to.</h1>
      </div>

      <div className="portfolio">
        <div className="portfolio-item" {...CursorAnimation.getProps('portfolio-section-mercedes')}>
          <a href="https://www.mercedes-amg.com/en.html" target="_blank">
            <img src={Mercedes} alt="Mercedes Work" />
          </a>
        </div>
        <div className="portfolio-item">
          <img src={Mercedes} alt="Mercedes Work" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;