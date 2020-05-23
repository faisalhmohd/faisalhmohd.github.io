import React from 'react';
import Mercedes from '../mercedes.jpg';

function Portfolio() {
  return (
    <div className="section-two">
      <h2>Portfolio</h2>
      <h1>Some work I have contributed to.</h1>

      <div className="portfolio">
        <div className="portfolio-item">
          <img src={Mercedes} alt="Mercedes Work" />
        </div>
        <div className="portfolio-item">
          <img src={Mercedes} alt="Mercedes Work" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;