import { styled } from 'styled-components';

export const HomeHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 30px;
  padding: 18px 120px;
`;

export const HeaderLogo = styled.img`
  margin: auto;
`;

export const HeaderIconCtnr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

export const MainTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  margin-bottom: 8px;
`;

export const tapTitle2 = styled.div`
  ${(props) => props.theme.texts.tapTitle2};
  margin-bottom: 16px;
  position: relative;

  & span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const tapTitle2Fillter = styled.img`
  right: 33px;
  position: absolute;
  cursor: pointer;
`;

export const searchResult = styled.div`
  ${(props) => props.theme.texts.resultValue1};
  display: flex;
  width: 100%;
  margin-bottom: 36px;
  margin-left: 24px;
  align-items: center;
`;

export const searchResultIcon = styled.img`
  margin-right: 9px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
