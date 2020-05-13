import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DefaultImage from '../../assets/images/default-survey.jpg';

import mockSurveys from '../../tmp-mock-surveys';

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  cardRoot: {
    maxWidth: 320,
  },
  cardMedia: {
    height: 140,
  },
});

const List = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant={'h4'} className={classes.title}>
        Participe das enquetes
      </Typography>
      <Grid container justify="center" spacing={5}>
        {mockSurveys.map((survey) => (
          <Grid item key={survey._id}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={DefaultImage}
                  title={survey.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {survey.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {survey.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href="/details" size="small" color="primary">
                  Detalhes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default List;
