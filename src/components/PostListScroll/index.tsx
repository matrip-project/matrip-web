import React, { useEffect, useState } from 'react';
import { postdata } from '../../data/postdata';
import * as pls from './postListScrollStyle';
import recruitingImage from '../../asset/recruiting.svg';
import { useSelector } from 'react-redux';
import { selectKeyword } from '../../redux/modules/searchSlice';
import { selectPopularTravelKeyword } from '../../redux/modules/keywordImgSlice';

interface PostListScrollProps {
  onNoPosts: () => void; 
  onShowTitleBox: () => void;
}

const PostListScroll: React.FC<PostListScrollProps> = ({ onShowTitleBox, onNoPosts }) => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const searchKeyword = useSelector(selectKeyword);
  const popularTravelKeyword = useSelector(selectPopularTravelKeyword);

  // 일단 keyword 검색과 인기여행지 눌렀을 때 합쳐서 구현 - 추후 백엔드 api 들어오면 맞게 수정 예정
  const keyword = searchKeyword || popularTravelKeyword;

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

  // 필터링된 포스트 배열 길이 값 관리
  useEffect(() => {
    if (filteredPosts.length === 0) {
      onNoPosts();
    } else {
      onShowTitleBox();
    }
  }, [filteredPosts, onNoPosts, onShowTitleBox]);

  return (
    <>
      {filteredPosts.length === 0 ? (
        <pls.noPost>게시글이 없어요.</pls.noPost>
      ) : (
        filteredPosts.slice(0, displayCount).map((post: any) => (
          <pls.postBox key={post.id}>
            <pls.contentsBox>
              <pls.contentsTopBox>
                <pls.postDibsBtn>
                  <img src={recruitingImage} alt='Recruiting Image' />
                </pls.postDibsBtn>
                <pls.postPeriod>
                  {post.startDate}~{post.endData}
                </pls.postPeriod>
              </pls.contentsTopBox>

              <pls.postContent>
                <pls.postTitle>
                  [{post.destination}] {post.title}
                </pls.postTitle>
              </pls.postContent>

              <pls.postNickname>{post.nick}</pls.postNickname>
            </pls.contentsBox>

            <pls.postImgBox>
              <pls.postImg src={post.imgurl} alt='유저 프로필' />
            </pls.postImgBox>
          </pls.postBox>
        ))
      )}
    </>
  );
};

export default PostListScroll;
