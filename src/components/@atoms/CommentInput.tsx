import styled, { useTheme } from 'styled-components';
import { ReactComponent as Lock } from '../../asset/Lock.svg';
import { ReactComponent as Register } from '../../asset/registerButton.svg';

function CommentInput() {
  const theme = useTheme();

  return (
    <CommentInputContainer>
      <LockWrap>
        <Lock stroke={theme.colors.neutral2} />
      </LockWrap>
      <InputWrap type='text' placeholder='댓글을 입력해주세요' />
      <RegisterWrap>
        <Register fill={theme.colors.primary} />
      </RegisterWrap>
    </CommentInputContainer>
  );
}

const CommentInputContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 8px;
`;

const LockWrap = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 8px;
`;

const InputWrap = styled.input`
  width: 70%;
  border: none;
  outline: none;
  ${(props) => props.theme.texts.content2}
  &::placeholder {
    ${(props) => props.theme.texts.content2};
  }
`;

const RegisterWrap = styled.div``;

export default CommentInput;
