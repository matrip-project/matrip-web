import React, { useEffect, useRef } from 'react';

import { postdata } from '../../data/postdata';
import * as us from './userListStyle';
import recruitingImage from '../../asset/recruiting.svg';

interface Postdata {
  key: number;
  nick: string;
  imgurl: string;
  destination: string;
  title: string;
  post: string;
  startDate: string;
  endData: string;
  personnel: number;
  dibs: boolean;
}

interface PostListScrollProps {
  onNoPosts: () => void; 
  onShowTitleBox: () => void;
}

const UserList: React.FC<React.PropsWithChildren<Postdata>> = ({
  key,
  nick,
  imgurl,
  destination,
  title,
  post,
  startDate,
  endData,
  personnel,
  dibs
}) => {
  return (
    <>
      <us.postBox key={key} to={`/trip/${key}`}>
        <us.contentsBox>
          <us.contentsTopBox>
            <us.postDibsBtn>
              <img src={recruitingImage} alt='모집중' />
            </us.postDibsBtn>
            <us.postPeriod>
              {startDate}~{endData}
            </us.postPeriod>
          </us.contentsTopBox>

          <us.postContent>
            <us.postTitle>
              [{destination}] {title}
            </us.postTitle>
          </us.postContent>

          <us.postNickname>{nick}</us.postNickname>
        </us.contentsBox>

        <us.postImgBox>
          <us.postImg src={imgurl} alt='유저 프로필' />
        </us.postImgBox>
      </us.postBox>
    </>
  );
};

export default UserList;