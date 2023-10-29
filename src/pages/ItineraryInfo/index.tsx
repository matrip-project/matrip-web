import React, { ChangeEvent, useState } from 'react';
import { BsImages, BsCalendar } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import ko from 'date-fns/locale/ko';
import dayjs from 'dayjs';
import * as iic from './itineraryInfoStyle';
import * as gs from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import AddMember from '../../components/AddMember';
import './index.scss';
import Map from './itineraryComponents/Map';
import { Link } from 'react-router-dom';

const ItineraryInfo: React.FC = () => {
  const center = { lat: 37.5665, lng: 126.978 };
  const zoom = 13;
  // 수정인 경우에는 데이터 가져와서 초기값에 넣어주기
  const [input, setInput] = useState({
    title: '',
    start: dayjs(new Date()).format('YYYY.MM.DD'),
    end: dayjs(addDays(new Date(), 1)).format('YYYY.MM.DD'),
    introduction: '',
    location: '',
    imgUrl: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  // 날짜
  const [datePicker, setDatePicker] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);

  const handleRangeChange = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  const formatSelectedDate = () => {
    const { startDate, endDate } = dateRange[0];

    if (startDate && endDate) {
      const formattedStartDate = dayjs(startDate).format('YYYY.MM.DD');
      const formattedEndDate = dayjs(endDate).format('YYYY.MM.DD');

      setInput({
        ...input,
        ['start']: formattedStartDate,
        ['end']: formattedEndDate
      });
    }
  };

  const handleCalendarClick = () => {
    setDatePicker(!datePicker);
    formatSelectedDate();
  };

  return (
    <gs.MainContainer>
      <Header edit={true} />
      <gs.MainBox>
        <Link to={'/mapSearch'} style={{ width: '100%' }}>
          <Map center={center} zoom={zoom} />
        </Link>
        <iic.FormBox>
          <iic.InputWrap className='imgWrap'>
            <iic.InputLabel>
              <div>대표 이미지</div>
              <iic.InputBtn type='button'>
                <BsImages size='20' color='#9c9c9c' />
              </iic.InputBtn>
            </iic.InputLabel>
          </iic.InputWrap>

          <iic.InputWrap>
            <iic.InputLabel>제목</iic.InputLabel>
            <FormInput
              name='title'
              value={input.title}
              onChange={handleInputChange}
            />
          </iic.InputWrap>

          <iic.InputWrap className='imgWrap'>
            <iic.InputLabel>
              <div>날짜</div>
              <iic.InputBtn type='button' onClick={handleCalendarClick}>
                <BsCalendar size='20' color='#9c9c9c' />
              </iic.InputBtn>
            </iic.InputLabel>
            {datePicker && (
              <DateRange
                locale={ko}
                editableDateInputs={true}
                onChange={handleRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={dateRange}
                dateDisplayFormat={'yyyy.MM.dd'}
                months={2}
                direction='horizontal'
              />
            )}
            {input.start} ~ {input.end}
          </iic.InputWrap>

          <iic.InputWrap>
            <iic.InputLabel>소개</iic.InputLabel>
            <FormInput
              name='introduction'
              value={input.introduction}
              onChange={handleInputChange}
            />
          </iic.InputWrap>

          <iic.InputWrap>
            <iic.InputLabel>일행 추가</iic.InputLabel>
            <AddMember />
          </iic.InputWrap>
        </iic.FormBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default ItineraryInfo;
