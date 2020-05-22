import React from 'react';

import WindowComponents from './WindowComponents';

import './App.sass';

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="window-inner">
          <WindowComponents />
          <div className="section-one">
            <h2>Mohammad Faisal</h2>
            <h1>Software and Media Engineer, Race Driver based from Dhaka, Bangladesh.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
