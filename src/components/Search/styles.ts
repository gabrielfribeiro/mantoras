import styled from 'styled-components'

import theme from '../../assets/styles'

export const InputContainer = styled.div`
  background: ${theme.colors.gray[100]};
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px 10px 10px 0px;
  border-radius: 5px;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
`

export const IconContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  opacity: 0.5;
`
