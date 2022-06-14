import React from 'react';
import { StyledButton } from 'src/components/ui/button/styles';

function Button({ children, onClick, className, isItemInCart}) {
  return (
    <StyledButton className={className} onClick={onClick} $isItemInCart={isItemInCart}>{children}</StyledButton>
  );
}

export default Button;
