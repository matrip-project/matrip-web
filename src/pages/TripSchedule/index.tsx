import React from 'react';
import './index.scss';

import * as iss from './TripScheduleStyle';
import * as gs from '../../styles/GlobalStyles';

import { AiOutlineHeart } from 'react-icons/ai';
import UserList from '../../components/UserList';

const TripSchedule: React.FC = () => {
  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.wantList>찜 목록</iss.wantList>
        <iss.userList>
          <UserList />
        </iss.userList>
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default TripSchedule;
