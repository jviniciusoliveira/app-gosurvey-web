import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';

import history from './utils/history';
import Styles from './styles';

import SurveyDetails from './pages/survey/Details';
import SurveyList from './pages/survey/List';
import SurveyForm from './pages/survey/Form';

import DefaultAvatar from './assets/images/default-avatar.png';
import MoreVertIcon from './assets/images/icon-more-vert.svg';
import AddIcon from './assets/images/icon-note-add.svg';

const Header = styled.header`
  width: 100%;
  background: #00434d;
  margin-bottom: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const AppBar = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 48px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      padding: 10px;
      margin-left: 25px;
    }
  }
`;

const App = () => {
  return (
    <>
      <Router history={history}>
        <Styles />
        <Header>
          <AppBar className="container">
            <Link to="/">
              <h1>GoSurvey</h1>
            </Link>
            <div>
              <a href="/add">
                <img
                  src={AddIcon}
                  alt=""
                  style={{ width: '18px', height: '18px' }}
                />
              </a>
              <a href="/">
                <img
                  src={MoreVertIcon}
                  alt=""
                  style={{ width: '6px', height: '18px' }}
                />
              </a>
              <a href="/">
                <img src={DefaultAvatar} alt="" />
              </a>
            </div>
          </AppBar>
        </Header>
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
