import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';



interface Props {
    fields: string[];
    setFields: (fields: string[]) => void;
  }

const SnsConnect: React.FC<Props> = ({ fields, setFields }) => {

  const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, '']);
  };

  const handleRemoveField = (index: number) => {
    if (fields.length > 1) {
      const newFields = [...fields];
      newFields.splice(index, 1);
      setFields(newFields);
    }
  };

  return (
    <>
      {fields.map((field, index) => (
        <InputContainer key={index}>
          <InputField value={field} onChange={handleInputChange(index)} />
          {index === fields.length - 1 && (
            <>
              <AddButton onClick={handleAddField}>
                <CiCirclePlus size={23} />
              </AddButton>
              {fields.length > 1 &&
                <RemoveButton onClick={() => handleRemoveField(index)}>
                  <CiCircleMinus size={23}/>
                </RemoveButton>
              }
            </>
          )}
        </InputContainer>
      ))}
    </>
  );
};


export default SnsConnect;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const InputField = styled.input`
  flex: 1;
  height: 30px;
  margin-bottom: 10px;
  border: none;
  width: 100%;
  border-bottom: 1px solid grey;
`;

const AddButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  position: absolute;
  right: 0px;
  background-color: transparent;
  border: none;
  z-index: 999;
`;

const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  position: absolute;
  right: 40px;
  background-color: transparent;
  border: none;
  z-index: 999;
`;
