import React, { useState, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as cs from './CompanionListStyle';
import fillterIcon from '../../asset/fillterIcon.svg';
import fillterIconNone from '../../asset/fillterIconNone.svg';
import searchIcon from '../../asset/searchIcon.svg';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';
import PostListScroll from '../../components/PostListScroll';
import SelectButton from '../../components/SelectButton';
import HeaderLogo from '../../components/HeaderLogo';
import { selectTotalPage } from '../../redux/modules/totalPageSlice';

const CompanionList: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [showTitleBox, setShowTitleBox] = useState(true);
  const keyword = useSelector(selectKeyword);
  const totalPage = useSelector(selectTotalPage);

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  const handleShowTitleBox = () => {
    setShowTitleBox(true);
  };

  const handleNoPosts = () => {
    setShowTitleBox(false);
  };

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          {keyword && (
            <cs.searchResult>
              <cs.searchResultIcon src={searchIcon}></cs.searchResultIcon>
              {keyword} 검색 결과 입니다.
            </cs.searchResult>
          )}

          {/* {showTitleBox && <></>} */}
          <cs.TitleBox>
            <cs.MainTitle>동행일정</cs.MainTitle>
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

export default CompanionList;
