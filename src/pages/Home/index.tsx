import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';
import logo from '../../asset/logo.png';
import addPostButton from '../../asset/addPostButton.svg';
import jejuImg from '../../asset/ImgJeju.png';
import busanImg from '../../asset/ImgBusan.png';
import gangwonImg from '../../asset/ImgGangwon.png';
import shareImg from '../../asset/share.svg';

import UserList from '../../components/UserList';
import Search from '../../components/Search';

const Home: React.FC = () => {
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
        <UserList />
        <hs.ScheduleMoreBtn to={'/CompanionList'}>
          일정 더보기 +
        </hs.ScheduleMoreBtn>

        <hs.PopularTravel>인기 여행지 TOP3</hs.PopularTravel>
        <hs.PopularTravelBox>
          <hs.PopularImgbox>
            <hs.PopularImg src={jejuImg} />
            제주
          </hs.PopularImgbox>
          <hs.PopularImgbox>
            <hs.PopularImg src={busanImg} />
            부산
          </hs.PopularImgbox>
          <hs.PopularImgbox>
            <hs.PopularImg src={gangwonImg} />
            강원
          </hs.PopularImgbox>
        </hs.PopularTravelBox>

        <hs.InviteFriend>
          친구 초대하기 <hs.InviteFriendImg src={shareImg}/>
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
