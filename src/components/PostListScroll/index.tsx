import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import fillterIcon from '../../asset/fillterIcon.svg';
import fillterIconNone from '../../asset/fillterIconNone.svg';
import {
  AddSelectedAge,
  AddSelectedEndDate,
  AddSelectedStartDate,
  AddSelectedStatus,
  reset,
  selectPlace
} from '../../redux/modules/searchSlice';
import { setTotalPage } from '../../redux/modules/totalPageSlice';
import { DataType } from '../../types/journeyData';
import PostCard from '../PostCard';
import NoPost from '../NoPost';
import SelectButton from '../SelectButton';

interface Journeys {
  data: DataType;
}

function PostListScroll({ data }: Journeys) {
  const dispatch = useDispatch();
  const place = useParams().place;
  const [showFilter, setShowFilter] = useState(false);
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const selectedPlace = useSelector(selectPlace);
  const SelectedAge = useSelector(AddSelectedAge);
  const SelectedStatus = useSelector(AddSelectedStatus);
  const SelectedStartDate = useSelector(AddSelectedStartDate);
  const SelectedEndDate = useSelector(AddSelectedEndDate);
  const [localTotalPage, setLocalTotalPage] = useState(0);

  // 키워드를 기반으로 게시물 필터링
  const filteredJourneys = data.dtoList.filter((journey) => {
    const journeyStartDate = new Date(journey.startDate).toISOString();
    const journeyEndDate = new Date(journey.endDate).toISOString();

    const meetsAgeCriteria = !SelectedAge || journey.memberAge! >= SelectedAge;
    const meetsSelectedStatus =
      !SelectedStatus || journey.status === SelectedStatus;
    const meetsStartDateCriteria =
      !SelectedStartDate || journeyStartDate >= SelectedStartDate;
    const meetsEndDateCriteria =
      !SelectedEndDate || journeyEndDate <= SelectedEndDate;

    return (
      meetsAgeCriteria &&
      meetsSelectedStatus &&
      meetsStartDateCriteria &&
      meetsEndDateCriteria
    );
    return false;
  });

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

  // 필터링된 포스트 배열 길이 값 관리
  useEffect(() => {
    const newLocalTotalPage = filteredJourneys.length;
    setLocalTotalPage(newLocalTotalPage);
  }, [filteredJourneys, localTotalPage]);

  useEffect(() => {
    dispatch(setTotalPage(localTotalPage));
  }, [localTotalPage, dispatch]);

  const handleFilterClick = () => {
    if (showFilter) {
      dispatch(reset());
    }
    setShowFilter((prev) => !prev);
  };

  return (
    <>
      <TitleBox>
        <MainTitle>{place ? `${place} 일정` : '동행일정'}</MainTitle>
        <TapTitle2>
          <span>· {data.dtoList.length}개 </span>동행일정을 둘러보세요.
          <FilterButton
            src={showFilter ? fillterIcon : fillterIconNone}
            onClick={handleFilterClick}
          />
        </TapTitle2>

        {showFilter && <SelectButton />}
      </TitleBox>
      <PostCardContianer>
        {data.dtoList.length === 0 ? (
          <NoPost />
        ) : (
          data.dtoList
            .slice(0, displayCount)
            .map((journey: any) => (
              <PostCard key={journey.id} data={journey} isListType={true} />
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
