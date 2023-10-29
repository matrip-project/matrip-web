import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

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

export const PostButton = styled.div`
  width: 100%;
  display: flex;
  border-radius: 40px;
  margin: auto;
  margin-top: 15px;
  gap: 20px;
`;

export const PostButtonL = styled.div`
  width: 162px;
  height: 42px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #056676;
  color: white;
  border-radius: 16px 16px 0px 0px;
  justify-content: center;
`;

export const PostButtonR = styled.div`
  width: 162px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5eaaa8;
  color: white;
  border-radius: 16px;
  justify-content: center;
`;

export const ApplicationBackGround = styled.div`
  width: 100%;
  border-top: 2px solid #056676;
`;

export const ManagementBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ManagementBtnL = styled.button`
  width: 42px;
  height: 42px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #056676;
  color: white;
  border-radius: 100%;
  justify-content: center;
`;

export const ManagementBtnR = styled.button`
  width: 42px;
  height: 42px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  color: white;
  border-radius: 100%;
  justify-content: center;
`;