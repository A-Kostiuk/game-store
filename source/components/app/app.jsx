import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'src/const';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import MainPage from 'src/components/pages/main-page/main-page';
import { store } from 'src/redux';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path={AppRoute.MAIN} element={<PageWrapper />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
