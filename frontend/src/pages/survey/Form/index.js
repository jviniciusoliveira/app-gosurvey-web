import React, { useRef, useState } from 'react';
import api from '../../../utils/api';

//import { InputText, InputDate, InputImage } from '../../../components/Inputs';
import InputText from '../../../components/Inputs/Input';
import InputDate from '../../../components/Inputs/InputDate';
import InputImage from '../../../components/Inputs/InputImage';
import Answers from './Answers';
import { Title, SubTitle, Form, Button } from './styles';

const SurveyForm = () => {
  const formRef = useRef();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = async form => {
    try {
      const data = {
        ...form,
        expire: selectedDate,
      };
      const formData = new FormData();

      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('image', data.image);
      formData.append('expire', selectedDate);
      formData.append('answers', JSON.stringify(data.answers));

      //const response = await api.post('/add', formData);

      console.log(data);
      //console.log(formData);
      //formRef.current.reset();
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
        <InputText name="title" label="Pergunta" />

        <InputDate
          name="expire"
          label="Data/Hora encerramento"
          handleDateChange={setSelectedDate}
        />

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
