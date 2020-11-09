import React from 'react';
import { ContainerTitle, Text } from './styles';

interface titleProps {
  text: string;
}

const Title: React.FC<titleProps> = ({ text }) => {
  return (
    <ContainerTitle>
      <Text>{text}</Text>
    </ContainerTitle>
  );
};

export { Title };
