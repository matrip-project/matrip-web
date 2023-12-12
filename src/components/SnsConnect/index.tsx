import React, {useState, ChangeEvent} from 'react';
import styled from 'styled-components';
import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci';
import {addUserSocialLink, deleteUserSocialLink} from '../../apis/api/editProfile';


interface Props {
    fields: any;
    setFields: (fields: string[]) => void;
}

const SnsConnect: React.FC<Props> = ({fields, setFields}) => {
    const id = Number(sessionStorage.getItem('myId'));

    const handleAddEmptyField = () => {
        setFields([...fields, '']);
    };

    const handleInputChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newFields = [...fields];
        const newField = event.target.value;
        newFields[index] = newField;
        setFields(newFields);
    };

    const handleAddField = async () => {
        if (fields.length > 0) {
            const lastField = fields[fields.length - 1];
            if (lastField !== '') {
                const res = await addUserSocialLink(id, lastField);
            }
        }
        setFields([...fields, '']);
    };

    const handleRemoveField = async (index: number) => {
        if (fields.length > 0) {
            const removedField = fields[index];
            const newFields = [...fields];
            newFields.splice(index, 1);
            setFields(newFields);
            const res = await deleteUserSocialLink(removedField.id);
        }
    };

    return (
        <>
            {fields.map((field: { id: number, value: string }, index: number) => (
                <InputContainer key={index}>
                    <InputField value={field.value} onChange={handleInputChange(index)}/>
                    {index === fields.length - 1 && (
                        <>
                            <AddButton onClick={handleAddField}>
                                <CiCirclePlus size={23}/>
                            </AddButton>

                            <RemoveButton onClick={() => handleRemoveField(index)}>
                                <CiCircleMinus size={23}/>
                            </RemoveButton>

                        </>
                    )}
                </InputContainer>
            ))}
            {fields.length === 0 &&
                <NothaveItems>
                    <FirstButton onClick={handleAddEmptyField}>SNS 연결하기</FirstButton>
                </NothaveItems>

            }
        </>
    );
};


export default SnsConnect;

const NothaveItems= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const FirstButton = styled.button`
    border: 1px solid ${props => props.theme.colors.neutral1};
    width: 120px;
    height: 30px;
    border-radius: 30px;
    background-color: transparent;
`;

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
