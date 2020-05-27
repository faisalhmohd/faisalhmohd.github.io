import React from 'react';

function Slider({ images, link }) {
  return (
    <a href={link} target="_blank">
      <div className="slideshow-wrapper">
        {images.map(image => (
          <div className="slide">
            <img src={image.src} className="background-image" alt={image.alt} />
          </div>
        ))}
      </div>
      
    </a>
  );
}

export default Slider;