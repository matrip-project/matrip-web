import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface CountProps {
  cnt: number;
  reply?: boolean;
}

function CommentCount({ cnt, reply }: CountProps) {
  const navigate = useNavigate();
  const postId = useParams().id;

  const handleClick = () => {
    if (reply === undefined) {
      return navigate(`/trip/${postId}/comments`);
    }
  };

  return (
    <CountContainer onClick={() => handleClick()}>
      <CountText>{reply ? '답글' : '댓글'}</CountText>
      {cnt > 0 && <Count>{cnt}</Count>}
    </CountContainer>
  );
}

const CountContainer = styled.div`
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 5px;
  height: 23px;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
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
