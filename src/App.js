import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CssBaseline from '@material-ui/core/CssBaseline';

import AppRoutes from './routes';

const history = createBrowserHistory(); // TO DO: move to services folder

const App = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <AppRoutes />
    </Router>
  );
};

export default App;
