import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../../asset/arrowDown.svg';
import CommentInput from '../../components/@atoms/CommentInput';
import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import CommentBox from './commentsCoponents/CommentBox';

export interface CommentProps {
  name: string;
  content: string;
  isWriter: boolean;
  time: string;
  replyCnt: number;
  isReply: boolean;
  isSecret: boolean;
}

function Comments() {
  const data = [
    {
      name: '동행남(qwe**)',
      content: '문의사항은 많이 남겨주세요~',
      isWriter: true,
      time: '2023-11-18 22:41',
      replyCnt: 2,
      isReply: false,
      isSecret: false
    },
    {
      name: '아무개(sdf**)',
      content:
        '문의사항은 많이 남겨주세요~문의사항은 많이 남겨주세요~문의사항은 많이 남겨주세요~문의사항은 많이 남겨주세요~',
      isWriter: false,
      time: '2023-11-18 22:41',
      replyCnt: 2,
      isReply: true,
      isSecret: true
    },
    {
      name: '동행남',
      content: '문의사항은 많이 남겨주세요~',
      isWriter: true,
      time: '2023-11-18 22:41',
      replyCnt: 0,
      isReply: true,
      isSecret: false
    }
  ];

  return (
    <MainContainer>
      <MainBox>
        <CommentContainer>
          {data.map((comment, index) => (
            <CommentWrap key={index}>
              {comment.isReply && <ArrowDown />}
              <CommentBox comment={comment} />
            </CommentWrap>
          ))}
          <CommentInputWrap>
            <CommentInput />
          </CommentInputWrap>
        </CommentContainer>
      </MainBox>
    </MainContainer>
  );
}

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
`;

const CommentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentInputWrap = styled.div`
  width: 352.6px;
  position: fixed;
  bottom: 10%;
  z-index: 10;
`;

export default Comments;
