import React from 'react';
import styled from 'styled-components';

import IconAdd from '../../assets/images/icon-add.png';

const Title = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 24px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  label {
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    max-width: 600px;
    height: 44px;
    background: #fafeff;
    border: 2px solid #bec1c2;
    border-radius: 4px;
    padding: 5px 20px;
    margin-bottom: 15px;
  }

  textarea {
    width: 100%;
    max-width: 600px;
    height: 88px;
    background: #fafeff;
    border: 2px solid #bec1c2;
    border-radius: 4px;
    padding: 10px 20px;
    margin-bottom: 15px;
  }

  hr {
    border: 0;
    height: 1px;
    background: #bec1c2;
    margin: 20px 0 20px;
  }

  .btn-add {
    width: 45px;
    background: none;
    border: 0;
    margin: 10px 0;
  }

  .btn {
    width: 100%;
    max-width: 600px;
    height: 50px;
    border: 0;
    background: #00434c;
    margin: 40px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const SurveyForm = () => {
  return (
    <div className="container">
      <Title>Cadastrar enquete</Title>
      <Form>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" />

        <label htmlFor="description">Descrição</label>
        <textarea name="" id="description" cols="30" rows="10"></textarea>

        <label htmlFor="date">Data encerramento</label>
        <input type="date" id="date" />

        <hr />

        <label>Respostas</label>
        <input type="text" />
        <input type="text" />

        <button className="btn-add" type="button">
          <img src={IconAdd} alt="" />
        </button>
        <button className="btn" type="button">
          Gravar
        </button>
      </Form>
    </div>
  );
};

export default SurveyForm;
