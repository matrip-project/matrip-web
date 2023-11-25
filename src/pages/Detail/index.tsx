import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import * as D from './detailStyle';
import Map from '../../components/Map';
import Info from './detailComponents/Info';
import CommentInput from '../../components/@atoms/CommentInput';
import CommentCount from '../../components/@atoms/CommentCount';
import Thumbnail from '../../components/@atoms/Thumbnail';
import Plan from './detailComponents/Plan';

export interface DataProps {
  title: string;
  destination: string;
  schedule: string;
  personnel: number;
  content: string;
  tag: string;
  commentCnt: number;
  plan: object;
}

export interface PlanProps {
  day: number;
  content: string;
}

function Detail() {
  const data = {
    title: '충주호근처 불멍, 멍때리는 캠핑하실 분 3분 함께 해요.',
    destination: '충남',
    schedule: '23.11.06 - 23.11.8',
    personnel: 5,
    content:
      '지역간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 \n설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한 동행 구인 설명 간단한',
    tag: '# 맛집탐방 # 힐링여행 # SNS핫플레이스 # ENFP # 황리단길 # 노는게 제일좋아',
    commentCnt: 7,
    plan: [
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
    ]
  };
  const center = { lat: 37.5665, lng: 126.978 };
  const zoom = 13;

  return (
    <MainContainer>
      <MainBox>
        <Thumbnail url='https://i.postimg.cc/L8dPdkNm/image.png' />
        <Info data={data} />
        <Map center={center} zoom={zoom} />
        <Plan plan={data.plan} />
        <D.CommentContainer>
          <CommentInput />
          <CommentCount cnt={data.commentCnt} />
        </D.CommentContainer>
      </MainBox>
    </MainContainer>
  );
}

export default Detail;
