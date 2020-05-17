import React, { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DefaultImage from '../../assets/images/default-survey-img.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  sideRoot: {
    width: '50%',
    padding: '25px',
    margin: '25px',
    display: 'flex',
    flexDirection: 'column',
  },
  FormLabel: {
    fontSize: '24px',
    marginBottom: '20px',
  },
});

const Details = () => {
  const classes = useStyles();

  const [value, setValue] = useState('vscode');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.sideRoot}>
        <img src={DefaultImage} alt="" />
        <Typography variant="subtitle1" gutterBottom>
          Titulo da Enquete
        </Typography>
        <hr />
        <Typography variant="subtitle1" gutterBottom>
          Participe da enquete e deixe sua opinião para ajudar outras pessoas a
          tomaram suas decisões.
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          Expira em: 25/05/2020 às 22h
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Criada por: José Vinicius
        </Typography>
      </div>
      <div className={classes.sideRoot}>
        <FormControl component="fieldset">
          <FormLabel component="legend" className={classes.FormLabel}>
            Editor preferido
          </FormLabel>
          <RadioGroup
            aria-label="editor"
            name="editor"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="vscode"
              control={<Radio color="primary" />}
              label="VS Code"
            />
            <FormControlLabel
              value="atom"
              control={<Radio color="primary" />}
              label="Atom"
            />
            <FormControlLabel
              value="vim"
              control={<Radio color="primary" />}
              label="Vim"
            />
          </RadioGroup>
          <Button href="/details" size="small" color="primary">
            Enviar
          </Button>
        </FormControl>
      </div>
    </Container>
  );
};

export default Details;
