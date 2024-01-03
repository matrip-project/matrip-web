import React, { useState, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';
import addPostButton from '../../asset/addPostButton.svg';
import share from '../../asset/share.svg';
import Search from '../../components/Search';
import { useDispatch } from 'react-redux';
import HeaderLogo from '../../components/HeaderLogo';
import { useNavigate } from 'react-router';
import { deleteAll } from '../../redux/modules/postSlice';
import { copyLink } from '../../utils/copyLink';
import { getJourneyList } from '../../apis/api/journey';
import { DataType } from '../../types/journeyData';
import PostCard from '../../components/PostCard';
import PopularPlace from './homeComponents/PopularPlace';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [journeys, setJourneys] = useState<DataType>({
    dtoList: [],
    totalPage: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      await getJourneyList().then((res) => {
        setJourneys(res || { dtoList: [] });
      });
    };

    fetchData();
  }, []);

  const onClickAddButton = () => {
    dispatch(deleteAll());
    navigate('/posting');
  };

  return (
    <>
      <gs.MainContainer>
        <gs.MainBox>
          <HeaderLogo />
          <Search />
          <hs.TitleBox>
            <hs.MainTitle>동행일정</hs.MainTitle>
            <hs.tapTitle2>
              <span>· {journeys.dtoList.length} </span>동행일정을 둘러보세요.
            </hs.tapTitle2>
          </hs.TitleBox>
          <hs.PostCardContianer>
            {journeys.dtoList.slice(0, 5).map((data, index) => (
              <PostCard key={index} data={data} isListType={true} />
            ))}
          </hs.PostCardContianer>
          <hs.ScheduleMoreBtn to={'/companionList'}>
            일정 더보기 +
          </hs.ScheduleMoreBtn>
          <PopularPlace />

          <hs.InviteFriend onClick={() => copyLink()}>
            친구 초대하기 <hs.InviteFriendImg src={share} />
          </hs.InviteFriend>

          <hs.buttonWrraperContainer>
            <hs.postContainer onClick={onClickAddButton}>
              <hs.WriteBtn src={addPostButton}></hs.WriteBtn>
            </hs.postContainer>
          </hs.buttonWrraperContainer>
        </gs.MainBox>
      </gs.MainContainer>
    </>
  );
};

export default Home;
