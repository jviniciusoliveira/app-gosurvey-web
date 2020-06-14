import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  MoreVert as MoreVertIcon,
  ViewList as ViewListIcon,
} from '@material-ui/icons';
import IconLink from '../IconLink';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: '30px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="h6">GoSurvey</Typography>
            <div>
              <IconLink to="/" icon={ViewListIcon} />
              <IconLink to="/add" icon={MoreVertIcon} />
              <IconLink to="/profile" icon={AccountCircleIcon} />
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
