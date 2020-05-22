import React from 'react';

import WindowComponents from './WindowComponents';

import './App.sass';

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="window-inner">
          <WindowComponents />
        </div>
      </div>
    </div>
  );
}

export default App;
