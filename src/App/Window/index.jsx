import React, { useContext, useRef } from 'react';

import WindowComponents from '../WindowComponents';
import About from '../About';
import Portfolio from '../Portfolio';
import Work from '../Work';
import Online from '../Online';

import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function Window() {
  const windowRef = useRef(null);
  const { currentSection } = useContext(CursorAnimationContext);

  return (
    <div className={`window ${currentSection}`}>
      <div className="window-inner" ref={windowRef}>
        <WindowComponents currentSection={currentSection} windowRef={windowRef} />
        <About />
        <Portfolio />
        <Work />
        <Online />
      </div>
    </div>
  );
}

export default Window;