import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CommentCount() {
  return (
    <CountContainer to={'/'}>
      <CountText>댓글</CountText>
      <Count>7</Count>
    </CountContainer>
  );
}

const CountContainer = styled(Link)`
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 5px;
  height: 23px;
  display: flex;
  align-items: center;
  width: fit-content;
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
