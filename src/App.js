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
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

import SurveyDetails from './pages/survey/Details';
import SurveyList from './pages/survey/List';
import SurveyForm from './pages/survey/Form';

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
  title: {
    fontWeight: 'bold',
    color: '#fff',
  },
  icons: {
    display: 'flex',
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
              <Typography variant="h4" className={classes.title}>
                <IconButton href="/" color="inherit">
                  GoSurvey
                </IconButton>
              </Typography>
              <div className={classes.icons}>
                <IconButton href="/add" color="inherit">
                  <NoteAddIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                  <MoreVertIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                  <Avatar alt="Login" src={DefaultAvatar} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.titleSpacing} />
            <Container maxWidth="lg">
              <Switch>
                <Route path="/" exact component={SurveyList} />
                <Route path="/details" component={SurveyDetails} />
                <Route path="/add" component={SurveyForm} />
              </Switch>
            </Container>
          </main>
        </Router>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
