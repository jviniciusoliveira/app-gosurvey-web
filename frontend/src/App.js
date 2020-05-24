import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/history';
import Styles from './styles';

import SurveyDetails from './pages/Survey/Details';
import SurveyList from './pages/Survey/List';
import SurveyForm from './pages/Survey/Form';

import AppBar from './components/AppBar';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Styles />
        <AppBar />
        <main>
          <Switch>
            <Route path="/" exact component={SurveyList} />
            <Route path="/details" component={SurveyDetails} />
            <Route path="/add" component={SurveyForm} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
