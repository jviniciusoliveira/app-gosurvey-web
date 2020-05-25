import React, { useRef } from 'react';
import api from '../../../utils/api';

import Input from '../../../components/Input';
import InputImage from '../../../components/InputImage';
import TextArea from '../../../components/TextArea';
import InputDate from '../../../components/InputDate';
import Answers from './Answers';
import { Title, SubTitle, Form, Button } from './styles';

const SurveyForm = () => {
  const formRef = useRef();

  const handleSubmit = async data => {
    try {
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('image', data.image);
      formData.append('expire', data.expire);
      formData.append('answers', JSON.stringify(data.answers));

      const response = await api.post('/add', formData);

      console.log(response);
      formRef.current.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <Title variant="h5" gutterBottom>
        Cadastrar enquete
      </Title>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="title" label="Pergunta" />

        <TextArea name="description" label="Descrição" />

        <InputDate name="expire" id="expire" />

        <InputImage name="image" label="Imagem" />

        <SubTitle variant="h6" gutterBottom>
          Respostas
        </SubTitle>
        <Answers />

        <Button variant="outlined" size="large" color="primary" type="submit">
          Publicar
        </Button>
      </Form>
    </div>
  );
};

export default SurveyForm;
