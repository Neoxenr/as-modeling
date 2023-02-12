// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux
import { Provider } from 'react-redux';

// Consta
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

// Store
import { store } from './store';

// Components
import Header from './components/Header/Header';
import Model from './components/Model/Model';

// SCSS
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme preset={presetGpnDefault}>
        <Header />
        <Model />
      </Theme>
    </Provider>
  </React.StrictMode>
);
