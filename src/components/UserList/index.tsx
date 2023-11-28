import React, { useEffect, useRef } from 'react';
import * as us from './userListStyle';
import * as gs from '../../styles/GlobalStyles';
import recruitingImage from '../../asset/recruiting.svg';

interface Postdata {
  key: number;
  id: number;
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

const UserList: React.FC<
  React.PropsWithChildren<Postdata & { isListIconClicked: boolean }>
> = ({
  id,
  nick,
  imgurl,
  destination,
  title,
  post,
  startDate,
  endData,
  personnel,
  dibs,
  isListIconClicked
}) => {
  return (
    <us.postwrapper>
      <us.postBox
        to={`/trip/${id}`}
        style={{ display: isListIconClicked ? '' : 'none' }}
      >
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

      <us.titleContentsBox
        to={`/trip/${id}`}
        style={{ display: isListIconClicked ? 'none' : '' }}
      >
        <us.titlePostImgBox>
          <us.titlePostImg src={imgurl} alt='유저 프로필' />
        </us.titlePostImgBox>

        <us.titlePostContent>
          [{destination}] {title}
        </us.titlePostContent>
      </us.titleContentsBox>
    </us.postwrapper>
  );
};

export default UserList;
