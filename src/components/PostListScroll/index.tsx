import React, { useEffect, useState } from 'react';
import * as pls from './postListScrollStyle';
import recruitingImage from '../../asset/recruiting.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddSelectedAge,
  AddSelectedEndDate,
  AddSelectedStartDate,
  AddSelectedStatus,
  selectKeyword
} from '../../redux/modules/searchSlice';
import { selectPopularTravelKeyword } from '../../redux/modules/keywordImgSlice';
import axios from 'axios';
import userImgNone from '../../asset/userImgNone.png';
import { setTotalPage } from '../../redux/modules/totalPageSlice';

interface PostListScrollProps {
  onNoPosts: () => void;
  onShowTitleBox: () => void;
}

interface JourneyImage {
  id: number;
  path: string;
  sequence: number;
}

interface Journey {
  id: number;
  memberName: string;
  journeyImgRequestDtoList: JourneyImage[];
  path: string;
  city: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  status: string;
  memberAge: string;
}

interface Type {
  dtoList: Journey[];
}

const PostListScroll: React.FC<PostListScrollProps> = ({
  onShowTitleBox,
  onNoPosts
}) => {
  const dispatch = useDispatch();
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const searchKeyword = useSelector(selectKeyword);
  const popularTravelKeyword = useSelector(selectPopularTravelKeyword);
  const SelectedAge = useSelector(AddSelectedAge);
  const SelectedStatus = useSelector(AddSelectedStatus);
  const SelectedStartDate = useSelector(AddSelectedStartDate);
  const SelectedEndDate = useSelector(AddSelectedEndDate);
  const keyword = searchKeyword || popularTravelKeyword;
  const [journeys, setJourneys] = useState<Type>({ dtoList: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com/journeys'
        );
        setJourneys(response.data || { dtoList: [] });
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  // 키워드를 기반으로 게시물 필터링
  const filteredJourneys = journeys.dtoList.filter((journey) => {
    const includesKeywordOrTitle =
      journey.city.toLowerCase().includes(keyword) ||
      journey.title.toLowerCase().includes(keyword);

    if (includesKeywordOrTitle) {
      const journeyStartDate = new Date(journey.startDate).toISOString();
      const journeyEndDate = new Date(journey.endDate).toISOString();

      const meetsAgeCriteria =
        !SelectedAge || parseInt(journey.memberAge, 10) >= SelectedAge;
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
    }
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
    if (filteredJourneys.length === 0) {
      onNoPosts();
    } else {
      onShowTitleBox();
    }

  }, [filteredJourneys, onNoPosts, onShowTitleBox, displayCount, dispatch]);

  return (
    <>
      {filteredJourneys.length === 0 ? (
        <pls.noPost>게시글이 없어요.</pls.noPost>
      ) : (
        filteredJourneys.slice(0, displayCount).map((journey: any) => (
          <pls.postBox key={journey.id}>
            <pls.contentsBox>
              <pls.contentsTopBox>
                <pls.postDibsBtn>
                  <img src={recruitingImage} alt='Recruiting Image' />
                </pls.postDibsBtn>
                <pls.postPeriod>
                  {journey.startDate}~{journey.endDate}
                </pls.postPeriod>
              </pls.contentsTopBox>

              <pls.postContent>
                <pls.postTitle>
                  [{journey.city}] {journey.title}
                </pls.postTitle>
              </pls.postContent>

              <pls.postNickname>
                <pls.userImgNone src={userImgNone}></pls.userImgNone>
                {journey.memberName}
              </pls.postNickname>
            </pls.contentsBox>

            <pls.postImgBox>
              <pls.postImg
                src={journey.journeyImgRequestDtoList[0]?.path}
                alt='유저 프로필'
              />
            </pls.postImgBox>
          </pls.postBox>
        ))
      )}
    </>
  );
};

export default PostListScroll;
