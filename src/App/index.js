import React from 'react';
import Logo from './Logo.jpg'
import './App.sass';

function App() {
  return (
    <div className="App">
      <div className="window">
        <div className="window-inner">
          <div className="window-components">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="navbar">
              {
                ['about', 'work', 'contact'].map(item => (
                  <div className="navbar-item" key={item}>
                    {item}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
