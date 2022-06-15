import React from 'react';
import Button from 'src/components/ui/button/button';
import { GameBuyStyled } from 'src/components/ui/game-buy/styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from 'src/redux/cart/reducer';

function GameBuy({game}) {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const dispatch = useDispatch();
  const handleClick = (evt) => {
    evt.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <GameBuyStyled>
      <span>{game.price} грн.</span>
      <Button onClick={handleClick} isItemInCart={isItemInCart}>
        {isItemInCart ? 'Прибрати із кошика' : 'В кошик'}
      </Button>
    </GameBuyStyled>
  );
}

export default GameBuy;
