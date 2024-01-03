import { Link } from 'react-router-dom';
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
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const PostCardContianer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
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
  ${(props) => props.theme.texts.content2};
  display: inline-flex;
  padding: 6px 14px 6px 16px;
  gap: 10px;
  border-radius: 48px;
  border: 0.5px solid ${(props) => props.theme.colors.neutral2};
  margin-bottom: 40px;
  font-weight: 500;
`;

export const InviteFriend = styled.button`
  display: inline-flex;
  padding: 12px 20px;
  gap: 6px;
  border-radius: 50px;
  border: 0px;
  background: ${(props) => props.theme.colors.primary};
  margin: 30px 0 20px 0;
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
