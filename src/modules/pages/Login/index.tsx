import { Form } from '@unform/web';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { Title } from '../../../components/UI/Title';
import {
  Container,
  LeftContainer,
  ContainerLogo,
  Logo,
  RightContainer,
  FormContainer,
} from './styles';

const Login: React.FC = () => {
  const handleSubmit = () => {
    console.log('form');
  };
  const history = useHistory();

  return (
    <Container>
      <LeftContainer>
        <ContainerLogo>
          <Logo>
            MANTORAS
            <p>Sua nova maneira de reservar um laboratorio de informatica!</p>
          </Logo>
        </ContainerLogo>
      </LeftContainer>
      <RightContainer>
        <Title text="Login" />
        <FormContainer>
          <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
            <Input
              name="email"
              label="Email *"
              placeholder="Digite seu email..."
              width="100%"
            />
            <Input
              name="password"
              label="Senha *"
              placeholder="Digite seu senha..."
              width="100%"
              type="password"
            />
            <Button
              size="custom"
              type="submit"
              onClick={() => history.push('/list-user')}
            >
              Entrar
            </Button>
          </Form>
        </FormContainer>
      </RightContainer>
    </Container>
  );
};

export { Login };
