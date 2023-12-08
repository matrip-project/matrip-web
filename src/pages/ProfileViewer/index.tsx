import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import * as gs from '../../styles/GlobalStyles';
import {Spacer, Text} from '../../components/@atoms';
import {userDataEx} from '../../data/userDummyData';
import ImageCarousel from '../../components/ImageCarousel';
import rightIcon from '../../asset/arrowRight.svg';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import {ReactComponent as ProfileIcon} from '../../asset/profileNone.svg';
import {getMyUserData} from '../../apis/api/userData';

type User = {
  id: number;
  email: string;
  nickname: string;
  intro: string;
};

const ProfileViewer = () => {
  const { id } = useParams();
  const idNumber = id ? Number(id) : 0;

  const [userData, setUserData] = useState<User | null>(null);
console.log(userData);

  useEffect(() => {
    if (idNumber !== 0) {
      getMyUserData(idNumber).then(data => setUserData(data));
    }
  }, [idNumber]);

  return (
      <gs.MainContainer>
        <Header edit={false}/>
        {userData ?
            <gs.MainBox>
              <LinkToProfile >
                <ProfileIcon width={60} height={60}/>
                <Spacer width={15}/>
                <div>
                  <Text type='title1'>{userData.nickname}</Text>
                  <Text type='body2'>{userData.email}</Text>
                </div>
              </LinkToProfile>
              <UserDateText>
                <div>
                  {userDataEx.hashTags.map((tag: string, idx: number) => {
                    return (
                        <span key={idx}>#{tag} </span>
                    );
                  })
                  }
                  <span>를 선호합니다.</span>
                </div>
                <Text>{userData.intro}</Text>
              </UserDateText>
              <ImageSection>
                <Spacer height={16}/>
                <Text>나를 표현할 수 있는 사진을 올려주세요. </Text>
                <Spacer height={16}/>
                <ImageCarousel images={userDataEx.images}/>
                {/*<ImageCarousel images={userState.user.profile_list} />*/}
              </ImageSection>
              <Spacer height={50}/>
            </gs.MainBox>
            :
            <>
            </>
        }

      </gs.MainContainer>
  );
};

export default ProfileViewer;


const LinkToProfile = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  
`;

const UserDateText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const History = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LinkItem = styled(Link)`
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};

  display: flex;
  align-items: center;
`;
