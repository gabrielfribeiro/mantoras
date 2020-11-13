import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav } from './styles';
import { ImExit } from 'react-icons/im';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Nav>
        <NavLink to="/labs" activeClassName="active">
          <span>Laboratórios</span>
        </NavLink>
        <NavLink to="/reserve-lab" activeClassName="active">
          <span>Reservar Laboratórios</span>
        </NavLink>
        <NavLink to="/reserves" activeClassName="active">
          <span>Minhas Reservas</span>
        </NavLink>
      </Nav>
      <Nav style={{ position: 'absolute', bottom: 50, width: '100%' }}>
        <NavLink to={'/'} activeClassName="active">
          <ImExit />
          <span>Sair</span>
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Sidebar;
