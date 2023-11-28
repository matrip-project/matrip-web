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

export const noPost = styled.div`
  ${(props) => props.theme.texts.tapTitle2};
  font-size: 16px;
  height: 501px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  margin-left: 23px;
  margin-bottom: 12px;
`;

export const TitleListIconBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
  justify-content: right;
  align-items: center;
  margin-right: 24px;
  gap: 8px;
`;

export const TitleIcon = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

export const ListIcon = styled.img`
  height: 18px;
  width: 20px;
  cursor: pointer;
`;
