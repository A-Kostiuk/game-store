import React from 'react';
import { CartIcon, CartWrapper, TotalPrice } from 'src/components/ui/cart/styles';

function Cart(props) {
  return (
    <CartWrapper>
      <CartIcon size={25}/>
      <TotalPrice>2500 грн.</TotalPrice>
    </CartWrapper>
  );
}

export default Cart;
