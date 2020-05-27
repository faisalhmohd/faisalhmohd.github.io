import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Slider from '../Slider';

import MercedesAMGOne from './mercedes-amg-photo-1.png';
import MercedesAMGTwo from './mercedes-amg-photo-2.png';
import MercedesAMGThree from './mercedes-amg-photo-3.png';
import MercedesAMGLogo from './mercedes-amg.png';
import EmiratesSkyCargoLogo from './emirates-sky-cargo.png';


function Portfolio() {
  const CursorAnimation = useContext(CursorAnimationContext);

  const mercedesAmgImages = [
    {
      src: 'https://www.mercedes-benz.com/en/mbsocialcar/mbsocialcar-mercedes-amg-gt-r/_jcr_content/root/slider_6/sliderchilditems/slideritem_3/image/MQ7-0-image-20190114132747/4-mercedes-benz-vehicles-mercedes-amg-gt-r-c-190-3400x1440.jpeg',
      alt: 'Mercedes Portfolio One'
    },
    {
      src: MercedesAMGOne,
      alt: 'Mercedes Portfolio One'
    },
    {
      src: MercedesAMGTwo,
      alt: 'Mercedes Portfolio One'
    },
    {
      src: MercedesAMGThree,
      alt: 'Mercedes Portfolio One'
    }
  ];
 
  return (
    <div className="portfolio-section">
      <div className="portfolio-section-heading"  {...CursorAnimation.getProps('portfolio-section-heading')}>
        <h2>Portfolio</h2>
        <h1>Selected work I have contributed to.</h1>
      </div>

      <div className="portfolio">
        <div className="portfolio-item" {...CursorAnimation.getProps('portfolio-section-mercedes')}>
          <Slider 
            images={mercedesAmgImages}
            link="https://www.mercedes-amg.com/en.html"
          />
          <img className="logo" src={MercedesAMGLogo} />
        </div>
        <div className="portfolio-item" {...CursorAnimation.getProps('portfolio-section-emirates')}>
          <a href="https://www.skycargo.com" target="_blank">
            <img src="https://www.arabianbusiness.com/public/images/2020/03/25/Emirates-SkyCargo.jpg" className="background-image" alt="Emirates SkyCargo Work" />
            <img className="logo" src={EmiratesSkyCargoLogo} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;