import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import { Container, Content, Icon, AddIcon } from './styles';

const Header = () => {
  return (
    <Container>
      <Content maxWidth="lg">
        <nav>
          <strong>GoSurvey</strong>
        </nav>

        <aside>
          <Link to="/">
            <Icon />
          </Link>
          <Link to="/">
            <AddIcon />
          </Link>
          <Avatar
            alt="Usuário"
            src="https://api.adorable.io/avatars/190/abott@suss.png"
          />
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
