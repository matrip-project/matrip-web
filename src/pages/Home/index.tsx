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
      </gs.MainContainer>

      <Search></Search>
      <UserList></UserList>
    </>
  );
};

export default Home;
