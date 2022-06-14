import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/layout/header/header';
import { Main } from 'src/components/layout/page-wrapper/styles';

function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

export default PageWrapper;
