import React, { useEffect, useRef } from 'react';

import { postdata } from '../../data/postdata';
import * as us from './UserListStyle';
import recruitingImage from '../../asset/recruiting.png';

const UserList: React.FC = () => {
  const target = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 1.0
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const target = entries[0].target;
      if (target instanceof HTMLElement && entries[0].isIntersecting) {
        // loadMoreData();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    const currentTarget = target.current;

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <>
      {postdata.map((post: any) => (
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
