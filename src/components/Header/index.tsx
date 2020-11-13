import React from 'react';
import {
  Container,
  IconContainer,
  SearchContainer,
  Search,
  Logo,
} from './styles';
import { FaRegUserCircle } from 'react-icons/fa';
import { Form } from '@unform/web';
import logo from '../../assets/images/icons/programming.png';

const Header: React.FC = () => {
  const handleSubmit = () => {
    console.log('Busca');
  };

  return (
    <Container>
      <SearchContainer>
        <Logo>
          <img src={logo} />
        </Logo>
        <Form onSubmit={handleSubmit}>
          <Search placeholder="Pesquisa..." />
        </Form>
      </SearchContainer>
      <IconContainer>
        <FaRegUserCircle size="50px" color="white" />
      </IconContainer>
    </Container>
  );
};

export { Header };
