import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import fillterIcon from '../../asset/fillterIcon.svg';
import fillterIconNone from '../../asset/fillterIconNone.svg';
import {
  selectAge,
  selectEndDate,
  selectStartDate,
  selectStatus,
  reset,
  selectPlace
} from '../../redux/modules/searchSlice';
import { DataType } from '../../types/journeyData';
import PostCard from '../PostCard';
import NoPost from '../NoPost';
import SelectButton from '../SelectButton';
import { getFilteredList } from '../../apis/api/journey';

interface Journeys {
  data: DataType;
}

function PostListScroll({ data }: Journeys) {
  const dispatch = useDispatch();
  const place = useParams().place;
  const initialDisplayCount = 5;
  const [journey, setJourney] = useState<DataType>({ dtoList: [] });
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [showFilter, setShowFilter] = useState(false);
  const selectedPlace = useSelector(selectPlace);
  const selectedAge = useSelector(selectAge);
  const selectedStatus = useSelector(selectStatus);
  const selectedStartDate = useSelector(selectStartDate);
  const selectedEndDate = useSelector(selectEndDate);

  useEffect(() => {
    const fetchData = async () => {
      await getFilteredList({
        place: selectedPlace || '',
        age: selectedAge || 0,
        status: selectedStatus || 'ACTIVE',
        startDate: selectedStartDate || '',
        endDate: selectedEndDate || ''
      }).then((res) => {
        setJourney(res || []);
      });
    };

    if (selectedPlace || selectedAge || selectedStartDate || selectedEndDate) {
      fetchData();
    }
  }, [
    selectedPlace,
    selectedAge,
    selectedStatus,
    selectedStartDate,
    selectedEndDate
  ]);

  useEffect(() => {
    setJourney({ dtoList: data.dtoList });
  }, [data]);

  // 감지할 스크롤 이벤트 추가
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom) {
        setDisplayCount((prevCount) => prevCount + 5);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFilterClick = () => {
    if (showFilter) {
      dispatch(reset());
      setJourney({ dtoList: data.dtoList });
    }
    setShowFilter((prev) => !prev);
  };

  return (
    <>
      <TitleBox>
        <MainTitle>{place ? `${place} 일정` : '동행일정'}</MainTitle>
        <TapTitle2>
          <span>· {journey.dtoList.length}개 </span>동행일정을 둘러보세요.
          <FilterButton
            src={showFilter ? fillterIcon : fillterIconNone}
            onClick={handleFilterClick}
          />
        </TapTitle2>

        {showFilter && <SelectButton />}
      </TitleBox>
      <PostCardContianer>
        {journey.dtoList.length === 0 ? (
          <NoPost />
        ) : (
          journey.dtoList
            .slice(0, displayCount)
            .map((data: any) => (
              <PostCard key={data.id} data={data} isListType={true} />
            ))
        )}
      </PostCardContianer>
    </>
  );
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const MainTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  margin-bottom: 8px;
`;

const TapTitle2 = styled.div`
  ${(props) => props.theme.texts.tapTitle2};
  width: 100%;
  margin-bottom: 16px;
  position: relative;

  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const FilterButton = styled.img`
  right: 0;
  position: absolute;
  cursor: pointer;
`;

const PostCardContianer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  gap: 20px;
  margin-bottom: 20px;
`;

export default PostListScroll;
