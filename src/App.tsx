// React
import React, { ReactElement } from 'react';

// Consta
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Layout } from '@consta/uikit/Layout';

// Components
import Header from './components/Header/Header';

function App(): ReactElement {
  return (
    <Theme preset={presetGpnDefault}>
      <Header />
    </Theme>
  );
}

export default App;
