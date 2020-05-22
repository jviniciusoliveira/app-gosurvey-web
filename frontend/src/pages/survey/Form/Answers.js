import React, { useState } from 'react';
import { Scope } from '@unform/core';
import Input from '../../../components/Input';
import IconAdd from '../../../assets/images/icon-add.png';

const Answers = () => {
  const [fieldAnswer, setFieldAnswer] = useState([
    <Input key={1} name={`answer-1}`} />,
  ]);

  const handleClick = () => {
    const field = fieldAnswer.length + 1;

    setFieldAnswer([
      ...fieldAnswer,
      <Input key={field} name={`answer-${field}`} />,
    ]);
  };

  return (
    <Scope path="answers">
      <div>{fieldAnswer}</div>
      <button className="btn-add" type="button" onClick={handleClick}>
        <img src={IconAdd} alt="" />
      </button>
    </Scope>
  );
};

export default Answers;
