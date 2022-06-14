import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'src/const';
import MainPage from 'src/components/pages/main-page/main-page';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={AppRoute.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
