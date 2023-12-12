import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectParentId } from '../../redux/modules/replySlice';

interface CountProps {
  cnt: number;
  reply?: boolean;
  id?: number;
  onClick: () => void;
}

function CommentCount({ cnt, reply, id, onClick }: CountProps) {
  const parentId = useSelector(selectParentId);
  const [isReply, setIsReply] = useState(false);

  useEffect(() => {
    setIsReply(parentId === id);
  }, [parentId, id]);

  return (
    <CountContainer $isReply={isReply} onClick={onClick}>
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
