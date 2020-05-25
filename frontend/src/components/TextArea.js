import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: '15px',
  },
}));

const TextArea = ({ name, label }) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      className={classes.field}
      name={name}
      id={name}
      label={label}
      multiline
    />
  );
};

export default TextArea;
