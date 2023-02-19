// React
import React, { ReactElement } from 'react';

// Components
import Header from '../../components/Header/Header';
import Model from '../../components/Model/Model';

function Home(): ReactElement {
  return (
    <>
      <Header />
      <Model />
    </>
  );
}

export default Home;
