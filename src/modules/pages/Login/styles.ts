import styled from 'styled-components'
import background from '../../../assets/images/background.jpg'
import theme from '../../../assets/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  background: url(${background});
  background-size: auto;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
`;
export const Logo = styled.div`
  padding: 90px 0px 0px 0px;
  font-size: 30px;
  font-weight: 700;
  text-align: center;

  > p {
    margin-top: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  background-color: ${theme.colors.gray[200]}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-bottom: 20px;
`;

