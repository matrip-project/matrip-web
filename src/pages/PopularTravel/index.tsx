import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './popularTravelStyle';
import logo from '../../asset/logo.png';
import fillterIcon from '../../asset/fillterIcon.svg';
import fillterIconNone from '../../asset/fillterIconNone.svg';
import busan from '../../asset/popularImg/busan.png';
import choongbuk from '../../asset/popularImg/choongbuk.png';
import buschoongnaman from '../../asset/popularImg/choongnam.png';
import gwangwon from '../../asset/popularImg/gwangwon.png';
import gyungbuk from '../../asset/popularImg/gyungbuk.png';
import gyungki from '../../asset/popularImg/gyungki.png';
import gyungnam from '../../asset/popularImg/gyungnam.png';
import incheon from '../../asset/popularImg/incheon.png';
import jeju from '../../asset/popularImg/jeju.png';
import jeonbuk from '../../asset/popularImg/jeonbuk.png';
import jeonnam from '../../asset/popularImg/jeonnam.png';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import PostListScroll from '../../components/PostListScroll';
import { selectPopularTravelKeyword } from '../../redux/modules/keywordImgSlice';

const PopularTravel: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const keyword = useSelector(selectPopularTravelKeyword);

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
          <cs.MainTitle>{keyword} 일정</cs.MainTitle>
          <cs.tapTitle2>
            · 217개 동행일정을 둘러보세요.
            <cs.tapTitle2Fillter
              src={isFilterClicked ? fillterIconNone :  fillterIcon}
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

export default PopularTravel;
