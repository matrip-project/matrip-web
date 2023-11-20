import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './CompanionListStyle';
import logo from '../../asset/logo.png';
import fillterIcon from '../../asset/fillterIcon.png';
import fillterIconNone from '../../asset/fillterIconNone.png';
import searchIcon from '../../asset/searchIcon.png';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';

import PostListScroll from '../../components/PostListScroll';

const CompanionList: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const keyword = useSelector(selectKeyword);

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
        
        <cs.searchResult>
          <cs.searchResultIcon src={searchIcon}></cs.searchResultIcon>
          {keyword} 검색 결과 입니다.
        </cs.searchResult>

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
            <button>{isFilterClicked ? 'test' : 'test'}</button>
          )}
        </cs.TitleBox>
        <PostListScroll />
      </gs.MainContainer>
    </>
  );
};

export default CompanionList;
