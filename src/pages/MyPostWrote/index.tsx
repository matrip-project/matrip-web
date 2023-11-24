import React from 'react';

import * as mcl from './myPostWroteStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';
import backButtonIcon from '../../asset/backButtonIcon.svg';

const MyPostWrote: React.FC = () => {
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

export default MyPostWrote;
