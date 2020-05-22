import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

const Input = ({ name, type = 'text' }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} type={type} />;
};

export default Input;
