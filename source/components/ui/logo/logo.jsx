import React from 'react';
import { AppRoute } from 'src/const';
import { StyledLogo } from 'src/components/ui/logo/styles';

function Logo() {
  return (
    <StyledLogo to={AppRoute.MAIN}>Game store</StyledLogo>
  );
}

export default Logo;
