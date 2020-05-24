import React, { useRef, useEffect, useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import ExternalLinkIcon from './external-link.svg';

const CURSOR_WIDTH = 20;
const CURSOR_HEIGHT = 20;

function Cursor() {
  const cursorRef = useRef(null);
  const { currentSection } = useContext(CursorAnimationContext);

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
    <div className={`cursor ${currentSection}`} ref={cursorRef}>
      {
        currentSection === 'portfolio-section-mercedes' && 
        <div className="text-wrapper">
          <h1>Mercedes-AMG</h1>
          <img src={ExternalLinkIcon} className="external-link-icon" />
        </div>
      }
      {
        currentSection === 'portfolio-section-emirates' && 
        <div className="text-wrapper">
          <h1>Emirates SkyCargo</h1>
          <img src={ExternalLinkIcon} className="external-link-icon" />
        </div>
      }
      {
        currentSection === 'work-section-item' && 
        <div className="text-wrapper">
          <img src={ExternalLinkIcon} className="external-link-icon" />
        </div>
      }
    </div>
  )
}

export default Cursor;