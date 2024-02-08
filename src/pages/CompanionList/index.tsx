import React, { useEffect, useState } from 'react';
import * as gs from '../../styles/GlobalStyles';
import searchIcon from '../../asset/searchIcon.svg';
import Search from '../../components/Search';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';
import PostListScroll from '../../components/PostListScroll';
import HeaderLogo from '../../components/HeaderLogo';
import { DataType } from '../../types/journeyData';
import { getJourneyList, getSearchResult } from '../../apis/api/journey';
import styled from 'styled-components';

const CompanionList: React.FC = () => {
  const keyword = useSelector(selectKeyword);
  const [journeys, setJourneys] = useState<DataType>({ dtoList: [] });

  useEffect(() => {
    const fetchData = async () => {
      if (keyword) {
        await getSearchResult(keyword).then((res) => {
          setJourneys(res || { dtoList: [] });
        });
      } else {
        await getJourneyList().then((res) => {
          setJourneys(res || { dtoList: [] });
        });
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          {keyword && (
            <SearchResult>
              <SearchResultIcon src={searchIcon} />
              <span>{keyword}</span>검색 결과 입니다.
            </SearchResult>
          )}
          <PostListScroll data={journeys} />
        </gs.MainBox>
      </gs.MainContainer>
    </>
  );
};

const SearchResult = styled.div`
  ${(props) => props.theme.texts.resultValue2};
  display: flex;
  width: 100%;
  margin-bottom: 36px;
  margin-left: 24px;
  align-items: center;

  & span {
    font-weight: 500;
    margin-right: 5px;
  }
`;

export const SearchResultIcon = styled.img`
  margin-right: 9px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default CompanionList;
