import React from 'react';
import Container from '@material-ui/core/Container';

import SurveyList from '../../components/SurveyList';
import Header from '../../components/Header';

const Index = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <SurveyList />
      </Container>
    </>
  );
};

export default Index;
