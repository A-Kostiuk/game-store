import React from 'react';
import { StyleTitle } from './style';

function Title({
  level,
  children,
  maxWidth,
  className,
  visuallyHidden,
  marginBottom,
}) {
  return (
    <StyleTitle
      className={className}
      level={level}
      as={`h${level}`}
      $maxWidth={maxWidth}
      $visuallyHidden={visuallyHidden}
      $marginBottom={marginBottom}
    >
      {children}
    </StyleTitle>
  );
}

export default Title;
