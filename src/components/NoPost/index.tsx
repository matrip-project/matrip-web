import styled from 'styled-components';

function NoPost() {
  return <Text>게시글이 없어요.</Text>;
}

const Text = styled.div`
  ${(props) => props.theme.texts.resultValue1};
  color: ${(props) => props.theme.colors.neutral2};
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NoPost;
