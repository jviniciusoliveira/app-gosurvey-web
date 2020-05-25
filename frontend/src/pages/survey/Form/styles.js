import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';
import { Button as MaterialButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export const Title = styled(Typography)`
  text-align: center;
`;

export const SubTitle = styled(Typography)`
  text-align: center;
  margin-top: 30px !important;
  margin-bottom: 15px !important;
`;

export const Form = styled(UnForm)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Button = styled(MaterialButton)`
  margin-top: 40px !important;
  margin-bottom: 40px !important;
`;
