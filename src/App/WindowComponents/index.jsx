import React from 'react';
import Logo from '../Logo.jpg'

function WindowComponents() {
  return (
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
  );
}

export default WindowComponents;