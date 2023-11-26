import React from 'react';
import * as mcl from './myCompanionLogStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';

const MyInterestedCompanionLog: React.FC = () => {
  return (
    <gs.MainContainer>
      <mcl.TitleListIconBox>
        <mcl.ListIcon src={listIcon}></mcl.ListIcon>
        <mcl.TitleIcon src={TitleIcon}></mcl.TitleIcon>
      </mcl.TitleListIconBox>

      <UserList />
    </gs.MainContainer>
  );
};

export default MyInterestedCompanionLog;
