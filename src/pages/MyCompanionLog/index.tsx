import React from 'react';

import * as mcl from './myCompanionLogStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.png';
import TitleIcon from '../../asset/titleIcon.png';
import backButtonIcon from '../../asset/backButtonIcon.png';

const MyCompanionLog: React.FC = () => {
  return (
    <gs.MainContainer>
      <mcl.TopNavBox>
        <mcl.BackPageButton src={backButtonIcon}></mcl.BackPageButton>
      </mcl.TopNavBox>

      <mcl.Title>동행로그</mcl.Title>

      <mcl.TitleListIconBox>
        <mcl.ListIcon src={listIcon}></mcl.ListIcon>
        <mcl.TitleIcon src={TitleIcon}></mcl.TitleIcon>
      </mcl.TitleListIconBox>

      <UserList />
    </gs.MainContainer>
  );
};

export default MyCompanionLog;
