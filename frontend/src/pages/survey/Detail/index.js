import React from 'react';
import styled from 'styled-components';

import DefaultDetailsImage from '../../../assets/images/default-details.png';

const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 24px;
`;

const Topo = styled.div`
  display: flex;

  div {
    width: 50%;
    padding: 20px;

    h3 {
      font-size: 24px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      font-weight: normal;
      line-height: 22px;
      letter-spacing: 0.1em;
      margin-top: 30px;
    }
  }

  div + div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    span {
      position: absolute;
      top: 25px;
      right: 90px;
      padding: 6px;
      background: ${props => (props.past ? '#FD3838' : '#0fbd20')};
      font-weight: 400;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const Answers = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    width: 100%;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    padding: 0 20px;
  }

  ul {
    margin-top: 20px;
    margin-bottom: 40px;
    width: 100%;
  }

  button {
    width: 100%;
    max-width: 600px;
    height: 50px;
    border: 0;
    background: #00434c;
    margin-bottom: 40px;
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

const Option = styled.li`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background: #f3f7f8;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 12px;
  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  align-items: center;
  justify-content: baseline;

  &:hover {
    background: #dde0e0;
    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.25);
  }

  label {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
  }

  input {
    margin: 0 20px;
    position: relative;
    cursor: pointer;

    &::before {
      position: absolute;
      top: -4px;
      left: -4px;
      content: '';
      width: 20px;
      height: 20px;
      background: #f3f7f8;
      border: 2px solid #00434c;
      border-radius: 4px;
    }
  }

  input:checked::before {
    background: #00434c;
  }
`;

const Details = () => {
  const handleClick = e => {
    console.log(e.target);
  };

  return (
    <div className="container">
      <Title>Enquete</Title>
      <Topo>
        <div>
          <h3>Qual o seu editor preferido?</h3>
          <p>
            Atualmente há uma grande variedade de editores para ajudar na
            programação, o que gera dúvidas para quem está començando. Participe
            da enquete selecionando uma das opções abaixo.
          </p>
        </div>
        <div>
          <span>ANDAMENTO</span>
          <img src={DefaultDetailsImage} alt="" />
        </div>
      </Topo>
      <Answers>
        <h4>Marque sua resposta:</h4>
        <ul>
          <Option onClick={handleClick}>
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">VS Code</label>
          </Option>
          <Option>
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">Vim</label>
          </Option>
          <Option>
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">NetBeans</label>
          </Option>
          <Option>
            <input type="radio" name="radio" id="radio4" />
            <label htmlFor="radio4">Sublime</label>
          </Option>
          <Option>
            <input type="radio" name="radio" id="radio5" />
            <label htmlFor="radio5">Notepad++</label>
          </Option>
        </ul>
        <button type="button">Enviar</button>
      </Answers>
    </div>
  );
};

export default Details;
