import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import * as D from './detailStyle';
import Map from '../../components/Map';
import Info from './detailComponents/Info';
import CommentInput from '../../components/@atoms/CommentInput';
import CommentCount from '../../components/@atoms/CommentCount';
import Thumbnail from '../../components/@atoms/Thumbnail';
import Plan from './detailComponents/Plan';

function Detail() {
  const data = {
    title: '충주호근처 불멍, 멍때리는 캠핑하실 분 3분 함께 해요.',
    city: '충남',
    startDate: '23.11.06',
    endDate: '23.11.08',
    count: 5,
    content:
      '지역간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 \n설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한',
    tag: '# 맛집탐방 # 힐링여행 # SNS핫플레이스 # ENFP # 황리단길 # 노는게 제일좋아',
    latitude: 37.5665,
    longitude: 126.978,
    commentCnt: 7
  };
  const plan = [
    {
      day: 1,
      content:
        '7:00 강남역 만나서 출발\n12시 충주호 도착\n주변 “맛집”에서 점심식사'
    },
    {
      day: 2,
      content:
        '8:00 강남역 만나서 출발\n12시 충주호 도착\n 주변 “맛집”에서 점심식사'
    }
  ];
  const image = [
    {
      id: 1,
      path: 'https://i.postimg.cc/L8dPdkNm/image.png',
      sequence: 0
    }
  ];
  const center = { lat: data.latitude, lng: data.longitude };
  const zoom = 13;

  return (
    <MainContainer>
      <MainBox>
        <Thumbnail url='https://i.postimg.cc/L8dPdkNm/image.png' />
        <Info data={data} />
        <Map center={center} zoom={zoom} />
        <Plan plan={plan} />
        <D.CommentContainer>
          <CommentInput />
          <CommentCount cnt={data.commentCnt} />
        </D.CommentContainer>
      </MainBox>
    </MainContainer>
  );
}

export default Detail;
