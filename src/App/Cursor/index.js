import React, { useRef, useEffect } from 'react';

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursorPosition = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      cursorRef.current.style.top = yPos + "px";
      cursorRef.current.style.left = xPos + "px";
      cursorRef.current.style.height = "100px";
      cursorRef.current.style.width = "100px";
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