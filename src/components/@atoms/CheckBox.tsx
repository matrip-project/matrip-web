import React, { useState } from 'react';
import Text from '../@atoms/Text';
import styled from 'styled-components';

type CheckBoxProps = {
    label: string;
    isChecked: boolean;
    handleCheck: () => void;
  };

const CheckBox: React.FC<CheckBoxProps> = ({label, isChecked, handleCheck}) => {

  return (
    <CheckBoxContainer>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <Text color='black' type='subtitle1'>{label}</Text>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;