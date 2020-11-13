import React from 'react';
import { Header } from '../Header';
import Sidebar from '../SideBar';
import { Container, Main } from './styles';

const PageContent: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Sidebar isOpen />
      <Main>{children}</Main>
    </Container>
  );
};

export { PageContent };
