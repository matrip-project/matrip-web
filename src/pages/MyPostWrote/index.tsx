import React, { useEffect, useState } from 'react';
import * as mcl from './myPostWroteStyle';
import * as gs from '../../styles/GlobalStyles';
import UserList from '../../components/UserList';
import listIcon from '../../asset/listIcon.svg';
import TitleIcon from '../../asset/titleIcon.svg';
import { postdata } from '../../data/postdata';

const MyPostWrote: React.FC = () => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [isListIconClicked, setListIconClicked] = useState(false);

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

  const handleListIconClick = () => {
    setListIconClicked(!isListIconClicked);
  };

  return (
    <gs.MainContainer>
      <mcl.TitleListIconBox>
        <mcl.ListIcon src={listIcon} onClick={handleListIconClick}></mcl.ListIcon>
        <mcl.TitleIcon src={TitleIcon}></mcl.TitleIcon>
      </mcl.TitleListIconBox>
      {postdata.length === 0 ? (
        <mcl.noPost>게시글이 없어요.</mcl.noPost>
      ) : (
        postdata.slice(0, displayCount).map((data, index) => {
          return (
            <UserList
              key={index}
              id={data.id}
              nick={data.nick}
              imgurl={data.imgurl}
              destination={data.destination}
              title={data.title}
              post={data.post}
              startDate={data.startDate}
              endData={data.endData}
              personnel={data.personnel}
              dibs={data.dibs}
              
              />
          );
        })
      )}
    </gs.MainContainer>
  );
};

export default MyPostWrote;
