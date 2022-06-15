import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'src/const';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import MainPage from 'src/components/pages/main-page/main-page';
import GamePage from 'src/components/pages/game-page/game-page';
import { store } from 'src/redux';
import OrderPage from 'src/components/pages/order-page/order-page';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path={AppRoute.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage />} />
          <Route path={`${AppRoute.GAMES}:title`} element={<GamePage />} />
          <Route path={AppRoute.ORDER} element={<OrderPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
