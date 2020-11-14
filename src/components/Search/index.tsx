import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { debounce } from 'lodash';

import { InputContainer, IconContainer, Input } from './styles';

interface ISearchInputProps {
  onChange: (value: string) => void;
}

const Search: React.FC<ISearchInputProps> = ({ onChange }) => {
  const debounceOnChange = debounce((value: string) => onChange(value), 500);

  return (
    <InputContainer>
      <IconContainer>
        <FiSearch size="20" />
      </IconContainer>
      <Input
        onChange={(event) => debounceOnChange(event.target.value)}
        placeholder="Buscar..."
      />
    </InputContainer>
  );
};

export { Search };
