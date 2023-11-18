import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './CompanionListStyle';
import logo from '../../asset/logo.png';
import fillterIcon from '../../asset/fillterIcon.png';
import fillterIconNone from '../../asset/fillterIconNone.png';
import Search from '../../components/Search';

import PostListScroll from '../../components/PostListScroll';

const CompanionList: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  return (
    <>
      <gs.MainContainer>
        <cs.HomeHeader>
          <cs.HeaderLogo src={logo}></cs.HeaderLogo>
        </cs.HomeHeader>
        <Search />

        <cs.TitleBox>
          <cs.MainTitle>동행일정</cs.MainTitle>
          <cs.tapTitle2>
            · 217개 동행일정을 둘러보세요.
            <cs.tapTitle2Fillter
              src={isFilterClicked ? fillterIconNone : fillterIcon}
              onClick={handleFilterClick}
            />
          </cs.tapTitle2>

          {!isFilterClicked && (
            <div>
              {isFilterClicked ? 'test' : 'test'}
            </div>
          )}
        </cs.TitleBox>
        <PostListScroll />
      </gs.MainContainer>
    </>
  );
};

export default CompanionList;
