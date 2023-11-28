import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';
import logo from '../../asset/logo.png';
import addPostButton from '../../asset/addPostButton.svg';
import jejuImg from '../../asset/ImgJeju.png';
import busanImg from '../../asset/ImgBusan.png';
import gangwonImg from '../../asset/ImgGangwon.png';
import share from '../../asset/share.svg';
import UserList from '../../components/UserList';
import Search from '../../components/Search';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/modules/keywordImgSlice';
import { postdata } from '../../data/postdata';
const Home: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <gs.MainContainer>
        <hs.HomeHeader>
          <hs.HeaderLogo src={logo}></hs.HeaderLogo>
        </hs.HomeHeader>
        <Search />
        <hs.TitleBox>
          <hs.MainTitle>동행일정</hs.MainTitle>
          <hs.tapTitle2>· 217개 동행일정을 둘러보세요.</hs.tapTitle2>
        </hs.TitleBox>
        {postdata.slice(0, 5).map((data, index) => {
          return (
            <UserList
              key={index}
              id={data.id}
              nick={data.nick}
              imgurl={data.imgurl}
              destination={data.destination}
              title={data.title}
              post={data.post}
              startDate={data.startDate}
              endData={data.endData}
              personnel={data.personnel}
              dibs={data.dibs}
              
            />
          );
        })}
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

        <hs.InviteFriend>
          친구 초대하기 <hs.InviteFriendImg src={share} />
        </hs.InviteFriend>

        <hs.buttonWrraperContainer>
          <hs.postContainer to={'/ItineraryInfo'}>
            <hs.WriteBtn src={addPostButton}></hs.WriteBtn>
          </hs.postContainer>
        </hs.buttonWrraperContainer>
      </gs.MainContainer>
    </>
  );
};

export default Home;
