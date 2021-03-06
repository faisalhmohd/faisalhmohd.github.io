import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';

import Linkedin from './linkedin.svg';
import Keybase from './keybase.svg';
import Steam from './steam.svg';
import Twitter from './twitter.svg';
import Link from '../Link';
import Youtube from './youtube.svg';
import Spotify from './spotify.svg';
import Github from './github.svg';

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
          <Link href="https://www.linkedin.com/in/faisalhmohd/">
            <img src={Linkedin} alt="linkedin" />
          </Link>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-keybase')}>
          <Link href="https://keybase.io/mohdfaisal">
            <img src={Keybase} alt="keybase" />
          </Link>
        </div>
        
        <div className="online-section-item" {...CursorAnimation.getProps('online-section-steam')}>
          <Link href="http://steamcommunity.com/id/potetoed/">
            <img src={Steam} alt="steam" />
          </Link>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-twitter')}>
          <Link href="https://twitter.com/faisalhmohd">
            <img src={Twitter} alt="twitter" />
          </Link>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-youtube')}>
          <Link href="https://youtube.com/mohammadfaisalhere">
            <img src={Youtube} alt="youtube" />
          </Link>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-spotify')}>
          <Link href="http://open.spotify.com/user/faisalhmohd">
            <img src={Spotify} alt="spotify" />
          </Link>
        </div>

        <div className="online-section-item" {...CursorAnimation.getProps('online-section-github')}>
          <Link href="https://github.com/faisalhmohd">
            <img src={Github} alt="github" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Online;