import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Link from '../Link';

function Work() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="work-section">
      <div className="work-section-heading"  {...CursorAnimation.getProps('work-section-heading')}>
        <h2>Work</h2>
        <h1>Amazing Teams I have been a part of.</h1>
      </div>

      <div className="work-section-items">
        <div className="work-section-item" {...CursorAnimation.getProps('work-section-item')}>
          <Link href="https://www.newscred.com/">
            <h1 className="company-name">NewsCred</h1>
            <h1>Software Engineer</h1>
            <h2>2019 - Present</h2>
          </Link>
        </div>

        <div className="work-section-item"  {...CursorAnimation.getProps('work-section-item')}>
          <Link href="https://www.mercedesamgf1.com/en/">
            <h1  className="company-name">Mercedes-AMG Petronas F1 Team</h1>
            <h1>Media Engineer</h1>
            <h2>2019 - Present</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;