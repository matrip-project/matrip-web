import { Link, Navigate } from 'react-router-dom';
import { styled } from 'styled-components';

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
  margin-bottom: 12px;

  & span {
    color: #d30065;
  }
`;

export const buttonWrraperContainer = styled.div`
  position: relative;
  width: 390px;
`;

export const postContainer = styled.div`
  position: fixed;
  bottom: 80px;
  right: 25px;
  cursor: pointer;
`;

export const WriteBtn = styled.img``;

export const ScheduleMoreBtn = styled(Link)`
  display: inline-flex;
  padding: 6px 14px 6px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 48px;
  border: 0.5px solid var(--Deactivation, #adadad);
  background: #fff;
  margin-bottom: 40px;

  color: var(--sub, #666);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
`;

export const PopularTravel = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
  margin-left: 23px;
`;

export const PopularTravelBox = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PopularImgbox = styled(Link)`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  width: 107px;
  aspect-ratio: 107 / 100;
`;

export const PopularImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const InviteFriend = styled.button`
  display: inline-flex;
  padding: 12px 20px;
  align-items: flex-start;
  gap: 6px;
  border-radius: 50px;
  border: 0px;
  background: var(--Main-color, #d30065);
  color: white;
  margin-top: 40px;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  justify-content: center;
  align-items: center;
`;

export const InviteFriendImg = styled.img`
  z-index: 1;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #d30065;
`;
