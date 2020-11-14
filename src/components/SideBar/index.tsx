import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav } from './styles';
import { ImExit } from 'react-icons/im';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { RiBookOpenLine, RiSaveLine } from 'react-icons/ri';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Nav>
        <NavLink to="/list-labs" activeClassName="active">
          <HiOutlineDesktopComputer size="25px" />
          <span>Laboratórios</span>
        </NavLink>
        <NavLink to="/reserve-lab" activeClassName="active">
          <RiBookOpenLine size="25px" />
          <span>Reservar Laboratórios</span>
        </NavLink>
        <NavLink to="/my-reserves" activeClassName="active">
          <RiSaveLine size="25px" />
          <span>Minhas Reservas</span>
        </NavLink>
      </Nav>
      <Nav style={{ position: 'absolute', bottom: 50, width: '100%' }}>
        <NavLink to={'/'} activeClassName="active">
          <ImExit size="25px" />
          <span>Sair</span>
        </NavLink>
      </Nav>
    </Container>
  );
};

export default Sidebar;
