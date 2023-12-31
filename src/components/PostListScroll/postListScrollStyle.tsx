import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postBox = styled.div`
  width: 337px;
  height: 98px;
  justify-content: center;
  margin: auto;
  border-bottom: solid #c5c5c5 1px;
  position: relative;
  display: flex;
  padding: 12px;

  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 22px;
`;

export const noPost = styled.div`
  ${(props) => props.theme.texts.tapTitle2};
  font-size: 16px;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const contentsTopBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`;

export const contentsBox = styled.div``;

export const postImgBox = styled.div`
  width: 85px;
  height: 65px;
  margin-top: 20px;
`;

export const postImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
`;

export const Nickname = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

export const userImgNone = styled.img`
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;

export const postContent = styled.div`
  width: 228px;
  display: flex;
  text-decoration: none;
  color: #242424;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const postTitle = styled.div`
  ${(props) => props.theme.texts.tapTitle1};
  margin-bottom: 4px;
`;

export const postPeriod = styled.div`
  margin-left: 6px;
  align-items: center;

  ${(props) => props.theme.texts.menuSelect};
`;

export const postDibsBtn = styled.div`
  right: 40px;
`;

export const postNickname = styled.div`
  ${(props) => props.theme.texts.username};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 12px;
  position: absolute;
`;
