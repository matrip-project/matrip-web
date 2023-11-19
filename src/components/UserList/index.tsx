import React, { useEffect, useRef } from 'react';

import { postdata } from '../../data/postdata';
import * as us from './userListStyle';
import recruitingImage from '../../asset/recruiting.png';

const UserList: React.FC = () => {
  return (
    <>
      {postdata.slice(0, 5).map((post: any) => (
        <us.postBox key={post.id}>
          <us.contentsBox>
            <us.contentsTopBox>
              <us.postDibsBtn>
                <img src={recruitingImage} alt='Recruiting Image' />
              </us.postDibsBtn>
              <us.postPeriod>
                {post.startDate}~{post.endData}
              </us.postPeriod>
            </us.contentsTopBox>

            <us.postContent>
              <us.postTitle>
                [{post.destination}] {post.title}
              </us.postTitle>
            </us.postContent>

            <us.postNickname>{post.nick}</us.postNickname>
          </us.contentsBox>

          <us.postImgBox>
            <us.postImg src={post.imgurl} alt='유저 프로필' />
          </us.postImgBox>
        </us.postBox>
      ))}
    </>
  );
};

export default UserList;
