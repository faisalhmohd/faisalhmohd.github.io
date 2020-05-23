import React from 'react';

import WindowComponents from './WindowComponents';
import Cursor from './Cursor';
import About from './About';

import { MouseAreaProvider } from './Contexts/MouseAreaProvider';

import './App.sass';
import Mercedes from './mercedes.jpg';

function App() {
  return (
    <MouseAreaProvider>
      <div className="App">
        <Cursor/>
        <div className="window">
          <div className="window-inner">
            <WindowComponents />
            <About />
            <div className="section-two">
              <h2>Portfolio</h2>
              <h1>Some work I have contributed to.</h1>

              <div className="portfolio">
                <div className="portfolio-item">
                  <img src={Mercedes} alt="Mercedes Work" />
                </div>
                <div className="portfolio-item">
                  <img src={Mercedes} alt="Mercedes Work" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MouseAreaProvider>
  );
}

export default App;
