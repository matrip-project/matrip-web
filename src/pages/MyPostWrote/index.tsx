import React, { useEffect, useState } from 'react';
import * as mcl from './myPostWroteStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getJourneyDetail } from '../../apis/api/journey';

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

const MyPostWrote: React.FC = () => {
  const storedId = sessionStorage.getItem('userId');

  // 만약 세션에 id 값이 없으면 기본값을 사용
  const { id = storedId || '1' } = useParams();
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isListIconClicked, setListIconClicked] = useState(true);
  const [journeys, setJourneys] = useState<Type>({ dtoList: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com/journeys/mypage?memberId=${id}`
        );
        setJourneys({ dtoList: response.data.dtoList || [] });
      } catch (error) {
        console.error('Error fetching data:', error);
        setJourneys({ dtoList: [] });
      }
    };

    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const getData = async () => {
  //     if (id) {
  //       try {
  //         const response = await getJourneyDetail(parseInt(id));
  //         setJourneys(response || { dtoList: [] });
  //         console.log('get journey success: ', response);
  //       } catch (error) {
  //         console.error('Error fetching journey detail: ', error);
  //       }
  //     }
  //   };

  //   getData();
  // }, [id]);

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
        {journeys.dtoList.length === 0 ? (
          <mcl.noPost>게시글이 없어요.</mcl.noPost>
        ) : (
          journeys.dtoList.slice(0, displayCount).map((data, index) => {
            return (
              <UserList
                key={index}
                id={data.id}
                memberName={data.memberName}
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
