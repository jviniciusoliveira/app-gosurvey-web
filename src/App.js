import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import theme from './theme';
import {
  AppBar,
  Toolbar,
  Typography,
  MuiThemeProvider,
  Container,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Details from './pages/survey/details/Info';
import SurveyList from './pages/survey/List';

import DefaultAvatar from './assets/images/default-avatar.png';

const history = createBrowserHistory(); // TO DO: move to services folder

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  titleSpacing: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <AppBar className={classes.appBar} position="fixed">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6">Go Survey</Typography>
              <Avatar alt="Login" src={DefaultAvatar} />
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.titleSpacing} />
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" exact component={SurveyList} />
                <Route path="/details" component={Details} />
              </Switch>
            </Container>
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
