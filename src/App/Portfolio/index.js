import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Slider from '../Slider';

import MercedesAMGOne from './mercedes-amg-photo-1.png';
import MercedesAMGTwo from './mercedes-amg-photo-2.png';
import MercedesAMGThree from './mercedes-amg-photo-3.png';
import MercedesAMGLogo from './mercedes-amg.png';

import EmiratesSkyCargoLogo from './emirates-sky-cargo.png';
import EmiratesSkyCargoOne from './emirates-skycargo-photo-1.png';
import EmiratesSkyCargoTwo from './emirates-skycargo-photo-2.png';
import EmiratesSkyCargoThree from './emirates-skycargo-photo-3.png';


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

  const emiratesSkyCargoImages = [
    {
      src: "https://www.arabianbusiness.com/public/images/2020/03/25/Emirates-SkyCargo.jpg",
      alt: "Emirates Portfolio One",
    },
    {
      src: EmiratesSkyCargoOne,
      alt: "Emirates Portfolio One",
    },
    {
      src: EmiratesSkyCargoTwo,
      alt: "Emirates Portfolio One",
    },
    {
      src: EmiratesSkyCargoThree,
      alt: "Emirates Portfolio One",
    },
  ];
 
  return (
    <div className="portfolio-section">
      <div className="portfolio-section-heading"  {...CursorAnimation.getProps('portfolio-section-heading')}>
        <h2>Portfolio</h2>
        <h1>Selected work I have contributed to.</h1>
      </div>

      <div className="portfolio">
        <div className="portfolio-item" >
          <Slider 
            images={mercedesAmgImages}
            link="https://www.mercedes-amg.com/en.html"
            animationTag="portfolio-section-mercedes"
            logo={MercedesAMGLogo}
            caption="Website Development | Private Lounge"
          />
        </div>
        <div className="portfolio-item">
          <Slider 
            images={emiratesSkyCargoImages}
            animationTag='portfolio-section-emirates'
            logo={EmiratesSkyCargoLogo}
            caption="Website Development | Blog"
            link="https://www.skycargo.com"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;