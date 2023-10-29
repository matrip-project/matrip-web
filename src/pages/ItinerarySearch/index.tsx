import React, { useState } from 'react';
import { HiMapPin, HiMiniMagnifyingGlass, HiPencil } from 'react-icons/hi2';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Post from '../../components/Post';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './ItinerarySearchStyle';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const ItinerarySearch: React.FC = () => {
  // serch
  const [searchInput, setSearchInput] = useState('');
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchInput(input);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getValue = (e: any) => {
    setInput(e.target.value.toLowerCase());
  };

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

  // people
  const [peopleInput, setPeopleInput] = useState(2);

  const handleMinusClick = () => {
    if (peopleInput > 1) {
      setPeopleInput(peopleInput - 1);
    }
  };

  const handlePlusClick = () => {
    setPeopleInput(peopleInput + 1);
  };

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <ms.MainBoxHeader>
          <ms.SearchWriteBox>
            <ms.SearchBox>
              <ms.SearchInput
                type='search'
                placeholder='여행장소를 입력해주세요!'
                id='searchInput'
                value={input}
                onChange={getValue}
                onKeyDown={handleKeyPress}
              />
              <ms.SearchBtn
                className='searchIcon'
                type='submit'
                onClick={handleSearch}
              >
                <HiMiniMagnifyingGlass size='24' color='gray' />
              </ms.SearchBtn>
            </ms.SearchBox>
          </ms.SearchWriteBox>

          <ms.SearchPlacePeopleBox>
            <ms.DateBoxBtn onClick={handleDateBoxBtnClick}>
              {formatSelectedDate()}
            </ms.DateBoxBtn>

            <ms.NumberPeople>
              <ms.NumberPeopleP>인원</ms.NumberPeopleP>

              <ms.NumberPeopleCount>
                <ms.NumberPeopleMinus onClick={handleMinusClick}>
                  <AiOutlineMinus />
                </ms.NumberPeopleMinus>
                <ms.NumberPeopleCountText>
                  {peopleInput}
                </ms.NumberPeopleCountText>
                <ms.NumberPeoplePlus onClick={handlePlusClick}>
                  <AiOutlinePlus />
                </ms.NumberPeoplePlus>
              </ms.NumberPeopleCount>
            </ms.NumberPeople>
          </ms.SearchPlacePeopleBox>
          {datePickerVisible && (
            <DateRangePicker
              editableDateInputs={true}
              onChange={handleRangeChange}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
            />
          )}

          <ms.locationContainer>
            <ms.locationBox>
              <HiMapPin size='24' />
              <ms.marginzeroP>
                {' '}
                현위치 : 서울 마포구 마포대로 122
              </ms.marginzeroP>
            </ms.locationBox>
          </ms.locationContainer>
        </ms.MainBoxHeader>

        <ms.postContainer>
          <Post searchInput={searchInput} />
          <ms.WriteLink to={'/ItineraryInfo'}>
            <ms.WriteBtn>
              <HiPencil size='24' color='white'></HiPencil>
            </ms.WriteBtn>
          </ms.WriteLink>
        </ms.postContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default ItinerarySearch;
