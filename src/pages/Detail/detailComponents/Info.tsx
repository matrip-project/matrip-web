import * as D from '../detailStyle';
import { ReactComponent as ArrowRight } from '../../../asset/arrowRight.svg';
import recruitingImage from '../../../asset/recruiting.svg';
import UserIntro from '../../../components/UserIntro';
import { DataProps } from '../../../types/postData';

type InfoType = {
  data: DataProps;
};

function Info({ data }: InfoType) {
  return (
    <D.InfoContainer>
      <D.TitleContainer>
        <D.Title>{data.title}</D.Title>
        <div>
          <img src={recruitingImage} alt='모집중' />
        </div>
      </D.TitleContainer>
      <D.InfoWrap>
        <D.InfoText>지역 - {data.city}</D.InfoText>
        <D.InfoText>
          여행 일정 - {data.startDate}-{data.endDate}
        </D.InfoText>
        <D.InfoText>모집인원 - {data.count}명</D.InfoText>
      </D.InfoWrap>
      <UserIntro iconSize={18}>
        <D.UserIntroText>홍길동 30대 남자</D.UserIntroText>
        <ArrowRight />
      </UserIntro>
      <D.ContentContainer>
        <D.Content2>{data.content}</D.Content2>
        <D.Content1>{data.tag}</D.Content1>
      </D.ContentContainer>
    </D.InfoContainer>
  );
}

export default Info;
