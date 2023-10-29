import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsArrowLeft, BsArrowLeftShort } from 'react-icons/bs';

// type LocationType = 'notifications' | 'map' | 'friends';

// const locationTitle: Record<LocationType, string> = {
//   notifications: '알림',
//   map: '위치 찾기',
//   friends: '친구 '
// };

const getTitle = (location: string) => {
  let title = '';
  if (location === 'notifications') {
    title = '알림';
  } else if (location === 'mapSearch') {
    title = '지도';
  } else if (location.includes('member')) {
    title = '일행';
  } else if (location === 'login') {
    title = '로그인';
  } else if (location === 'signup') {
    title = '회원가입';
  } else if (location.includes('itinerary')) {
    title = '여정';
  } else {
    title = '';
  }

  return title;
};

// 수정 페이지인지
type IsEdit = {
  edit: boolean;
};

function Header({ edit }: IsEdit) {
  const navigate = useNavigate();
  const page = useLocation().pathname.substring(1);

  return (
    <NavContainer>
      <NavWrap>
        <BackWrap>
          <BackBtn onClick={() => navigate(-1)}>
            <BsArrowLeftShort size='24' />
          </BackBtn>
          <NavTitle>{getTitle(page)}</NavTitle>
        </BackWrap>
        {edit && (
          <div>
            <CompleteBtn>완료</CompleteBtn>
          </div>
        )}
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-bottom: solid #dcdcdc 1px;
`;

const NavWrap = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

const BackWrap = styled.div`
  display: flex;
  align-items: center;
`;

const NavTitle = styled.div`
  margin-left: 10px;
  font-size: 18px;
`;

const BackBtn = styled.button`
  border: none;
  background: none;
  padding: 0;
`;

const CompleteBtn = styled.button`
  border: none;
  background: none;
  color: #056676;
  font-size: 16px;
  font-weight: 600;
`;

export default Header;
