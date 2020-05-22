import React, { useRef, useEffect } from 'react';

const CURSOR_WIDTH = 100;
const CURSOR_HEIGHT = 100;

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursorPosition = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      cursorRef.current.style.top = yPos - CURSOR_HEIGHT/2 + "px";
      cursorRef.current.style.left = xPos - CURSOR_WIDTH/2 + "px";
      cursorRef.current.style.height = CURSOR_HEIGHT + "px";
      cursorRef.current.style.width = CURSOR_WIDTH + "px";
    };
    const handleCursorOutDisplay = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      cursorRef.current.style.height = "0px";
      cursorRef.current.style.width = "0px";
    };
    window.addEventListener('mousemove', handleCursorPosition);
    window.addEventListener('mouseout', handleCursorOutDisplay);

    return () => {
      window.removeEventListener('mousemove', handleCursorPosition);
      window.removeEventListener('mouseout', handleCursorOutDisplay);
    }
  }, []);

  return (
    <div className="cursor" ref={cursorRef} />
  )
}

export default Cursor;