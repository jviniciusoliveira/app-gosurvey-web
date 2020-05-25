import React, { useState } from 'react';
import { Scope } from '@unform/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../../components/Input';

const Answers = () => {
  const [fieldAnswer, setFieldAnswer] = useState([
    <Input key={1} name={`answer-1`} label="Opção 1" />,
  ]);

  const handleClick = () => {
    const field = fieldAnswer.length + 1;

    setFieldAnswer([
      ...fieldAnswer,
      <Input key={field} name={`answer-${field}`} label={`Opção ${field}`} />,
    ]);
  };

  return (
    <Scope path="answers">
      {fieldAnswer}
      <Fab size="medium" color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
    </Scope>
  );
};

export default Answers;
