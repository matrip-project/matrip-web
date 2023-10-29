import React, { useEffect, useRef } from 'react';

import { postdata } from '../../data/postdata';
import DibsBtn from '../DibsBtn';
import * as us from './UserListStyle';

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
          <us.profileBox to={'/userProfile'}>
            <us.profileImgBox>
              <us.profileImg src={post.imgurl} alt='유저 프로필' />
            </us.profileImgBox>
          </us.profileBox>

          <us.postContent to={'/itineraryInfo'}>
            <us.postTitle>{post.destination}</us.postTitle>
            <us.postPeriod>
              {post.startDate}~{post.endData}
            </us.postPeriod>
            <us.postPeriod>현재 {post.personnel}명</us.postPeriod>
          </us.postContent>
          <us.postDibsBtn>
            <DibsBtn id={post.id} state={post.state} />
          </us.postDibsBtn>
        </us.postBox>
      ))}

      {/* <div style={{ height: '30px', backgroundColor: 'red' }} ref={target}>
        target
      </div> */}
    </>
  );
};

export default UserList;
