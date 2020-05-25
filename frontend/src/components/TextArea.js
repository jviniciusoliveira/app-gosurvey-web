import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: '15px',
  },
}));

const TextArea = ({ name, label, ...rest }) => {
  const classes = useStyles();
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const inputProps = {
    inputRef,
    id: fieldName,
    name,
    label,
    defaultValue,
    fullWidth: true,
    autoComplete: 'off',
    ...rest,
  };

  return <TextField className={classes.field} multiline {...inputProps} />;
};

export default TextArea;
