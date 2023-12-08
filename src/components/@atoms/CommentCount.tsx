import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectParentId, setReply } from '../../redux/modules/replySlice';

interface CountProps {
  cnt: number;
  reply?: boolean;
  id?: number;
  onClick: () => void;
}

function CommentCount({ cnt, reply, id, onClick }: CountProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const parentId = useSelector(selectParentId);
  const [isReply, setIsReply] = useState(false);

  const handleClick = () => {
    onClick();

    if (reply) {
      if (parentId !== id) {
        dispatch(setReply(id!));
      } else {
        dispatch(setReply(0));
      }
      setIsReply(!isReply);
      // setIsReply(parentId===id);
    }
  };

  return (
    <CountContainer $isReply={isReply} onClick={handleClick}>
      <CountText>{reply ? '답글' : '댓글'}</CountText>
      {cnt > 0 && <Count>{cnt}</Count>}
    </CountContainer>
  );
}

const CountContainer = styled.div<{ $isReply: boolean }>`
  border: 1px solid
    ${(props) =>
      props.$isReply
        ? props.theme.colors.primary
        : props.theme.colors.neutral1};
  border-radius: 5px;
  height: 23px;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  & > p {
    color: ${(props) => props.$isReply && props.theme.colors.primary};
  }
`;

const CountText = styled.p`
  ${(props) => props.theme.texts.content2};
  padding: 0 5px;
`;

const Count = styled.p`
  ${(props) => props.theme.texts.content1};
  color: ${(props) => props.theme.colors.primary};
  padding-right: 5px;
`;

export default CommentCount;
