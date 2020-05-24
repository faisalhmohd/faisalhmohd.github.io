import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

import Linkedin from './linkedin.svg';
import Keybase from './keybase.svg';
import Steam from './steam.svg';
import Twitter from './twitter.svg';

function Online() {
  const CursorAnimation = useContext(CursorAnimationContext);

  return (
    <div className="online-section">
      <div className="online-section-heading"  {...CursorAnimation.getProps('online-section-heading')}>
        <h2>Online</h2>
        <h1>You can find me here too!</h1>
      </div>

      <div className="online-section-items">
        <div className="online-section-item" {...CursorAnimation.getProps('online-section-linkedin')}>
          <a href="https://www.linkedin.com/in/faisalhmohd/" target="_blank">
            <img src={Linkedin} />
          </a>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-keybase')}>
          <a href="https://keybase.io/mohdfaisal" target="_blank">
            <img src={Keybase} />
          </a>
        </div>
        
        <div className="online-section-item" {...CursorAnimation.getProps('online-section-steam')}>
          <a href="http://steamcommunity.com/id/potetoed/" target="_blank">
            <img src={Steam} />
          </a>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-twitter')}>
          <a href="https://twitter.com/faisalhmohd" target="_blank">
            <img src={Twitter} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Online;