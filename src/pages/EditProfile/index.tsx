import React, { useState, ChangeEvent } from 'react';
import * as gs from '../../styles/GlobalStyles';
import styled from 'styled-components';

import UserIntro from '../../components/UserIntro';
import FormInput from '../../components/FormInput';
import { Text, InputLabel, Spacer } from '../../components/@atoms';
import SnsConnect from '../../components/SnsConnect';
import ImageCarousel from '../../components/ImageCarousel';


import { userData } from '../../data/userDummyData';

const EditProfile = () => {

  const [input, setInput] = useState({
    nickname: userData.nickName,
    description: userData.description,
  });

  const [fields, setFields] = useState(['']);


  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <ImageWithName>
          <UserIntro iconSize={80}></UserIntro>
          <FormInput
            name='nickname'
            formType='text'
            value={input.nickname}
            onChange={handleInputChange}
            placeHolder={userData.nickName}
          />
        </ImageWithName>

        <UserInfoContainer>
          <InputLabel label='회원정보' />
          <Text type='body1'>이메일</Text>
        </UserInfoContainer>
        <Spacer height={30}/>
        <BoxContainer>
          <InputLabel label='소개글' />
          <TextArea
            name='description'
            value={input.description}
            onChange={handleInputChange}
            placeholder={userData.description}
          />
        </BoxContainer>
        <BoxContainer>
          <InputLabel label='소셜 계정 연동' />
          <SnsConnect fields={fields} setFields={setFields} />
        </BoxContainer>
        <BoxContainer>
          <button>사진 추가</button>
          <ImageCarousel images={userData.images}/>
        </BoxContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default EditProfile;

const ImageWithName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const BoxContainer = styled.div`
    width: 100%;
    margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  width: 98%; 
  padding: 1% 1%;
  height: 80px; 
  border: 1px solid #ccc; 
  border-radius: 4px; 
  resize: none; 
`;

const UserInfoContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.neutral1};
`;