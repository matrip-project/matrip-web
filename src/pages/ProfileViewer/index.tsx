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
import {InputLabel} from '../../components/@atoms';
import {FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import {MdShare} from 'react-icons/md';

type User = {
    id: number;
    email: string;
    nickname: string;
    intro: string;
};

const ProfileViewer = () => {
    const {id} = useParams();
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
                    <LinkToProfile>
                        <ProfileIcon width={80} height={80}/>
                        <Spacer height={12}/>
                        <Text type='title1'>{userData.nickname}</Text>
                        <Spacer height={8}/>
                        <Text type='body2'>{userData.email}</Text>

                    </LinkToProfile>
                  <Spacer height={30}/>
                    <UserDateText>
                      <InputLabel label={'소개글'} />
                      <Spacer height={16}/>
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
                  <Spacer height={30}/>

                  <SnsSection>
                    <InputLabel label={'소셜 계정'} />
                    <Spacer height={16}/>
                    <SnsIcons>
                      <FaFacebookSquare size={20}/>
                      <Spacer width={10}/>
                      <FaInstagram size={20}/>
                      <Spacer width={10}/>
                      <MdShare size={20}/>
                      <Spacer width={10}/>
                      <MdShare size={20}/>
                      <Spacer width={10}/>
                      <MdShare size={20}/>
                    </SnsIcons>

                  </SnsSection>
                    <ImageSection>
                        <Spacer height={16}/>
                        <Text>{userData.nickname}님을 표현할 수 있는 사진</Text>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.neutral1};

`;

const UserDateText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  
=======

>>>>>>> ce332a8616b7348a5d5162b0d89db2e27800e743
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const SnsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const SnsIcons = styled.div`
  display: flex;
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
