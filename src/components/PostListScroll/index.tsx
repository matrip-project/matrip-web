import React, { useEffect, useState } from 'react';

import { postdata } from '../../data/postdata';
import * as us from './UserListStyle';
import recruitingImage from '../../asset/recruiting.png';

const PostListScroll: React.FC = () => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  // 감지할 스크롤 이벤트 추가
  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom) {
        setDisplayCount((prevCount) => prevCount + 5);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {postdata.slice(0, displayCount).map((post: any) => (
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

export default PostListScroll;
