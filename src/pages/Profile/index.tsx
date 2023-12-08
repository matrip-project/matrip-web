import React from 'react';
import * as gs from '../../styles/GlobalStyles';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import UserIntro from '../../components/UserIntro';
import {Spacer, Text} from '../../components/@atoms';
import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

import rightIcon from '../../asset/arrowRight.svg';
import {ReactComponent as ProfileIcon} from '../../asset/profileNone.svg';

import {userDataEx} from '../../data/userDummyData';
import {useAppSelector} from '../../redux/hooks';


const HISTROY = ['관심 동행 목록', '내가 쓴 글'];

// !!TODO 다른 사람이 보는 페이지도 이 페이지로 처리

const Profile = () => {
    const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    return (
        <gs.MainContainer>
            <Header edit={false}/>
            {userData ?
                <gs.MainBox>
                    <LinkToProfile to='/editProfile'>
                        <ProfileIcon width={60} height={60} />
                        <Spacer width={15}/>
                        <div>
                            <Text type='title1'>{userData.nickname} {'>'} </Text>
                            <Spacer height={6}/>
                            <Text type='body2'>{userData.email}</Text>
                        </div>
                    </LinkToProfile>
                    <Spacer height={32}/>
                    <UserDateText>
                        <div>
                            {userDataEx.hashTags.map((tag: string, idx: number) => {
                                return (
                                    <span key={idx}>#{tag} </span>
                                );
                            })
                            }
                            <span>를 선호합니다.</span>
                            <Text>즉흥적인 여행을 떠나는 여행자에요</Text>
                        </div>
                        <Text>{userData.intro}</Text>
                    </UserDateText>
                    <Spacer height={16}/>
                    <SnsSection>
                        <FaFacebookSquare size={20}/>
                        <Spacer width={10}/>
                        <FaInstagram size={20}/>
                        <Spacer width={10}/>
                        <MdShare size={20}/>
                        <Spacer width={10}/>
                        <MdShare size={20}/>
                        <Spacer width={10}/>
                        <MdShare size={20}/>
                    </SnsSection>
                    <ImageSection>
                        <Spacer height={16}/>
                        <Text>나를 표현할 수 있는 사진을 올려주세요. </Text>
                        <Spacer height={16}/>
                        <ImageCarousel images={userDataEx.images}/>
                        {/*<ImageCarousel images={userState.user.profile_list} />*/}
                    </ImageSection>
                    <Spacer height={50}/>
                    <History>
                        <LinkTitle>
                            <Text>동행로그</Text>
                        </LinkTitle>

                        {HISTROY.map((item, idx) => {
                            let linkPath = '/';

                            if (item === '관심 동행 목록') {
                                linkPath = '/companionLog/myInterestedCompanionLog';
                            } else if (item === '내가 쓴 글') {
                                linkPath = '/companionLog/myPostWrote';
                            }

                            return (
                                <LinkItem key={idx} to={linkPath}>
                                    <Text>{item}</Text>
                                    <Spacer width={10}/>
                                    <img src={rightIcon}/>
                                </LinkItem>
                            );
                        })
                        }
                    </History>
                </gs.MainBox>
                :
                <>
                </>
            }

        </gs.MainContainer>

    );
};


export default Profile;

const LinkToProfile = styled(Link)`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  
`;

const UserDateText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const SnsSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};
  padding-bottom: 14px;
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

const LinkTitle = styled.div`
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};
  display: flex;
  align-items: center;
`;

const LinkItem = styled(Link)`
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};
  display: flex;
  align-items: center;
`;
