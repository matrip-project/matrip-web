import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { getColor } from '../../utils/colorUtils';

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
  margin-left: 23px;
`;

export const MainTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  margin-bottom: 8px;
`;

export const tapTitle2 = styled.div`
  ${(props) => props.theme.texts.tapTitle2};
  margin-bottom: 16px;
  position: relative;
`;

export const tapTitle2Fillter = styled.img`
  right: 33px;
  position: absolute;
  cursor: pointer;
`;