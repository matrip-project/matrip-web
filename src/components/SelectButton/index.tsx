import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import { addDays } from 'date-fns';
import Select from 'react-select';
import styled from 'styled-components';
import dropdownIcon from '../../asset/dropdownIcon.svg';
import {
  setPlace,
  setSelectedAge,
  setSelectedEndDate,
  setSelectedStartDate,
  setSelectedStatus
} from '../../redux/modules/searchSlice';
import DatePick from '../DatePick';

const place = [
  { value: '서울', label: '서울' },
  { value: '경기', label: '경기' },
  { value: '인천', label: '인천' },
  { value: '부산', label: '부산' },
  { value: '강원', label: '강원' },
  { value: '제주', label: '제주' },
  { value: '충남', label: '충남' },
  { value: '충북', label: '충북' },
  { value: '전남', label: '전남' },
  { value: '전북', label: '전북' },
  { value: '경남', label: '경남' },
  { value: '경북', label: '경북' }
];

const genderOptions = [
  { value: '남성', label: '남성' },
  { value: '여성', label: '여성' }
];

const age = [
  { value: 10, label: '10대' },
  { value: 20, label: '20대' },
  { value: 30, label: '30대' },
  { value: 40, label: '40대' },
  { value: 50, label: '50대' },
  { value: 60, label: '60대이상' }
];

const Recruitment = [
  { value: '모집중', label: '모집중' },
  { value: '모집마감', label: '모집마감' }
];

const SelectButton: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

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
    dispatch(setSelectedAge(selectedOption.value));
  };

  const handleStatusChange = (selectedOption: any) => {
    const statusValue =
      selectedOption.value === '모집마감' ? 'DELETED' : 'ACTIVE';
    dispatch(setSelectedStatus(statusValue));
  };

  const handlePlaceChange = (selectedOption: any) => {
    dispatch(setPlace(selectedOption.value));
  };

  const handleDateBoxBtnClick = () => {
    setDatePickerVisible(!datePickerVisible);
  };

  const handleRangeChange = (ranges: any) => {
    const selectedRange = ranges.selection;

    setDateRange([selectedRange]);

    const updatedStartDate = dayjs(selectedRange.startDate).format(
      'YYYY-MM-DD'
    );
    const updatedEndDate = dayjs(selectedRange.endDate).format('YYYY-MM-DD');

    dispatch(setSelectedStartDate(updatedStartDate));
    dispatch(setSelectedEndDate(updatedEndDate));
  };

  return (
    <>
      <SelectBox>
        {!location.includes('popularTravel') && (
          <SelectBtn>
            <StyledSelect
              options={place}
              placeholder='지역'
              components={{ IndicatorSeparator: () => null }}
              onChange={handlePlaceChange}
            />
          </SelectBtn>
        )}
        <SelectBtn>
          <StyledSelect
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
          <StyledSelect
            options={Recruitment}
            placeholder='모집상태'
            components={{ IndicatorSeparator: () => null }}
            onChange={handleStatusChange}
          />
        </SelectBtn>
      </SelectBox>
      <DateComponentcalendar>
        {datePickerVisible && (
          <DatePick
            dateRange={dateRange}
            handleRangeChange={handleRangeChange}
          />
        )}
      </DateComponentcalendar>
    </>
  );
};

export default SelectButton;

const SelectBox = styled.div`
  ${(props) => props.theme.texts.menuSelect};
  width: 90%;
  display: flex;
  gap: 6px;
  text-align: center;
  margin-bottom: 16px;
  white-space: nowrap;
`;

const SelectBtn = styled.div`
  ${(props) => props.theme.texts.menuNone};
  min-width: 80px;
  height: 38px;
`;

const StyledSelect = styled(Select).attrs({
  classNamePrefix: 'react-select'
})`
  .react-select__control {
    border: 1px solid ${(props) => props.theme.colors.neutral1};
    border-radius: 5px;
    cursor: pointer;
  }
  .react-select__menu {
    ${(props) => props.theme.texts.menuSelect};
  }
  .react-select__option--is-selected {
    background-color: ${(props) => props.theme.colors.primary};
  }
  .react-select__option--is-focused {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.neutral4};
  }
  .react-select__placeholder {
    ${(props) => props.theme.texts.menuNone};
  }
`;

const DateComponent = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  width: 100%;
  height: 38px;
  text-align: center;
  align-items: center;
  position: relative;
  cursor: pointer;
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
