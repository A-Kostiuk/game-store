import React from 'react';
import { GAMES } from 'src/mocks/mocks';
import GameCard from 'src/components/ui/game-card/game-card';
import { GamesListStyled } from 'src/components/layout/games-list/styles';

function GamesList() {
  return (
    <GamesListStyled>
      {GAMES.map((game) =>
        (<GameCard key={game.id} game = {game} />))}
    </GamesListStyled>
  );
}

export default GamesList;
