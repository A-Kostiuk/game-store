import React from 'react';
import GameBuy from 'src/components/ui/game-buy/game-buy';
import GenresList from 'src/components/ui/genres-list/genres-list';
import { Container, GenresTitle, Image } from 'src/components/ui/game-description/styles';
import { Paragraph } from 'src/components/styled';

function GameDescription({game}) {
  const {image, title, description, genres} = game;
  return (
    <Container>
      <Image src={`/img${image}`} width={320} height={170} alt={title} />
      <Paragraph $marginBottom={20}>{description}</Paragraph>
      <GenresTitle $marginBottom={20}>Популярні мітки для цього продукту:</GenresTitle>
      <GenresList genres={genres}/>
      <GameBuy game={game}/>
    </Container>
  );
}

export default GameDescription;
