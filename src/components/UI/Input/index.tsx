import React, { useEffect, useRef } from 'react';
import ReactInputMask, { Props as InputMaskProps } from 'react-input-mask';

import { useField } from '@unform/core';

import { Container } from './styles';

interface Props<Multiline = false, Mask = false> {
  label?: string;
  width?: string;
  marginRight?: string;
  note?: string;
  name: string;
  multiline?: Multiline;
  hasMask?: Mask;
}

type InputProps = JSX.IntrinsicElements['input'] & Props<false>;
type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props<true>;
type IInputMaskProps = Props<false, true> & InputMaskProps;

const Input: React.FC<InputProps | TextAreaProps | IInputMaskProps> = ({
  label,
  note,
  name,
  multiline,
  hasMask,
  width,
  marginRight,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  const props = {
    ...rest,
    ref: inputRef,
    id: fieldName,
    'aria-label': fieldName,
    defaultValue,
  } as InputProps | TextAreaProps | IInputMaskProps;

  const getInput = () => {
    if (multiline) return <textarea {...(props as TextAreaProps)} />;
    if (hasMask) return <ReactInputMask {...(props as IInputMaskProps)} />;
    return <input {...(props as InputProps)} />;
  };

  return (
    <Container marginRight={marginRight} width={width} isErrored={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      {note && <small>{note}</small>}

      {getInput()}

      {error && <span>{error}</span>}
    </Container>
  );
};

export default Input;
