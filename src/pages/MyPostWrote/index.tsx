import React, { useEffect, useState } from 'react';
import * as mcl from './myPostWroteStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';
import { useUserId } from '../../hooks/useUserId';
import { getMyPostList } from '../../apis/api/journey';
import { JourneyProps } from '../../types/postData';

const MyPostWrote: React.FC = () => {

  const storedId = localStorage.getItem('myId');

  // 만약 세션에 id 값이 없으면 기본값을 사용
  const userId = useUserId();

  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isListIconClicked, setListIconClicked] = useState(true);
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

  const handleTitleIconClick = () => {
    setListIconClicked(false);
  };

  const handleListIconClick = () => {
    setListIconClicked(true);
  };

  return (
    <gs.MainContainer>
      <mcl.TitleListIconBox>
        <mcl.ListIcon
          src={listIcon}
          onClick={handleListIconClick}
        ></mcl.ListIcon>
        <mcl.TitleIcon
          src={TitleIcon}
          onClick={handleTitleIconClick}
        ></mcl.TitleIcon>
      </mcl.TitleListIconBox>
      <mcl.DataUserPost>
        {journeys.length === 0 ? (
          <mcl.noPost>게시글이 없어요.</mcl.noPost>
        ) : (
          journeys.slice(0, displayCount).map((data, index) => {
            return (
              <UserList
                key={index}
                id={data.id!}
                memberName={data.memberName!}
                imgurl={data.journeyImgRequestDtoList[0]?.path}
                city={data.city}
                title={data.title}
                content={data.content}
                startDate={data.startDate}
                endDate={data.endDate}
                isListIconClicked={isListIconClicked}
              />
            );
          })
        )}
      </mcl.DataUserPost>
    </gs.MainContainer>
  );
};

export default MyPostWrote;
