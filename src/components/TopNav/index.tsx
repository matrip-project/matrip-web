import React, { useState, useEffect } from 'react';
import * as mcl from './myCompanionLogStyle';
import * as gs from '../../styles/GlobalStyles';
import backButtonIcon from '../../asset/backButtonIcon.svg';
import { useLocation, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';

const TopNav: React.FC = () => {
  const navigate = useNavigate();
  const [hideTopNav, setHideTopNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const isInterestedCompanionLog =
      location.pathname === '/companionLog/myInterestedCompanionLog';
    const isPostWrote = location.pathname === '/companionLog/myPostWrote';

    setHideTopNav(!(isInterestedCompanionLog || isPostWrote));
  }, [location]);

  // 추후 마이페이지로 이동하는 동작 구현
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  if (hideTopNav) {
    return null;
  }

  return hideTopNav ? null : (
    <gs.MainContainer>
      <mcl.TopNavBox>
        <mcl.BackPageButton
          onClick={handleBackButtonClick}
          src={backButtonIcon}
        ></mcl.BackPageButton>
      </mcl.TopNavBox>
      <mcl.Title>동행로그</mcl.Title>
    </gs.MainContainer>
  );
};

export default TopNav;
