import React from 'react';
import { useSelector } from 'react-redux';
import Title from 'src/components/ui/title/title';
import { ContentWrapper, Video } from 'src/components/pages/game-page/styles';
import GameDescription from 'src/components/ui/game-description/game-description';
import { Section } from 'src/components/styled';

function GamePage() {
  let game = useSelector((state) => state.games.currentGame);
  if (!game) {
    game = JSON.parse(sessionStorage.getItem('currentGame'));
  }
  return (
    <Section>
      <Title level={1}>{game.title}</Title>
      <ContentWrapper>
        <Video
          width={500}
          height={300}
          src={game.video}
          title='Youtube Video Player'
        />
        <GameDescription game={game}/>
      </ContentWrapper>
    </Section>
  );
}

export default GamePage;
