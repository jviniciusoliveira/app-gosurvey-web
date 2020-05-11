import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AppRoutes from './routes';

const history = createBrowserHistory(); // TO DO: move to services folder

const App = () => {
  return (
    <Router history={history}>
      <CssBaseline />
      <Container maxWidth="xl">
        <AppRoutes />
      </Container>
    </Router>
  );
};

export default App;
