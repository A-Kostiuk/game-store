import React from 'react';
import { Paragraph } from 'src/components/styled';
import CartItem from 'src/components/ui/cart-item/cart-item';
import { calcTotalPrice } from 'src/components/utils';
import {
  ButtonBuy,
  CartItemsList,
  StyledCartMenu,
  TotalPrice
} from 'src/components/layout/cart-menu/styles';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from 'src/const';

function CartMenu({ items, setCartMenuVisible }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setCartMenuVisible(false);
    navigate(AppRoute.ORDER);
  };

  return (
    <StyledCartMenu>
      {
        items.length > 0 ?
          <>
            <CartItemsList>
              {items.map((game) => <CartItem key={game.id} {...game} />)}
            </CartItemsList>
            <TotalPrice><span>Всьго:</span><span>{calcTotalPrice(items)} грн.</span></TotalPrice>
            <ButtonBuy onClick={handleClick}>Оформити замовлення</ButtonBuy>
          </>
          : <Paragraph>Корзина пуста</Paragraph>
      }
    </StyledCartMenu>
  );
}

export default CartMenu;
