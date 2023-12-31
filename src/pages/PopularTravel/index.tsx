import React, { useState, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './popularTravelStyle';
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
import HeaderLogo from '../../components/HeaderLogo';
import { selectTotalPage } from '../../redux/modules/totalPageSlice';

interface CityImages {
  [key: string]: any;
}

const PopularTravel: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(true);
  const Popularkeyword = useSelector(selectPopularTravelKeyword);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const totalPage = useSelector(selectTotalPage);

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

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          <cs.PopularImageContainer>
            <cs.PopularImage
              src={cityImages[Popularkeyword]}
              alt={Popularkeyword}
              onLoad={() => setIsImageLoaded(true)}
            />
          </cs.PopularImageContainer>

          <cs.TitleBox>
            <cs.MainTitle>{Popularkeyword} 일정</cs.MainTitle>
            <cs.tapTitle2>
              <span>· {totalPage}개 </span>동행일정을 둘러보세요.
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
        </gs.MainBox>
      </gs.MainContainer>
    </>
  );
};

export default PopularTravel;
