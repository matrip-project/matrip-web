import React, { useMemo } from 'react';
import Select, { StylesConfig } from 'react-select';
import styled from 'styled-components';

const genderOptions = [
  { value: '남성', label: '남성' },
  { value: '여성', label: '여성' }
];

const age = [
  { value: '10대', label: '10대' },
  { value: '20대', label: '20대' },
  { value: '30대', label: '30대' },
  { value: '40대', label: '40대' },
  { value: '50대', label: '50대' },
  { value: '60대이상', label: '60대이상' }
];

const Recruitment = [
  { value: '모집중', label: '모집중' },
  { value: '모집마감', label: '모집마감' }
];

const SelectButton: React.FC = () => {
  const customStyles = useMemo<StylesConfig>(
    () => ({
      option: (provided, state) => ({
        ...provided,
        height: '30px',
        textAlign: 'center',
        alignItems: 'center'
      }),
      control: (provided, state) => ({
        ...provided
        // borderColor: state.isFocused ? '#D30065' : 'grey'
      }),
      singleValue: (provided, state) => ({
        ...provided
      })
    }),
    []
  );

  return (
    <SelectBox>
      <Select
        options={genderOptions}
        placeholder='성별'
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
      />
      <Select
        options={age}
        placeholder='나이'
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
      />
      <Select
        options={genderOptions}
        placeholder='날짜'
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
      />
      <Select
        options={Recruitment}
        placeholder='모집상태'
        styles={customStyles}
        components={{ IndicatorSeparator: () => null }}
      />
    </SelectBox>
  );
};

export default SelectButton;

const SelectBox = styled.div`
  ${(props) => props.theme.texts.menuSelect};
  display: flex;
  gap: 6px;
  text-align: center;
  color: gray;
  margin-bottom: 16px;
  padding: 0px 20px 0px 10px;
`;
