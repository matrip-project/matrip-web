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
import SelectButton from '../../components/SelectButton';
import axios from 'axios';

interface CityImages {
  [key: string]: any;
}

const PopularTravel: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const Popularkeyword = useSelector(selectPopularTravelKeyword);
  const [totalPage, setTotalPage] = useState<number>(0);

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  const handleNoPosts = () => {};
  const handleShowTitleBox = () => {};

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
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com/journeys'
        );
        setTotalPage(response.data.totalPage || 0);
        // console.log(response);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <gs.MainContainer>
        <cs.HomeHeader>
          <cs.HeaderLogo src={logo}></cs.HeaderLogo>
        </cs.HomeHeader>
        <Search />
        <cs.PopularImageContainer>
          <img src={cityImages[Popularkeyword]} alt={Popularkeyword} />
        </cs.PopularImageContainer>

        <cs.TitleBox>
          <cs.MainTitle>{Popularkeyword} 일정</cs.MainTitle>
          <cs.tapTitle2>
          · {totalPage} 동행일정을 둘러보세요.
            <cs.tapTitle2Fillter
              src={isFilterClicked ? fillterIconNone : fillterIcon}
              onClick={handleFilterClick}
            />
          </cs.tapTitle2>

          {!isFilterClicked && <SelectButton />}
        </cs.TitleBox>

        <PostListScroll
          onShowTitleBox={handleShowTitleBox}
          onNoPosts={handleNoPosts}
        />
      </gs.MainContainer>
    </>
  );
};

export default PopularTravel;
