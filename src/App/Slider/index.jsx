import React, { useContext } from 'react';
import Link from '../Link';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function Slider({ images, link, animationTag, logo, caption, captionColor = 'white' }) {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <Link href={link} {...CursorAnimation.getProps(animationTag)}>
      <div className="slideshow-wrapper">
        {images.map(image => (
          <div className="slide" key={image.src}>
            <img src={image.src} className="background-image" alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="overlay-content">
        <img className="logo" src={logo} alt="slider-logo" />
        <h1 style={{ color: captionColor }}>{caption}</h1>
      </div>
    </Link>
  );
}

export default Slider;