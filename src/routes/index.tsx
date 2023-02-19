// React
import React from 'react';

// Pages
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export default [
  { index: true, element: <Home /> },
  { path: '*', element: <NotFound /> }
];
