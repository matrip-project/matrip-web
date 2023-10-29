import React, { useEffect, useState } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as ds from './dibsStyle';
import { dibsdata } from '../../data/dibsdata';
import DibsBtn from '../../components/DibsBtn';
import { useAppSelector } from '../../redux/hooks';

function Dibs() {
  const dibsStateData = useAppSelector((state) => state.dibsSlice);
  console.log(dibsStateData);

  // id 기준 dibsdata와 store안 데이터의 교집합
  const filteredDibs = dibsdata.filter((dibs) =>
    dibsStateData.map((ds) => ds.id).includes(dibs.id)
  );

  console.log(filteredDibs);

  return (
    <gs.MainContainer>
      <gs.MainBox>
        {filteredDibs.map((dibs) => (
          <ds.DibsBox key={dibs.id}>
            <ds.infoBox>
              <ds.Desination>{dibs.destination}</ds.Desination>
              <ds.Period>
                {dibs.startDate}-{dibs.endDate}
              </ds.Period>
              <ds.ProfileList>
                <ds.ProfileBox>
                  <ds.Profile src={dibs.imgurl} alt='유저 프로필' />
                </ds.ProfileBox>
              </ds.ProfileList>
            </ds.infoBox>
            <div>
              <DibsBtn id={dibs.id} state={true} />
            </div>
          </ds.DibsBox>
        ))}
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Dibs;
