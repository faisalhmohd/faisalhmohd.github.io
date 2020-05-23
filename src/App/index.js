import React from 'react';

import WindowComponents from './WindowComponents';
import Cursor from './Cursor';
import About from './About';
import Portfolio from './Portfolio';

import { MouseAreaProvider } from './Contexts/MouseAreaProvider';

import './App.sass';

function App() {
  return (
    <MouseAreaProvider>
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
    </MouseAreaProvider>
  );
}

export default App;
