import React, { ChangeEvent } from 'react';
import { styled } from 'styled-components';
import InputLabel from '../@atoms/InputLabel';
import { Spacer, Text } from '../@atoms';

type FormType = 'text' | 'password' | 'date' | 'email';

type FormInputProps = {
  value: string;
  formType: FormType;
  name: string;
  label?: string;
  isCompulsory?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
};

function FormInput({ formType, value, onChange, placeHolder, name, label, isCompulsory }: FormInputProps) {
  return (
    <div>
      {label &&
      <InputLabelWithOption>
        <InputLabel label={label}/>
        <Spacer width={10}/>
        {isCompulsory&&
          <Text color='primary'>필수</Text>
        }
      </InputLabelWithOption>
      }
      <Input
        name={name}
        type={formType}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
      />
    </div>
  );
}

const InputLabelWithOption = styled.div`
  display: flex;
  flex-direction: row;
`;

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
