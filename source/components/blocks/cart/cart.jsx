import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartIcon, CartWrapper, IconWrapper, TotalPrice } from 'src/components/blocks/cart/styles';
import CartMenu from 'src/components/layout/cart-menu/cart-menu';
import { calcTotalPrice } from 'src/components/utils';

function Cart() {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const handleClick = () => {
    setCartMenuVisible(!isCartMenuVisible);
  };

  return (
    <CartWrapper>
      <IconWrapper $quantity={items.length}>
        <CartIcon size={25} onClick={handleClick} />
      </IconWrapper>
      {items.length > 0 ? <TotalPrice>{calcTotalPrice(items)} грн.</TotalPrice> : null}
      {isCartMenuVisible ? <CartMenu items={items} setCartMenuVisible={setCartMenuVisible} /> : null}
    </CartWrapper>
  );
}

export default Cart;
