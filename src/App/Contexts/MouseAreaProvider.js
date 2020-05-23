import React, { useState } from 'react';

const MouseAreaContext = React.createContext();

const MouseAreaProvider = ({ children }) => {
  const [ currentSection, setSection ] = useState('');

  const getMouseAreaProps = (sectionName) => ({
    onMouseOver: () => setSection(sectionName),
    onMouseOut: () => setSection('')
  });

  return (
    <MouseAreaContext.Provider value={{ currentSection, setSection, getMouseAreaProps }}>
      { children }
    </MouseAreaContext.Provider>
  );
};

export {
  MouseAreaContext,
  MouseAreaProvider,
};