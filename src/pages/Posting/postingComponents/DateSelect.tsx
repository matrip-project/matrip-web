import { useState } from 'react';
import styled from 'styled-components';
import { addDays } from 'date-fns';
import { ReactComponent as Calendar } from '../../../asset/calendar.svg';
import { GoHorizontalRule } from 'react-icons/go';
import { PostingContainer, StateProps } from '..';
import Label from './Label';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/modules/postSlice';
import DatePick from '../../../components/DatePick';

function DateSelect({ dataInput }: StateProps) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
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

  const handleCalendarClick = () => {
    setShow((prev) => !prev);
    formatSelectedDate();
  };

  const formatSelectedDate = () => {
    const { startDate, endDate } = dateRange[0];

    if (startDate && endDate) {
      const formattedStartDate = dayjs(startDate).format('YYYY-MM-DD');
      const formattedEndDate = dayjs(endDate).format('YYYY-MM-DD');

      if (dataInput) {
        dispatch(
          setData({
            ...dataInput,
            startDate: formattedStartDate,
            endDate: formattedEndDate
          })
        );
      }
    }
  };

  return (
    <PostingContainer>
      <Label label='여행 일정' essential={true} />
      <DateButton onClick={handleCalendarClick}>
        <Calendar />
        <DateWrap>
          <p>{dataInput?.startDate}</p>
          <GoHorizontalRule />
          <p>{dataInput?.endDate}</p>
        </DateWrap>
      </DateButton>
      {show && (
        <DatePick dateRange={dateRange} handleRangeChange={handleRangeChange} />
      )}
    </PostingContainer>
  );
}

const DateButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 36px;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
`;

const DateWrap = styled.div`
  ${(props) => props.theme.texts.tapTitle1}
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default DateSelect;
