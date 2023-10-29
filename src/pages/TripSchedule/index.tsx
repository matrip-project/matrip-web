import React from 'react';
import './index.scss';

import * as iss from './TripScheduleStyle';
import * as gs from '../../styles/GlobalStyles';

import { postdata } from '../../data/postdata';
import { AiOutlineHeart } from 'react-icons/ai';
import UserList from '../../components/UserList';

const TripSchedule: React.FC = () => {
  const post = postdata[0];

  return (
    <gs.MainContainer>
      <iss.MainContainer>
        <iss.postBox key={post.id}>
          <iss.profileBox to={'/userProfile'}>
            <iss.profileImgBox>
              <iss.profileImg src={post.imgurl} alt='유저 프로필' />
            </iss.profileImgBox>
            {/* <iss.Nickname>{post.nick}</iss.Nickname> */}
          </iss.profileBox>
          <iss.postContent to={'/itineraryInfo'}>
            <iss.postTitle>{post.destination}</iss.postTitle>
            <iss.postPeriod>
              {post.startDate}~{post.endData}
            </iss.postPeriod>
            <iss.postPeriod>현재 {post.personnel}명</iss.postPeriod>
          </iss.postContent>
        </iss.postBox>

        <iss.wantList>찜 목록</iss.wantList>
        <iss.userList>
          <UserList />
        </iss.userList>
      </iss.MainContainer>
    </gs.MainContainer>
  );
};

export default TripSchedule;
