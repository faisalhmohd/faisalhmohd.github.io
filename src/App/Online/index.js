import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

function Online() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="online-section">
      <div className="online-section-heading"  {...CursorAnimation.getProps('online-section-heading')}>
        <h2>Online</h2>
        <h1>You can find me here too!</h1>
      </div>
    </div>
  );
}

export default Online;