import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as Back } from '../../asset/backButtonIcon.svg';
import { ReactComponent as Share } from '../../asset/shareNoBg.svg';
import { copyLink } from '../../utils/copyLink';

const getTitle = (location: string) => {
  let title = '';
  if (location === 'login') {
    title = '로그인';
  } else if (location === 'signup') {
    title = '회원가입';
  } else if (location.includes('comments')) {
    title = '댓글';
  } else {
    title = '';
  }

  return title;
};

// 수정 페이지인지
interface HeaderProps {
  edit: boolean;
  onClick?: () => void;
}

function Header({ edit, onClick }: HeaderProps) {
  const navigate = useNavigate();
  const page = useLocation().pathname.substring(1);

  return (
    <NavContainer>
      <NavWrap>
        <BackWrap>
          <BackBtn onClick={() => navigate(-1)} />
          <NavTitle>{getTitle(page)}</NavTitle>
        </BackWrap>
        <ButtonsWrap>
          {edit && <CompleteBtn onClick={onClick}>저장</CompleteBtn>}
          {page.includes('trip') && <ShareBtn onClick={copyLink} />}
        </ButtonsWrap>
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
`;

const NavWrap = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
`;

const BackWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const NavTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
`;

const BackBtn = styled(Back)`
  cursor: pointer;
`;
const ShareBtn = styled(Share)`
  cursor: pointer;
`;

const CompleteBtn = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 16px;
  font-weight: 600;
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
