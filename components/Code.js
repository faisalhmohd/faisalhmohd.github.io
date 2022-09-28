/* global Prism */
import 'prismjs';

import * as React from 'react';
import copy from 'copy-to-clipboard';

import { Icon } from './Icon';

export function Code({ children, 'data-language': language }) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  React.useEffect(() => {
    if (copied) {
      copy(ref.current.innerText);
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied]);

  const lines =
    typeof children === 'string' ? children.split('\n').filter(Boolean) : [];

  return (
    <div className="code" aria-live="polite">
      <pre
        className={`language-${language} ${language?.includes('diff') ? 'diff-highlight' : ''}`}
        ref={ref}
        // Prevents "Failed to execute 'removeChild' on 'Node'" error
        // https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re
        key={children}
      >
        {children}
      </pre>
      <button onClick={() => setCopied(true)}>
        <Icon icon={copied ? 'copied' : 'copy'} />
      </button>
      <style jsx>
        {`
          .code {
            position: relative;
          }
          .code button {
            appearance: none;
            position: absolute;
            color: inherit;
            background: var(--code-background);
            top: ${lines.length === 1 ? '17px' : '13px'};
            right: 11px;
            border-radius: 4px;
            border: none;
            font-size: 15px;
          }
        `}
      </style>
    </div>
  );
}
