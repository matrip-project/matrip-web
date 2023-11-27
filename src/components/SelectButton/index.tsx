import React, { useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import Select, { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { DateRange, DateRangePicker } from 'react-date-range';
import dropdownIcon from '../../asset/dropdownIcon.svg';

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
  // date
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);

  const handleDateBoxBtnClick = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  const handleRangeChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  const formatSelectedDate = () => {
    const { startDate, endDate } = dateRange[0];
    if (startDate && endDate) {
      const formattedStartDate = startDate.toLocaleDateString();
      const formattedEndDate = endDate.toLocaleDateString();
      return `${formattedStartDate} ~ ${formattedEndDate}`;
    }
    return '날짜';
  };

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
      }),
      singleValue: (provided, state) => ({
        ...provided
      })
    }),
    []
  );

  return (
    <>
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

        <DateComponent onClick={handleDateBoxBtnClick}>
          <DateComponentText>
            날짜 <img src={dropdownIcon} />
          </DateComponentText>
          <DateComponentcalendar></DateComponentcalendar>
        </DateComponent>

        <Select
          options={Recruitment}
          placeholder='모집상태'
          styles={customStyles}
          components={{ IndicatorSeparator: () => null }}
        />
      </SelectBox>
      {datePickerVisible && (
        <DateRange
          editableDateInputs={true}
          onChange={handleRangeChange}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          months={1}
          direction='horizontal'
        />
      )}
    </>
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

const DateComponent = styled.div`
  border-radius: 5px 5px 0px 0px;
  border: 1px solid var(--box-stroke, #d9d9d9);
  background: #fff;
  width: 60px;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  position: relative;
`;

const DateComponentText = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const DateComponentcalendar = styled.div`
  top: 200px;
`;
