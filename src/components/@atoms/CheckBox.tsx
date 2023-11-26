import React, { useState, ChangeEvent } from 'react';
import Text from '../@atoms/Text';
import styled from 'styled-components';

type CheckBoxProps = {
    name?: string;
    label: string;
    contents?: string;
    isChecked: boolean;
    handleCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  };

const CheckBox: React.FC<CheckBoxProps> = ({label, isChecked, handleCheck, name, contents}) => {

  return (
    <CheckBoxContainer>
        <CheckBoxInput>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} name={name}/>
        </CheckBoxInput>
        <LabelContainer>
            <Text color='black' type='title2'>{label}</Text>
        </LabelContainer>
        <EmptySpace />
        <LabelContents>
            <Text type='body1' color='neutral3'>{contents}</Text>
        </LabelContents>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-template-rows: 30px 1fr;
`;

const CheckBoxInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
`;

const LabelContainer = styled.div`
    display: flex;
    align-items: center;
`;

const EmptySpace = styled.div`
    
`;

const LabelContents = styled.div`

`;