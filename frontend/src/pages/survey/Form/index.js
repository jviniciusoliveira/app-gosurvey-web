import React, { useRef } from 'react';
import api from '../../../utils/api';

import Input from '../../../components/Input';
import ImageInput from '../../../components/ImageInput';
//import ImageInput from '../../../components/ImageInput2';
import Answers from './Answers';
import { Title, Form } from './styles';

const SurveyForm = () => {
  const formRef = useRef();
  const coverRef = useRef(null);

  const handleSubmit = async data => {
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('image', data.image);
      formData.append('expire', data.expire);
      formData.append('answers', JSON.stringify(data.answers));

      const response = await api.post('/add', formData);

      console.log(response);
      formRef.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Title>Cadastrar enquete</Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="title">Pergunta</label>
        <Input name="title" id="title" />

        <label htmlFor="image">Imagem</label>
        <ImageInput name="image" />

        <label htmlFor="expire">Data encerramento</label>
        <Input name="expire" type="date" id="expire" />

        <hr />

        <label>Respostas</label>
        <Answers />

        <button className="btn" type="submit">
          Gravar
        </button>
      </Form>
    </div>
  );
};

export default SurveyForm;
