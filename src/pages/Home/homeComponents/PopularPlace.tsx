import styled from 'styled-components';
import jejuImg from '../../../asset/ImgJeju.png';
import busanImg from '../../../asset/ImgBusan.png';
import gangwonImg from '../../../asset/ImgGangwon.png';
import { Link } from 'react-router-dom';

function PopularPlace() {
  return (
    <>
      <Title>인기 여행지 TOP3</Title>
      <PopularPlaceBox>
        <PlaceCard to={'/popularTravel/제주'}>
          <PopularImg src={jejuImg} alt='제주' />
          제주
        </PlaceCard>
        <PlaceCard to={'/popularTravel/부산'}>
          <PopularImg src={busanImg} alt='부산' />
          부산
        </PlaceCard>
        <PlaceCard to={'/popularTravel/강원'}>
          <PopularImg src={gangwonImg} alt='강원' />
          강원
        </PlaceCard>
      </PopularPlaceBox>
    </>
  );
}

const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  margin-left: 23px;
`;

const PopularPlaceBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlaceCard = styled(Link)`
  ${(props) => props.theme.texts.resultValue1};
  text-align: center;
  width: 107px;
  aspect-ratio: 107 / 100;
`;

const PopularImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export default PopularPlace;
