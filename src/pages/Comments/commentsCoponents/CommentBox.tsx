import styled, { useTheme } from 'styled-components';
import { CommentProps } from '../../../types/commentData';
import UserIntro from '../../../components/UserIntro';
import { ReactComponent as StaffIcon } from '../../../asset/staff.svg';
import { ReactComponent as Lock } from '../../../asset/lock.svg';
import CommentCount from '../../../components/@atoms/CommentCount';
import { encodeEmail } from '../../../utils/encodeEmail';

type CommentBoxProps = {
  comment: CommentProps;
  inputFocus?: React.RefObject<HTMLInputElement>;
};

function CommentBox({ comment, inputFocus }: CommentBoxProps) {
  const theme = useTheme();

  const isReply = comment.parentId > 0 ? true : false;

  const formatTime = (time: string) => {
    let result = time.substring(0, time.length - 10);
    result = result.replace('T', ' ');

    return result;
  };

  const onReplyClick = () => {
    if (inputFocus) {
      inputFocus.current?.focus();
    }
  };


  return (
    <CommentBoxWrap $isWriter={comment.isWriter!} $isReply={isReply}>
      <ProfileContainer>

        <UserIntro iconSize={18} id={comment.memberId}>
          <Content2>
            {comment.memberName}({encodeEmail(comment.memberEmail)})
          </Content2>
          {comment.secret && <Lock stroke={theme.colors.neutral3} />}

        </UserIntro>
        {comment.isWriter && <StaffIcon />}
      </ProfileContainer>
      <ContentWrap>{comment.content}</ContentWrap>
      <CommentFooter>
        <CommentCount
          cnt={0}
          reply={true}
          id={comment.id}
          onClick={onReplyClick}
        />
        <Content1>{formatTime(comment.createAt)}</Content1>
      </CommentFooter>
    </CommentBoxWrap>
  );
}

const CommentBoxWrap = styled.div<{ $isWriter: boolean; $isReply: boolean }>`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-color: ${(props) =>
    props.$isWriter ? props.theme.colors.primary : props.theme.colors.neutral1};
  border-radius: 16px;
  min-height: 80px;
  width: ${(props) => (props.$isReply ? '300px' : 'calc(100% - 20px)')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content1 = styled.p`
  ${(props) => props.theme.texts.content1};
`;

const Content2 = styled.p`
  ${(props) => props.theme.texts.content2};
  margin-right: 5px;
`;

const ContentWrap = styled(Content2)`
  word-break: keep-all;
  margin: 12px 0;
  white-space: pre-wrap;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CommentBox;
