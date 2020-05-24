import React, { useContext } from 'react';

import WindowComponents from '../WindowComponents';
import About from '../About';
import Portfolio from '../Portfolio';
import Work from '../Work';
import Online from '../Online';

import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function Window() {
  const { currentSection } = useContext(CursorAnimationContext);

  return (
    <div className={`window ${currentSection}`}>
      <div className="window-inner">
        <WindowComponents currentSection={currentSection} />
        <About />
        <Portfolio />
        <Work />
        <Online />
      </div>
    </div>
  );
}

export default Window;