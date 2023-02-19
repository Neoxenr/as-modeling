// React
import React from 'react';

// React dom
import ReactDOM from 'react-dom/client';

// React router
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';

// Consta
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

// Store
import { store } from './store';

// Components
import App from './App';

// SCSS
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme preset={presetGpnDefault}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme>
    </Provider>
  </React.StrictMode>
);
