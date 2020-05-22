import React from 'react';

import WindowComponents from './WindowComponents';
import Cursor from './Cursor';

import './App.sass';
import Mercedes from './mercedes.jpg';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <div className="window">
        <div className="window-inner">
          <WindowComponents />
          <div className="section-one">
            <h2>Mohammad Faisal</h2>
            <h1>Software and Media Engineer, Race Driver based from Dhaka, Bangladesh.</h1>
          </div>
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
  );
}

export default App;
