import styled from 'styled-components'
import theme from '../../assets/styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${theme.colors.primary};
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
`
export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const Search = styled.input`
  width: 380px;
  height: 30px;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  border-radius: 10px;

  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`
export const Logo = styled.div`
  >img {
    width: 70px;
    height: 70px;
  }
`
