import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameBuy from 'src/components/ui/game-buy/game-buy';
import {
  Description,
  GameCardStyled,
  Image,
  Title
} from 'src/components/ui/game-card/styles';
import { AppRoute } from 'src/const';
import { setCurrentGame } from 'src/redux/games/reducer';
import GenresList from 'src/components/ui/genres-list/genres-list';

function GameCard({ game }) {
  const
    { title, genres, image } = game;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    const gamePath = game.title.toLowerCase().replace(/\W/g, '-');
    dispatch(setCurrentGame(game));
    navigate(`${AppRoute.GAMES + gamePath}`);
  };

  return (
    <GameCardStyled onClick={handleClick}>
      <Image src={`/img${image}`} width={320} height={170} alt={title} />
      <Description>
        <Title>{title}</Title>
        <GenresList genres={genres}/>
      </Description>
      <GameBuy game={game} />
    </GameCardStyled>
  );
}

export default GameCard;
