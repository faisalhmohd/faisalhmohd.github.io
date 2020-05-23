import React, { useRef, useEffect, useContext } from 'react';
import { MouseAreaContext } from '../Contexts/MouseAreaProvider';

const CURSOR_WIDTH = 20;
const CURSOR_HEIGHT = 20;

function Cursor() {
  const cursorRef = useRef(null);
  const { currentSection } = useContext(MouseAreaContext);

  useEffect(() => {
    const handleCursorPosition = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      cursorRef.current.style.top = yPos - CURSOR_HEIGHT/2 + "px";
      cursorRef.current.style.left = xPos - CURSOR_WIDTH/2 + "px";
    };
    const handleCursorOutDisplay = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      // cursorRef.current.style.height = "0px";
      // cursorRef.current.style.width = "0px";
    };
    window.addEventListener('mousemove', handleCursorPosition);
    window.addEventListener('mouseout', handleCursorOutDisplay);

    return () => {
      window.removeEventListener('mousemove', handleCursorPosition);
      window.removeEventListener('mouseout', handleCursorOutDisplay);
    }
  }, []);

  return (
    <div className={`cursor ${currentSection}`} ref={cursorRef} />
  )
}

export default Cursor;