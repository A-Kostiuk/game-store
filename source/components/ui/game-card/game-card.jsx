import React from 'react';
import {
  CardButton,
  Description,
  GamePrice,
  GenresList,
  GenrItem,
  Image,
  Title,
} from 'src/components/ui/game-card/styles';

function GameCard({ title, genres, image, price }) {
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
        <CardButton>В корзину</CardButton>
      </GamePrice>
    </>
  );
}

export default GameCard;
