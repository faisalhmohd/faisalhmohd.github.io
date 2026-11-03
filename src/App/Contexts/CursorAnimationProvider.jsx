import React, { useState } from 'react';

const CursorAnimationContext = React.createContext();

const CursorAnimationProvider = ({ children }) => {
  const [ currentSection, setCurrentSection ] = useState('');

  const getProps = (sectionName) => ({
    onMouseOver: () => setCurrentSection(sectionName),
    onMouseOut: () => setCurrentSection('')
  });

  return (
    <CursorAnimationContext.Provider value={{ currentSection, setCurrentSection, getProps }}>
      { children }
    </CursorAnimationContext.Provider>
  );
};

export {
  CursorAnimationContext,
  CursorAnimationProvider,
};