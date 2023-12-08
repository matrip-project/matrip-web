import React, { useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import Select, { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import dropdownIcon from '../../asset/dropdownIcon.svg';
import {
  setSelectedAge,
  setSelectedEndDate,
  setSelectedStartDate,
  setSelectedStatus
} from '../../redux/modules/searchSlice';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  // date
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);

  const handleAgeChange = (selectedOption: any) => {
    const numericValue = parseInt(selectedOption.value);
    dispatch(setSelectedAge(numericValue));
  };

  const handleStatusChange = (selectedOption: any) => {
    const statusValue =
      selectedOption.value === '모집마감' ? 'DELETED' : 'ACTIVE';
    dispatch(setSelectedStatus(statusValue));
  };

  const handleDateBoxBtnClick = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  const handleRangeChange = (ranges: any) => {
    const selectedRange = ranges.selection;

    setDateRange([selectedRange]);

    const updatedStartDate = new Date(selectedRange.startDate);
    const updatedEndDate = new Date(selectedRange.endDate);

    updatedStartDate.setDate(updatedStartDate.getDate() + 0.9);
    updatedEndDate.setDate(updatedEndDate.getDate() + 1.1);

    dispatch(setSelectedStartDate(updatedStartDate.toISOString()));
    dispatch(setSelectedEndDate(updatedEndDate.toISOString()));
  };
  return (
    <>
      <SelectBox>
        <SelectBtn>
          <Select
            options={genderOptions}
            placeholder='성별'
            components={{ IndicatorSeparator: () => null }}
          />
        </SelectBtn>
        <SelectBtn>
          <Select
            options={age}
            placeholder='나이'
            components={{ IndicatorSeparator: () => null }}
            onChange={handleAgeChange}
          />
        </SelectBtn>

        <SelectBtn>
          <DateComponent onClick={handleDateBoxBtnClick}>
            <DateComponentText>
              날짜 <img src={dropdownIcon} />
            </DateComponentText>
          </DateComponent>
        </SelectBtn>

        <SelectBtn>
          <Select
            options={Recruitment}
            placeholder='모집상태'
            components={{ IndicatorSeparator: () => null }}
            onChange={handleStatusChange}
          />
        </SelectBtn>
      </SelectBox>
      <DateComponentcalendar>
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
      </DateComponentcalendar>
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
  white-space: nowrap;

  .css-qbdosj-Input {
    width: 100%;
    z-index: -1;
  }

  .css-1fdsijx-ValueContainer {
    padding-right: 0px;
  }
`;

const SelectBtn = styled.div`
  width: 80px;
  height: 38px;
`;

const DateComponent = styled.div`
  border-radius: 5px 5px 5px 5px;
  border: 1px solid hsl(0, 0%, 80%);
  background: #fff;
  width: 100%;
  height: 38px;
  text-align: center;
  align-items: center;
  display: flex;
  position: relative;
`;

const DateComponentText = styled.div`
  justify-content: center;
  text-align: left;
  align-items: center;
  margin-left: 15px;

  & img {
    margin-left: 15px;
  }
`;

const DateComponentcalendar = styled.div`
  z-index: 1;
`;
