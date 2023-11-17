import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';
import logo from '../../asset/logo.png';

import UserList from '../../components/UserList';
import Search from '../../components/Search';

const Home: React.FC = () => {
  return (
    <>
      <gs.MainContainer>
        <hs.HomeHeader>
          <hs.HeaderLogo src={logo}></hs.HeaderLogo>
        </hs.HomeHeader>

        <Search></Search>

        <hs.TitleBox>
          <hs.MainTitle>동행일정</hs.MainTitle>
          <hs.tapTitle2>· 217개 동행일정을 둘러보세요.</hs.tapTitle2>
        </hs.TitleBox>
        <UserList></UserList>
      </gs.MainContainer>
    </>
  );
};

export default Home;
