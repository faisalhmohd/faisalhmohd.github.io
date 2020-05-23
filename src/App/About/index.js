import React, { useContext } from 'react';
import { MouseAreaContext } from '../Contexts/MouseAreaProvider';

function About() {
  const { getMouseAreaProps} = useContext(MouseAreaContext);

  return (
    <div className="about-section" {...getMouseAreaProps('about-section')}>
      <h2>Mohammad Faisal</h2>
      <h1>Software and Media Engineer, Race Driver based from Dhaka, Bangladesh.</h1>
    </div>
  );
}

export default About;