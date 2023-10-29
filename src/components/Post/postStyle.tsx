import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postBox = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  border-bottom: solid #c5c5c5 1px;
  position: relative;
`;

export const profileBox = styled(Link)`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const profileImgBox = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 30px;
`;

export const profileImg = styled.img`
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

export const postContent = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const postTitle = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 20px;
`;

export const postPeriod = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: gray;
`;

export const postDibsBtn = styled.div`
  position: absolute;
  right: 40px;
`;
