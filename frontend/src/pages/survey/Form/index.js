import React from 'react';

import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Answers from './Answers';
import { Title, Form } from './styles';
import IconAdd from '../../../assets/images/icon-add.png';

const SurveyForm = () => {
  const handleSubmit = dataForm => {
    console.log(dataForm);
  };

  return (
    <div className="container">
      <Title>Cadastrar enquete</Title>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <Input name="title" id="title" />

        <label htmlFor="description">Descrição</label>
        <TextArea name="description" />

        <label htmlFor="date">Data encerramento</label>
        <Input name="date" type="date" id="date" />

        <hr />

        <label>Respostas</label>
        <Answers />

        <button className="btn-add" type="button">
          <img src={IconAdd} alt="" />
        </button>
        <button className="btn" type="submit">
          Gravar
        </button>
      </Form>
    </div>
  );
};

export default SurveyForm;
