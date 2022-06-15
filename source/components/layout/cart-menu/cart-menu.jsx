import React from 'react';
import { useDispatch } from 'react-redux';
import { Paragraph } from 'src/components/styled';
import {
  ButtonBuy,
  CartItemsList,
  StyledCartMenu,
  TotalPrice
} from 'src/components/layout/cart-menu/styles';
import { calcTotalPrice } from 'src/components/utils';
import CartItem from 'src/components/ui/cart-item/cart-item';
import { deleteItemFromCart } from 'src/redux/cart/reducer';

function CartMenu({ items, onClick }) {

  const dispatch = useDispatch();
  const handerClick = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <StyledCartMenu>
      {
        items.length > 0 ?
          <>
            <CartItemsList>
              {items.map((game) => <CartItem key={game.id} {...game} onClick={handerClick}/>)}
            </CartItemsList>
            <TotalPrice><span>Всьго:</span><span>{calcTotalPrice(items)} грн.</span></TotalPrice>
            <ButtonBuy onClick={onClick}>Оформити замовлення</ButtonBuy>
          </>
          : <Paragraph>Корзина пуста</Paragraph>
      }
    </StyledCartMenu>
  );
}

export default CartMenu;
