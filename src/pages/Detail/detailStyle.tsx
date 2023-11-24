import styled from 'styled-components';

export const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 80%;
`;

export const Content1 = styled.p`
  ${(props) => props.theme.texts.content1};
`;

export const Content2 = styled.p`
  ${(props) => props.theme.texts.content2};
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 15px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const InfoWrap = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const InfoText = styled.p`
  ${(props) => props.theme.texts.menuSelect};
  color: ${(props) => props.theme.colors.neutral4};
  margin-right: 10px;
`;

export const UserIntroText = styled.p`
  ${(props) => props.theme.texts.menuSelect};
  color: ${(props) => props.theme.colors.neutral3};
  margin: 0 8px;
`;

export const ContentContainer = styled.div`
  margin-top: 15px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  & > div {
    margin-bottom: 8px;
  }
`;
