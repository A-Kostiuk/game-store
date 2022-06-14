import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Description,
  GamePrice,
  GenresList,
  GenrItem,
  Image,
  Title
} from 'src/components/ui/game-card/styles';
import { deleteItemFromCart, setItemInCart } from 'src/redux/cart/reducer';
import Button from 'src/components/ui/button/button';

function GameCard({ game }) {
  const
    {
      title, genres, image, price,
    }
      = game;

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
    <>
      <Image src={`/img${image}`} width={320} height={170} />
      <Description>
        <Title>{title}</Title>
        <GenresList>
          {genres.map((genr) => <GenrItem key={genr}>{genr}</GenrItem>)}
        </GenresList>
      </Description>
      <GamePrice>
        <span>{price} грн.</span>
        <Button onClick={handleClick} isItemInCart={isItemInCart}>
          {isItemInCart ? 'Прибрати із кошика' : 'В кошик'}
        </Button>
      </GamePrice>
    </>
  );
}

export default GameCard;
