import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

import NewsCred from './newscred-logo.png';
import Mercedes from './mercedes-amg-logo.png';

function Work() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="work-section">
      <div className="work-section-heading"  {...CursorAnimation.getProps('work-section-heading')}>
        <h2>Work</h2>
        <h1>Amazing Teams I have been a part of.</h1>
      </div>

      <div className="work-section-items">
        <div className="work-section-item">
          <a>
            <img src={NewsCred} width="350" />
            <h1>Software Engineer</h1>
            <h2>2019 - Present</h2>
          </a>
        </div>

        <div className="work-section-item">
          <a>
            <img src={Mercedes} width="250" />
            <h1>Media Engineer</h1>
            <h2>2019 - Present</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;