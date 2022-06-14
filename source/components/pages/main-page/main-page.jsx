import React from 'react';
import GamesList from 'src/components/layout/games-list/games-list';
import { VisuallyHiddenTitle } from 'src/components/pages/main-page/styles';

function MainPage() {
  return (
    <>
      <VisuallyHiddenTitle>Game store</VisuallyHiddenTitle>
      <GamesList />
    </>
  );
}

export default MainPage;
