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
import axios from 'axios';
import HeaderLogo from '../../components/HeaderLogo';

const CompanionList: React.FC = () => {
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [showTitleBox, setShowTitleBox] = useState(true);
  const keyword = useSelector(selectKeyword);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [filteredJourneysLength, setFilteredJourneysLength] =
    useState<number>(0);

  const handleFilterClick = () => {
    setIsFilterClicked((prev) => !prev);
  };

  const handleShowTitleBox = () => {
    setShowTitleBox(true);
  };

  const handleNoPosts = () => {
    setShowTitleBox(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com/journeys'
        );
        setTotalPage(response.data.dtoList.length || 0);
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
            <span>· {filteredJourneysLength} </span>동행일정을 둘러보세요.
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
          filteredJourneysLength={filteredJourneysLength}
        />
      </gs.MainContainer>
    </>
  );
};

export default CompanionList;
