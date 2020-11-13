import styled from 'styled-components'

import theme from '../../assets/styles'

interface NavProps {
  bottom?: boolean
}

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${theme.colors.blue[200]};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  color: ${theme.colors.white};
  grid-area: sidenav;
  height: 90vh;
  overflow-y: auto;
  position: fixed;
  transition: all 0.6s ease-in-out;
  transform: ${props =>
    props.isOpen ? 'translateX(0)' : 'translateX(-350px)'};
  z-index: 2;
  width: 350px;
`

export const Logo = styled.div`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  display: flex;
  min-height: 105px;
`

export const Nav = styled.div<NavProps>`
  > a,
  div {
    display: flex;
    align-items: center;
    color: ${theme.colors.gray[200]};
    padding: 25px 25px 25px 40px;
    text-decoration: none;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      background-color: ${theme.colors.gray[700]};
      transition: all 0.2s ease-in-out;
    }

    > img {
      height: 30px;
      width: 30px;
    }

    > span {
      font: 500 18px;
      padding-left: 20px;
    }
  }
`
