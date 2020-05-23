import React, { useState } from 'react';

const MouseAreaContext = React.createContext();

const MouseAreaProvider = ({ children }) => {
  const [ currentSection, setSection ] = useState('');

  return (
    <MouseAreaContext.Provider value={{ currentSection, setSection }}>
      { children }
    </MouseAreaContext.Provider>
  );
};

export {
  MouseAreaContext,
  MouseAreaProvider
}