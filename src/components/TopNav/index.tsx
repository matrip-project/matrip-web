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

  if (hideTopNav) {
    return null;
  }

  return hideTopNav ? null : (
    <gs.MainContainer>
      <mcl.TopNavBox>
        <mcl.BackPageButton
          onClick={() => navigate(-1)}
          src={backButtonIcon}
        ></mcl.BackPageButton>
      </mcl.TopNavBox>
      <mcl.Title>동행로그</mcl.Title>
    </gs.MainContainer>
  );
};

export default TopNav;