import React from 'react';
import { StyledHeader } from 'src/components/layout/header/styles';
import Nav from 'src/components/layout/nav/nav';
import Cart from 'src/components/blocks/cart/cart';

function Header() {
  return (
    <StyledHeader>
      <Nav />
      <Cart />
    </StyledHeader>
  );
}

export default Header;
