import React, { useEffect, useState } from 'react';
import * as pls from './postListScrollStyle';
import recruitingImage from '../../asset/recruiting.svg';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';
import { selectPopularTravelKeyword } from '../../redux/modules/keywordImgSlice';
import axios from 'axios';

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
}

interface Type {
  dtoList: Journey[];
}

const PostListScroll: React.FC<PostListScrollProps> = ({
  onShowTitleBox,
  onNoPosts
}) => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const searchKeyword = useSelector(selectKeyword);
  const popularTravelKeyword = useSelector(selectPopularTravelKeyword);
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
  const filteredJourneys = journeys.dtoList.filter(
    (journey) =>
      journey.city.toLowerCase().includes(keyword) ||
      journey.title.toLowerCase().includes(keyword)
  );

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
  }, [filteredJourneys, onNoPosts, onShowTitleBox]);

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

              <pls.postNickname>{journey.memberName}</pls.postNickname>
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
