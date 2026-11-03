import React from 'react';

function Link({ children, href, ...restProps }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...restProps}>
      {children}
    </a>
  );
}

export default Link;