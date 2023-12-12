import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';
import addPostButton from '../../asset/addPostButton.svg';
import jejuImg from '../../asset/ImgJeju.png';
import busanImg from '../../asset/ImgBusan.png';
import gangwonImg from '../../asset/ImgGangwon.png';
import share from '../../asset/share.svg';
import UserList from '../../components/UserList';
import Search from '../../components/Search';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/modules/keywordImgSlice';
import axios from 'axios';
import HeaderLogo from '../../components/HeaderLogo';
import { useNavigate } from 'react-router';
import { deleteAll } from '../../redux/modules/postSlice';

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
  totalPage: number;
}

interface Type {
  dtoList: Journey[];
  totalPage: number;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [journeys, setJourneys] = useState<Type>({ dtoList: [], totalPage: 0 });

  const handleInviteFriend = () => {
    const urlToCopy = 'http://matrip.s3-website.ap-northeast-2.amazonaws.com/';
    navigator.clipboard.writeText(urlToCopy);
    alert('링크가 복사되었습니다!');
  };

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

  const onClickAddButton = () => {
    dispatch(deleteAll());
    navigate('/posting');
  };

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          <hs.TitleBox>
            <hs.MainTitle>동행일정</hs.MainTitle>
            <hs.tapTitle2>
              <span>· {journeys.dtoList.length} </span>동행일정을 둘러보세요.
            </hs.tapTitle2>
          </hs.TitleBox>
          {journeys.dtoList.slice(0, 5).map((data, index) => (
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
              isListIconClicked
            />
          ))}
          <hs.ScheduleMoreBtn to={'/CompanionList'}>
            일정 더보기 +
          </hs.ScheduleMoreBtn>

          <hs.PopularTravel>인기 여행지 TOP3</hs.PopularTravel>
          <hs.PopularTravelBox>
            <hs.PopularImgbox
              to={'/popularTravel'}
              onClick={() => dispatch(setKeyword('제주'))}
            >
              <hs.PopularImg src={jejuImg} />
              제주
            </hs.PopularImgbox>
            <hs.PopularImgbox
              to={'/popularTravel'}
              onClick={() => dispatch(setKeyword('부산'))}
            >
              <hs.PopularImg src={busanImg} />
              부산
            </hs.PopularImgbox>
            <hs.PopularImgbox
              to={'/popularTravel'}
              onClick={() => dispatch(setKeyword('강원'))}
            >
              <hs.PopularImg src={gangwonImg} />
              강원
            </hs.PopularImgbox>
          </hs.PopularTravelBox>

          <hs.InviteFriend onClick={() => handleInviteFriend()}>
            친구 초대하기 <hs.InviteFriendImg src={share} />
          </hs.InviteFriend>

          <hs.buttonWrraperContainer>
            <hs.postContainer onClick={onClickAddButton}>
              <hs.WriteBtn src={addPostButton}></hs.WriteBtn>
            </hs.postContainer>
          </hs.buttonWrraperContainer>
        </gs.MainBox>
      </gs.MainContainer>
    </>
  );
};

export default Home;
