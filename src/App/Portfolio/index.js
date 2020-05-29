import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Slider from '../Slider';

import MercedesAMGOne from './mercedesamg-photo-1.png';
import MercedesAMGTwo from './mercedesamg-photo-2.png';
import MercedesAMGThree from './mercedesamg-photo-3.png';
import MercedesAMGLogo from './mercedes-amg.png';

import MediumLogo from './medium-logo.png';
import MediumZero from './medium-photo-0.png';
import MediumOne from './medium-photo-1.png';
import MediumTwo from './medium-photo-2.png';
import MediumThree from './medium-photo-3.png';

import FormulaDriftLogo from './formula-drift-logo.png';
import FormulaDriftZero from './formula-drift-photo-0.jpg';
import FormulaDriftOne from './formuladrift-photo-1.png';
import FormulaDriftTwo from './formuladrift-photo-2.png';
import FormulaDriftThree from './formuladrift-photo-3.png';

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

const mediumImages = [
  {
    src: MediumZero,
    alt: 'Medium Portfolio One'
  },
  {
    src: MediumOne,
    alt: 'Medium Portfolio One'
  },
  {
    src: MediumTwo,
    alt: 'Medium Portfolio One'
  },
  {
    src: MediumThree,
    alt: 'Medium Portfolio One'
  }
];

const formulaDriftImages = [
  {
    src: FormulaDriftZero,
    alt: 'Formula Drift Portfolio One'
  },
  {
    src: FormulaDriftOne,
    alt: 'Formula Drift Portfolio One'
  },
  {
    src: FormulaDriftTwo,
    alt: 'Formula Drift Portfolio One'
  },
  {
    src: FormulaDriftThree,
    alt: 'Formula Drift Portfolio One'
  }
];

function Portfolio() {
  const CursorAnimation = useContext(CursorAnimationContext);
 
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
            images={mediumImages}
            animationTag='portfolio-section-medium'
            logo={MediumLogo}
            caption="Mobile Development | iOS | Android"
            captionColor="black"
            link="https://play.google.com/store/apps/details?id=com.medium.reader&hl=en"
          />
        </div>

        <div className="portfolio-item">
          <Slider 
            images={formulaDriftImages}
            animationTag='portfolio-section-formuladrift'
            logo={FormulaDriftLogo}
            caption="Website Development | News | Live Score"
            captionColor="black"
            link="https://www.formulad.com/"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;