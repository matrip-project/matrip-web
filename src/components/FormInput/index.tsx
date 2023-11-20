import React, { ChangeEvent } from 'react';
import { styled } from 'styled-components';

type FormType = 'text' | 'password' | 'date' | 'email';

type FormInputProps = {
  value: string;
  formType: FormType;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
};

function FormInput({ formType, value, onChange, placeHolder, name }: FormInputProps) {
  return (
    <Input
      name={name}
      type={formType}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-width: 0 0 1px 0;
  border-bottom-color: #9c9c9c;
  font-size: 14px;
  
  &:focus {
    outline: none;
  }
`;

export default FormInput;
