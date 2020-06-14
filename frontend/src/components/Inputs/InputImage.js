import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { useField } from '@unform/core';

export const Content = styled.label`
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  background-color: #ddd;
  margin-top: 30px;
  text-align: center;

  input {
    display: none;
  }

  ${({ src }) =>
    src !== '' &&
    css`
      background-position: center;
      background-size: cover;
      background-image: url('${src}');
    `}
`;

const InputImage = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback(e => {
    const file = e.target.files[0];

    if (!file) {
      setPreview(null);
    }

    const previewURL = URL.createObjectURL(file);

    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Content htmlFor={name} src={preview}>
      {!preview && <span>Clique para adicionar imagem.</span>}
      <input
        id={name}
        type="file"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
    </Content>
  );
};

export default InputImage;
