import React from 'react';
import './index.scss';

import * as iss from './TripScheduleStyle';
import * as gs from '../../styles/GlobalStyles';
import { postdata } from '../../data/postdata';
import { AiOutlineHeart } from 'react-icons/ai';
import UserList from '../../components/UserList';

const TripSchedule: React.FC = () => {
  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.wantList>찜 목록</iss.wantList>
        <iss.userList>
          {postdata.map((data, index) => {
            return (
              <UserList
                key={index}
                id={data.id}
                nick={data.nick}
                imgurl={data.imgurl}
                destination={data.destination}
                title={data.title}
                post={data.post}
                startDate={data.startDate}
                endData={data.endData}
                personnel={data.personnel}
                dibs={data.dibs}
                
              />
            );
          })}
        </iss.userList>
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default TripSchedule;
