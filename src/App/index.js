import React from 'react';

import WindowComponents from './WindowComponents';
import Cursor from './Cursor';
import About from './About';
import Portfolio from './Portfolio';

import { CursorAnimationProvider } from './Contexts/CursorAnimationProvider';

import './App.sass';

function App() {
  return (
    <CursorAnimationProvider>
      <div className="App">
        <Cursor/>
        <div className="window">
          <div className="window-inner">
            <WindowComponents />
            <About />
            <Portfolio />
          </div>
        </div>
      </div>
    </CursorAnimationProvider>
  );
}

export default App;
