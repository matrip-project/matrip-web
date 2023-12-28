import styled, { useTheme } from 'styled-components';
import { ReactComponent as Lock } from '../../asset/lock.svg';
import { ReactComponent as Register } from '../../asset/registerButton.svg';
import { useState } from 'react';
import { postComments } from '../../apis/api/comment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteAll, selectParentId } from '../../redux/modules/replySlice';
import { useDispatch } from 'react-redux';
import { useUserId } from '../../hooks/useUserId';

type CommentType = {
  journeyId: number;
  newComment?: boolean;
  setNew?: React.Dispatch<React.SetStateAction<boolean>>;
  inputFocus?: React.RefObject<HTMLInputElement>;
  writerId?: number;
};

function CommentInput({
  journeyId,
  setNew,
  newComment,
  inputFocus,
  writerId
}: CommentType) {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useUserId();
  const [input, setInput] = useState('');
  const [secret, setSecret] = useState(false);
  const parentId = useSelector(selectParentId);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    const body = {
      id: 0,
      content: input,
      secret: secret,
      parentId: parentId,
      journeyId: journeyId,
      memberId: userId
    };

    if (input.length > 0) {
      await postComments(body).then((res) => {
        console.log('post comments success: ', res);

        setInput('');
        setSecret(false);

        if (setNew) {
          setNew(!newComment);
          dispatch(deleteAll());
        } else {
          navigate(`/trip/${journeyId}/comments`, {
            state: { writerId: writerId }
          });
        }
      });
    }
  };

  return (
    <CommentInputContainer>
      <LockWrap $isSecret={secret} onClick={() => setSecret(!secret)}>
        <Lock stroke={secret ? theme.colors.white : theme.colors.neutral2} />
      </LockWrap>
      <InputWrap
        type='text'
        placeholder='댓글을 입력해주세요'
        ref={inputFocus}
        onChange={handleInput}
        value={input}
      />
      <RegisterWrap onClick={handleSubmit}>
        <Register fill={theme.colors.primary} />
      </RegisterWrap>
    </CommentInputContainer>
  );
}

const CommentInputContainer = styled.div`
  width: 100%;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
`;

const LockWrap = styled.div<{ $isSecret: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.$isSecret
        ? props.theme.colors.primary
        : props.theme.colors.neutral1};
  background-color: ${(props) =>
    props.$isSecret ? props.theme.colors.primary : props.theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
`;

const InputWrap = styled.input`
  width: 70%;
  border: none;
  outline: none;
  resize: none;
  ${(props) => props.theme.texts.content2}
  &::placeholder {
    ${(props) => props.theme.texts.content2};
  }
`;

const RegisterWrap = styled.div`
  cursor: pointer;
`;

export default CommentInput;
