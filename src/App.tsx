// React
import React, { ReactElement } from 'react';

// Consta
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Layout } from '@consta/uikit/Layout';

// Components
import Header from './components/Header/Header';
import Model from './components/Model/Model';

function App(): ReactElement {
  return (
    <Theme preset={presetGpnDefault}>
      <Header />
      <Model />
    </Theme>
  );
}

export default App;
