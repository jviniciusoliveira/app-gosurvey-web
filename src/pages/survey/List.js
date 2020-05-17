import React from 'react';
import styled from 'styled-components';

import DefaultImage from '../../assets/images/default-survey-img.png';
import SurveyImage from '../../assets/images/survey-img.jpg';
import mockSurveys from '../../tmp-mock-surveys';

const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 22px;
`;

const Card = styled.li`
  width: 270px;
  height: 360px;
  background: #f3f7f8;
  box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.25);
  position: relative;

  span {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 4px;
    background: ${props => (props.past ? '#FD3838' : '#0fbd20')};
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 138px;
  }

  div {
    padding: 20px;
    height: calc(100% - 138px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      font-size: 18px;
      font-weight: 300;
      line-height: 21px;
      margin-bottom: 13px;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      text-align: justify;
    }

    button {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background: ${props => (props.past ? '#7A7B7B' : '#00434c')};
      color: #f3f7f8;
      font-size: 16px;
      font-weight: bold;
      border: none;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 24px;
`;

const List = () => {
  return (
    <div className="container">
      <Title>Enquetes</Title>
      <Ul>
        {mockSurveys.map(survey => (
          <Card key={survey._id} past={survey.past} image={survey.image}>
            <span>{survey.past ? 'ENCERRADO' : 'ANDAMENTO'}</span>
            <img src={survey.image ? SurveyImage : DefaultImage} alt="" />
            <div>
              <h3>{survey.title}</h3>
              <p>{survey.description}</p>
              <button>{survey.past ? 'RESULTADO' : 'PARTICIPAR'}</button>
            </div>
          </Card>
        ))}
      </Ul>
    </div>
  );
};

export default List;
