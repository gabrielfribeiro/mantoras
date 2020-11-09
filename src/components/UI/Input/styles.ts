import styled, { css } from 'styled-components'


interface ContainerProps {
  isErrored: boolean
  width?: string
  marginRight?: string
}

export const Container = styled.div<ContainerProps>`
  margin-bottom: 25px;
  width: ${props => props.width};
  margin-right: ${props => props.marginRight};
  label {
    display: block;
    margin-bottom: 8px;
  }
  > small {
    font-size: 13px;
    display: block;
    margin-bottom: 11px;
    opacity: 0.6;
  }
  > input,
  > textarea {
    border: 1px solid #505559;
    display: block;
    margin-top: 3px;
    padding: 10px;
    resize: vertical;
    transition: border-color 0.2s;
    width: 100%;
    border-radius: 7px;
    &[disabled] {
      background: #505559;
      cursor: not-allowed;
    }
    &::placeholder {
      color: #505559;
    }
    ${props =>
      props.isErrored &&
      css`
        border-color: red;
      `}
  }
  > textarea {
    min-height: 200px;
  }
  > span {
    color: red;
    font-size: 14px;
    display: block;
    margin-top: 5px;
  }
`
