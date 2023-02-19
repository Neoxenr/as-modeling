// React
import React, { ReactElement } from 'react';

// React router
import { useRoutes } from 'react-router-dom';

// Routes
import routes from './routes';

function App(): ReactElement {
  const pages = useRoutes(routes);

  return <>{pages}</>;
}

export default App;
