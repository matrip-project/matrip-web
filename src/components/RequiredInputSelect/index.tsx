import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import {InputLabel, Spacer, Text} from '../@atoms';

interface Props {
  onSelectedChange: (selected: number) => void;
  label: string;
  values: string[];
}

const RequiredInputSelect: React.FC<Props> = ({ onSelectedChange, label, values }) => {
  const [selected, setSelected] = useState(0);
  const handleChange = (index: number) => {
    setSelected(index);
    onSelectedChange(index);
  };

  return (
    <div>
      <InputLabel label={label}/>  
      <Spacer height={13}/>
      <InputItemContainer>
        {values.map((val, index) => (
          <SelectContainer key={index}>
            <StyledInput
              type='radio'
              checked={selected === index}
              onChange={() => handleChange(index)}
            />
            <Text>{val}</Text>
            <Spacer width={10}/>
          </SelectContainer>
        ))}
      </InputItemContainer>
    </div>
  );
};

export default RequiredInputSelect;

const SelectContainer = styled.div`
  display: flex;
   flex-direction: row;
   align-items: center;
`;

const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${props => props.theme.colors.primary};
  }
`;

const InputItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`;