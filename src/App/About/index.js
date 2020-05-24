import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function About() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="about-section">
      <div className="about-section-heading" {...CursorAnimation.getProps('about-section-heading')}>
        <h2>Mohammad Faisal</h2>
        <h1>Software and Media Engineer, Race Driver based from Dhaka, Bangladesh.</h1>
      </div>
    </div>
  );
}

export default About;