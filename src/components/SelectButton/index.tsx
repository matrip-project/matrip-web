import React, { useMemo, useState } from 'react';
import { addDays } from 'date-fns';
import Select, { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { DateRange } from 'react-date-range';
import dropdownIcon from '../../asset/dropdownIcon.svg';
import {
  setSelectedAge,
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
    formatSelectedDate();
  };

  const handleRangeChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  const formatSelectedDate = () => {
    // const { startDate, endDate } = dateRange[0];
    // if (startDate && endDate) {
    //   const formattedStartDate = startDate.toLocaleDateString();
    //   const formattedEndDate = endDate.toLocaleDateString();
    //   return `${formattedStartDate} ~ ${formattedEndDate}`;
    // }
    // return '날짜';
  };
  console.log(dateRange[0]);

  return (
    <>
      <SelectBox>
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
  border-radius: 5px 5px 0px 0px;
  border: 1px solid var(--box-stroke, #d9d9d9);
  background: #fff;
  width: 100%;
  height: 100%;
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
  position: absolute;
  top: 310px;
  z-index: 1;

  // 오른쪽 구석의 화살표를 안보이게 한다.
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }

  // 달력 각 칸의 기본 스타일.
  .CalendarDay__default {
    border: none;
    border-radius: 50%;
    vertical-align: middle;
    outline: none;
  }

  // 달력 각 칸에 호버가 되었을 때 스타일
  .CalendarDay__default:hover {
    background: transparent;
    border: none;
    color: black;
    box-shadow: inset 0 0 0 1px black;
  }

  // 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 대한 스타일
  .CalendarDay__selected_span {
    background-color: #f7f7f7;
    border: none;
    color: black;
  }

  // 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 호버 혹은 클릭했을 시 스타일
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    color: black;
    background-color: #f7f7f7;
  }

  // 선택된 체크인 체크아웃 날짜에 대한 스타일
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: black;
    border: none;
    color: white;
  }

  // 블록된 날짜에 대한 스타일링
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    box-shadow: none;
    text-decoration: line-through;
  }

  // 선택될 범위에 대한 스타일링
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    color: black;
    background-color: #f7f7f7;
    border: none;
  }

  // 요일 표시 부분에 대한 스타일.
  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;
