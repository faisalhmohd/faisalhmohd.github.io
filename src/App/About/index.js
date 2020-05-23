import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function About() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="about-section" {...CursorAnimation.getProps('about-section')}>
      <h2>Mohammad Faisal</h2>
      <h1>Software and Media Engineer, Race Driver based from Dhaka, Bangladesh.</h1>
    </div>
  );
}

export default About;