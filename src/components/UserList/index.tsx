import React, { useEffect, useRef } from 'react';
import * as us from './userListStyle';
import recruitingImage from '../../asset/recruiting.svg';

interface Journeys {
  key: number;
  id: number;
  memberName: string;
  imgurl: string;
  city: string;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
}

const UserList: React.FC<
  React.PropsWithChildren<Journeys & { isListIconClicked: boolean }>
> = ({
  id,
  memberName,
  imgurl,
  city,
  title,
  content,
  startDate,
  endDate,
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
              {startDate}~{endDate}
            </us.postPeriod>
          </us.contentsTopBox>

          <us.postContent>
            <us.postTitle>
              [{city}] {title}
            </us.postTitle>
          </us.postContent>

          <us.postNickname>{memberName}</us.postNickname>
        </us.contentsBox>

        <us.postImgBox>
          <us.postImg src={imgurl} alt='post img' />
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
          [{city}] {title}
        </us.titlePostContent>
      </us.titleContentsBox>
    </us.postwrapper>
  );
};

export default UserList;
