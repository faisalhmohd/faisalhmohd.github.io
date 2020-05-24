import React, { useContext } from 'react';

import WindowComponents from '../WindowComponents';
import About from '../About';
import Portfolio from '../Portfolio';
import Work from '../Work';

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
      </div>
    </div>
  );
}

export default Window;