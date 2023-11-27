import React from 'react';
import * as gs from '../../styles/GlobalStyles';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserIntro from '../../components/UserIntro';
import { Spacer, Text } from '../../components/@atoms';
import ImageCarousel from '../../components/ImageCarousel';

import rightIcon from '../../asset/arrowRight.svg';

const userData = {
  'hashTags': ['맛집', '자연', '불멍'],
  'description': '즉흥적인 여행을 떠나는 여행자에요',
  'name': 'yongho',
  'images': [
    'http://via.placeholder.com/137x105',
    'http://via.placeholder.com/137x105',
    'http://via.placeholder.com/137x105',
    'http://via.placeholder.com/137x105',
    'http://via.placeholder.com/137x105',
    'http://via.placeholder.com/137x105',
  ]
};

const HISTROY = ['관심 동행 목록', '내가 쓴 글'];

const Profile = () => {
  return (
    <gs.MainContainer>
      <gs.MainBox>
        <LinkToProfile to={'/mypage/profile'}>
          <UserIntro iconSize={60}>
            <div>
              <Text type='title1'>{userData.name}</Text>
              <Text type='body2'>ssss</Text>
            </div>
          </UserIntro>
        </LinkToProfile>
        <UserDateText>
          <div>
            {userData.hashTags.map((tag, idx) => {
              return(
                <span key={idx}>#{tag} </span>
              );
            })
            }
            <span>를 선호합니다.</span>
          </div>
          <Text>{userData.description}</Text>
        </UserDateText>
        <ImageSection>
          <Spacer height={16}/>
          <Text>나를 표현할 수 있는 사진을 올려주세요. </Text>
          <Spacer height={16}/>
            <ImageCarousel images={userData.images}/>
        </ImageSection>
        <Spacer height={50}/>
        <History>
            <Text>동행로그</Text>
              {HISTROY.map((item, idx) => {
                return(
                  <LinkItem key={idx} to={'/'}>
                    <Text>{item}</Text>  
                    <Spacer width={10}/>
                    <img src={rightIcon}/> 
                  </LinkItem>
                );
              })
              }
        </History>
      </gs.MainBox>
    </gs.MainContainer>

  );
};

export default Profile;

const LinkToProfile = styled(Link)`
    width: 100%;
    height: 90px;
    
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