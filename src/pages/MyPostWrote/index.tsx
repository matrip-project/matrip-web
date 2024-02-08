import React, { useEffect, useState } from 'react';
import { useUserId } from '../../hooks/useUserId';
import { getMyPostList } from '../../apis/api/journey';
import { JourneyProps } from '../../types/journeyData';
import TypeButton from '../../components/@atoms/TypeButton';
import styled from 'styled-components';
import { MainContainer } from '../../styles/GlobalStyles';
import PostCard from '../../components/PostCard';
import NoPost from '../../components/NoPost';

const MyPostWrote: React.FC = () => {
  const userId = useUserId();
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isListType, setIsListType] = useState<boolean>(true);
  const [journeys, setJourneys] = useState<JourneyProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getMyPostList(userId).then((res) => {
        setJourneys(res || []);
      });
    };

    fetchData();
  }, [userId]);

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

  return (
    <MainContainer>
      <TypeButton setIsListType={setIsListType} />
      <PostContainer>
        {journeys.length === 0 ? (
          <NoPost />
        ) : (
          journeys.slice(0, displayCount).map((data, index) => {
            return <PostCard key={index} data={data} isListType={isListType} />;
          })
        )}
      </PostContainer>
    </MainContainer>
  );
};
const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 20px;
`;

export default MyPostWrote;
