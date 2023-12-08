import * as D from '../detailStyle';
import { ReactComponent as ArrowRight } from '../../../asset/arrowRight.svg';
import recruitingImage from '../../../asset/recruiting.svg';
import recruitingEndImage from '../../../asset/recruitingEnd.svg';
import UserIntro from '../../../components/UserIntro';
import { DataProps } from '../../../types/postData';
import { encodeEmail } from '../../../utils/encodeEmail';

type InfoType = {
  data: DataProps;
};

function Info({ data }: InfoType) {
  const replaceDash = (str: string) => {
    const result = str.replace(/-/g, '.');
    console.log(result);

    return result;
  };

  return (
    <D.InfoContainer>
      <D.TitleContainer>
        <D.Title>{data.title}</D.Title>
        <div>
          {data.status === 'ACTIVE' ? (
            <img src={recruitingImage} alt='모집중' />
          ) : (
            <img src={recruitingEndImage} alt='모집완료' />
          )}
        </div>
      </D.TitleContainer>
      <D.InfoWrap>
        <D.Content1>지역 - {data.city}</D.Content1>
        <D.Content1>
          여행일정 - {replaceDash(data.startDate)}-{replaceDash(data.endDate)}
        </D.Content1>
        <D.Content1>모집인원 - {data.count}명</D.Content1>
      </D.InfoWrap>
      <UserIntro iconSize={18}>
        <D.UserIntroText>
          {data.memberName}({encodeEmail(data.memberEmail!)}) {data.memberAge}살{' '}
          {data.memberSex}
        </D.UserIntroText>
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
