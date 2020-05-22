import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

const TextArea = ({ name }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea ref={inputRef}></textarea>;
};

export default TextArea;
