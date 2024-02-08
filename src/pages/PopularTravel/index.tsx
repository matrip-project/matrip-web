import React, { useEffect, useState } from 'react';
import * as gs from '../../styles/GlobalStyles';
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
import HeaderLogo from '../../components/HeaderLogo';
import { getPopularTravelList } from '../../apis/api/journey';
import { DataType } from '../../types/journeyData';
import { useParams } from 'react-router-dom';
import PostListScroll from '../../components/PostListScroll';
import styled from 'styled-components';

interface CityImages {
  [key: string]: any;
}

const PopularTravel: React.FC = () => {
  const [journeys, setJourneys] = useState<DataType>({ dtoList: [] });
  const place = useParams().place;
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
      if (place) {
        await getPopularTravelList(place).then((res) => {
          setJourneys(res || { dtoList: [] });
        });
      }
    };

    fetchData();
  }, [place]);

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          <PopularImageContainer>
            <PopularImage src={cityImages[place!]} alt={place} />
          </PopularImageContainer>
          <PostListScroll data={journeys} />
        </gs.MainBox>
      </gs.MainContainer>
    </>
  );
};

const PopularImageContainer = styled.div`
  width: 390px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 30px;
`;

const PopularImage = styled.img`
  width: 390px;
  height: 200px;
  object-fit: cover;
`;

export default PopularTravel;
