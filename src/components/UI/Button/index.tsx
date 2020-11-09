import { shade, tint } from 'polished';
import styled, { css } from 'styled-components';
import theme from '../../../assets/styles';

interface Props {
  size: 'small' | 'default' | 'big' | 'custom';
  color?: 'primary' | 'cancel' | 'cancelWithoutWidth';
  full?: boolean;
  loading?: boolean;
  inline?: boolean;
}

const sizes = {
  small: css`
    border-radius: 8px;
    font-size: 14px;
    padding: 8px;
  `,

  default: css`
    border-radius: 8px;
    font-size: 16px;
    padding: 15px;
  `,

  big: css`
    border-radius: 10px;
    font-size: 20px;
    padding: 17px;
  `,
  custom: css`
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
    width: 100%;
    margin-top: 50px;
  `,
};

const colors = {
  primary: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.gray[700]};
    &:hover {
      background: ${shade(0.1, theme.colors.primary)};
    }
  `,

  cancel: css`
    background: transparent;
    border: 1px solid ${theme.colors.gray[400]};
    color: ${theme.colors.gray[400]};
    width: 120px;
    margin-right: 15px;
    &:hover {
      background: ${tint(0.8, theme.colors.gray[400])};
    }
  `,
  cancelWithoutWidth: css`
    background: transparent;
    border: 1px solid ${theme.colors.gray[400]};
    color: ${theme.colors.gray[400]};
    margin-right: 15px;
    &:hover {
      background: ${tint(0.8, theme.colors.gray[400])};
    }
  `,
};

const ButtonStyled = styled.button.attrs<Props>((props) => ({
  disabled: props.disabled || !!props.loading,
  loading: props.loading ? 1 : 0,
}))<Props>``;

export default styled(ButtonStyled)`
  align-items: center;
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.gray[700]};
  cursor: pointer;
  font-weight: bold;
  display: ${(props) => (props.inline ? 'inline-block' : 'flex')};
  justify-content: center;
  transition: background-color 0.2s, color 0.2s;
  width: ${(props) => (props.full ? '100%' : '')};
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(props) => (props.size ? sizes[props.size] : sizes.default)}
  ${(props) => (props.color ? colors[props.color] : colors.primary)}
`;
