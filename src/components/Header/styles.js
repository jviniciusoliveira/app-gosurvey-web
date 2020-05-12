import styled from 'styled-components';

import MContent from '@material-ui/core/Container';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export const Container = styled.header`
  background: #02485f;
  padding: 0 30px;
  margin-bottom: 40px;
`;

export const Content = styled(MContent)`
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 55%;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    display: flex;
    align-items: center;

    a {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Icon = styled(SettingsIcon)`
  color: #fff;
  margin-right: 20px;
  font-size: 30px;
`;

export const AddIcon = styled(AddCircleIcon)`
  color: #fff;
  margin-right: 20px;
  font-size: 30px;
`;
