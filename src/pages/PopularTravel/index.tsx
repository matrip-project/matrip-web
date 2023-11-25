import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './popularTravelStyle';
import logo from '../../asset/logo.png';
import fillterIcon from '../../asset/fillterIcon.svg';
import fillterIconNone from '../../asset/fillterIconNone.svg';
import 부산 from '../../asset/popularImg/busan.png';
import 충북 from '../../asset/popularImg/choongbuk.png';
import 충남 from '../../asset/popularImg/choongnam.png';
import 강원 from '../../asset/popularImg/gwangwon.png';
import 경북 from '../../asset/popularImg/gyungbuk.png';
import 경기 from '../../asset/popularImg/gyungki.png';
import 경남 from '../../asset/popularImg/gyungnam.png';
import 인천 from '../../asset/popularImg/incheon.png';
import 제주 from '../../asset/popularImg/jeju.png';
import 전북 from '../../asset/popularImg/jeonbuk.png';
import 전남 from '../../asset/popularImg/jeonnam.png';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import PostListScroll from '../../components/PostListScroll';
import { selectPopularTravelKeyword } from '../../redux/modules/keywordImgSlice';

interface CityImages {
  [key: string]: any;
}

const PopularTravel: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const keyword = useSelector(selectPopularTravelKeyword);

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  const cityImages: CityImages = {
    부산,
    충북,
    충남,
    강원,
    경북,
    경기,
    경남,
    인천,
    제주,
    전북,
    전남
  } as const;

  return (
    <>
      <gs.MainContainer>
        <cs.HomeHeader>
          <cs.HeaderLogo src={logo}></cs.HeaderLogo>
        </cs.HomeHeader>
        <Search />
        <cs.PopularImageContainer>
          <img src={cityImages[keyword]} alt={keyword} />
        </cs.PopularImageContainer>
        <cs.TitleBox>
          <cs.MainTitle>{keyword} 일정</cs.MainTitle>
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

export default PopularTravel;
