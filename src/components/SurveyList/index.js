import React from 'react';
import Grid from '@material-ui/core/Grid';

import Card from './Card';

const mockPolls = [
  {
    _id: 1,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
  {
    _id: 2,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
  {
    _id: 3,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
  {
    _id: 4,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
  {
    _id: 5,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
  {
    _id: 6,
    title: 'Enquete',
    description:
      'Participe da enquete e deixe sua opinião para ajudar outras pessoas a tomaram suas decisões.',
    expiresIn: new Date(2020, 6, 30),
  },
];

const SurveyList = () => {
  return (
    <Grid container justify="center" spacing={5}>
      {mockPolls.map((survey) => (
        <Grid item key={survey._id}>
          <Card survey={survey} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SurveyList;
