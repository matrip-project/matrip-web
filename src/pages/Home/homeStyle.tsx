import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

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
  margin-bottom: 12px;
`;

export const buttonWrraperContainer = styled.div`
  position: relative;
  width: 390px;
`;

export const postContainer = styled(Link)`
  position: fixed;
  bottom: 80px;
  right: 25px;
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
  margin-left: 23px;
  margin-bottom: 20px;
`;

export const PopularTravelBox = styled.div`
  display: flex;
  margin-left: 23px;
`;

export const PopularImgbox = styled(Link)`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  margin-right: 20px;
`;

export const PopularImg = styled.img``;

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
  margin-bottom: 118px;

  color: var(--theme-white-theme-core-tokens-pure-white, #fff);
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
