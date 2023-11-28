import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';



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

  return (
    <div>
      {fields.map((field, index) => (
        <div key={index}>
          <InputField value={field} onChange={handleInputChange(index)} />
          {index === fields.length - 1 && <AddButton onClick={handleAddField}>+</AddButton>}
        </div>
      ))}
    </div>
  );
};

export default SnsConnect;

const InputField = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;