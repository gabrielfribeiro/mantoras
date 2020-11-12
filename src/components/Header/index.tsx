import React from 'react';
import { Container, IconContainer } from './styles';
import { FaRegUserCircle } from 'react-icons/fa';
const Header: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <FaRegUserCircle size="50px" />
      </IconContainer>
    </Container>
  );
};

export { Header };
