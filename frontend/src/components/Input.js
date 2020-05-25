import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: '15px',
  },
}));

const Input = ({ name, label = '', type = 'text' }) => {
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
      ref={inputRef}
      id={name}
      label={label}
      type={type}
    />
  );
};

export default Input;
