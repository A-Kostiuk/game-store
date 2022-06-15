import React from 'react';
import GamesList from 'src/components/layout/games-list/games-list';
import Title from 'src/components/ui/title/title';
import { Section } from 'src/components/styled';

function MainPage() {
  return (
    <>
      <Title level={1} visuallyHidden>Game store</Title>
      <Section>
        <Title level={2} visuallyHidden>Games</Title>
        <GamesList />
      </Section>
    </>
  );
}

export default MainPage;
