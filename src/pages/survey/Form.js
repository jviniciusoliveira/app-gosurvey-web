import React from 'react';
import { Container, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  margin: {
    marginBottom: '20px',
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          fullWidth
          id="outlined-error-helper-text"
          label="Título"
          defaultValue=""
          variant="outlined"
          className={classes.margin}
        />
        <TextField
          fullWidth
          id="outlined-multiline-static"
          label="Descrição"
          multiline
          rows={2}
          defaultValue=""
          variant="outlined"
          className={classes.margin}
        />
      </form>
    </Container>
  );
};

export default Form;
