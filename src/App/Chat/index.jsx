import React, { useContext } from 'react';
import { CursorAnimationContext } from '../Contexts/CursorAnimationProvider';
import Link from '../Link';

function Chat() {
  const { getProps, setCurrentSection } = useContext(CursorAnimationContext);

  return (
    <section className="chat-section" aria-labelledby="chat-heading">
      <div className="chat-section-content">
        <div className="chat-section-heading" {...getProps('chat-section-heading')}>
          <h2 id="chat-heading">Chat</h2>
          <h1>Let's find a time to chat!</h1>
        </div>
        <Link
          className="chat-section-booking"
          href="https://calendar.app.google/Q8rkXWvwdZ5KFsv27"
          aria-label="Book a call with me"
          onMouseEnter={() => setCurrentSection('chat-section-calendar')}
          onMouseLeave={() => setCurrentSection('')}
          onFocus={() => setCurrentSection('chat-section-calendar')}
          onBlur={() => setCurrentSection('')}
        >
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="8" width="30" height="28" rx="3" />
            <path d="M12 4v8m16-8v8M5 17h30m-23 7h3m6 0h3m-12 6h3m6 0h3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

export default Chat;
