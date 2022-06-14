import React from 'react';
import { GAMES } from 'src/mocks/mocks';
import GameCard from 'src/components/ui/game-card/game-card';
import { GameItem, GamesListStyled } from 'src/components/layout/games-list/styles';

function GamesList() {
  return (
    <GamesListStyled>
      {GAMES.map((game) =>
        (<GameItem key={game.id}><GameCard game = {game} /></GameItem>))}
    </GamesListStyled>
  );
}

export default GamesList;
