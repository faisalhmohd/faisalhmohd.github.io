import React, { useRef, useEffect } from 'react';

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursorPosition = e => {
      const xPos = e.clientX;
      const yPos = e.clientY;
      
      cursorRef.current.style.top = yPos + "px";
      cursorRef.current.style.left = xPos + "px";
    }
    window.addEventListener('mousemove', handleCursorPosition);

    return () => {
      window.removeEventListener('mousemove', handleCursorPosition);
    }
  }, []);

  return (
    <div className="cursor" ref={cursorRef} />
  )
}

export default Cursor;