import React, { useEffect, useState } from 'react';

import { postdata } from '../../data/postdata';
import * as us from './postListScrollStyle';
import recruitingImage from '../../asset/recruiting.svg';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';

const PostListScroll: React.FC = () => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const keyword = useSelector(selectKeyword);

  // 키워드를 기반으로 게시물 필터링
  const filteredPosts = postdata.filter(
    (post) =>
      post.destination.toLowerCase().includes(keyword) ||
      post.title.toLowerCase().includes(keyword)
  );

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
      {filteredPosts.length === 0 ? (
        <div>No posts found.</div>
      ) : (
        filteredPosts.slice(0, displayCount).map((post: any) => (
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
        ))
      )}
    </>
  );
};

export default PostListScroll;
