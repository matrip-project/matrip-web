import { styled, css } from 'styled-components';

export const TopNavBox = styled.div`
  display: flex;
  width: 100%;
`;

export const BackPageButton = styled.img`
  margin: 33px 0px 30px 16px;
  justify-content: left;
  cursor: pointer;
`;

export const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  margin-left: 23px;
  margin-bottom: 12px;
`;