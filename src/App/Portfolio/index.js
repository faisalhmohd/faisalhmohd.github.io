import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Mercedes from '../portfolio-mercedes.jpg';
import Emirates from '../portfolio-emirates.png';

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
            <img src={Mercedes} alt="Mercedes-AMG Work" />
          </a>
        </div>
        <div className="portfolio-item" {...CursorAnimation.getProps('portfolio-section-emirates')}>
          <a href="https://www.skycargo.com" target="_blank">
            <img src={Emirates} alt="Emirates SkyCargo Work" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;