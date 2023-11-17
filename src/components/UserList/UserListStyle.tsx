import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postBox = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  align-items: center;
  border-bottom: solid #c5c5c5 1px;
  position: relative;
  padding: 12px;

  border-radius: 16px;
  background: #fff;

  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`;

export const contentsTopBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 11px;
`;

export const contentsBox = styled.div``;

export const postImgBox = styled.div`
  width: 94px;
  height: 71px;
  margin-right: 30px;
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
  color: #242424;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const postPeriod = styled.div`
  display: block;
  margin-bottom: 10px;
  margin-left: 6px;

  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const postDibsBtn = styled.div`
  right: 40px;
`;

export const postNickname = styled.div`
  color: var(--Deactivation, #adadad);
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
