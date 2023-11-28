import React from 'react';
import * as mcl from './myCompanionLogStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';
import { postdata } from '../../data/postdata';

const MyInterestedCompanionLog: React.FC = () => {
  return (
    <gs.MainContainer>
      <mcl.TitleListIconBox>
        <mcl.ListIcon src={listIcon}></mcl.ListIcon>
        <mcl.TitleIcon src={TitleIcon}></mcl.TitleIcon>
      </mcl.TitleListIconBox>

      {postdata.map((data, index) => {
        return (
          <UserList
            key={index}
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
    </gs.MainContainer>
  );
};

export default MyInterestedCompanionLog;
