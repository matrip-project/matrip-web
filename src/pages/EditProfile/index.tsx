import React, { useState, useRef, ChangeEvent } from 'react';
import * as gs from '../../styles/GlobalStyles';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import UserIntro from '../../components/UserIntro';
import FormInput from '../../components/FormInput';
import { Text, InputLabel, Spacer } from '../../components/@atoms';
import SnsConnect from '../../components/SnsConnect';
import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';
import {ReactComponent as ProfileIcon} from '../../asset/profileNone.svg';
import {updateUserProfile, addUserProfilePic, deleteUserProfilePic, addUserSocialLink, deleteUserSocialLink} from '../../apis/api/editProfile';
import {getMyUserData } from '../../apis/api/userData';
import {uploadImage} from '../../utils/uploadImage';
import { userDataEx } from '../../data/userDummyData';


const EditProfile = () => {
  const navigate = useNavigate();
  const fileInput = useRef<HTMLInputElement>(null);
  const userData = JSON.parse(sessionStorage.getItem('userData') || '{}');
  const [input, setInput] = useState({
    nickname: userData.nickname,
    intro: userData.intro,
  });
  const [file, setFile] = useState<File | null>(null);
  const [fields, setFields] = useState(userData.link_list);

  const onAdd = () => {
    fileInput.current?.click();  // 파일 입력 요소 클릭 이벤트 트리거
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = async () => {
    const res = await updateUserProfile(userData.id, input);
    await getMyUserData(userData.id);
    navigate('/mypage/profile');
  };

  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files){
    setFile(files[0]);
    const filePath = await uploadImage(files[0]);
    const upl = await addUserProfilePic(userData.id, filePath);
    await getMyUserData(userData.id);
  }
  };


  // const handleAddPic  async (picData) => {
  //   try {
  //     await addUserProfilePic(userData.id, picData);
  //     setImages(prevImages => [...prevImages, picData]); // 이미지 상태 업데이트
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //
  // const handleDeletePic = async (picIndex) => {
  //   try {
  //     await deleteUserProfilePic(userData.id, picIndex);
  //     setImages(prevImages => prevImages.filter((_, index) => index !== picIndex)); // 이미지 상태 업데이트
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleAddLink = async (linkData: {path: string}) => {
  //   try {
  //     await addUserSocialLink(userData.id, linkData);
  //     setFields((prevLinks: string[]) => [...prevLinks, linkData.path]); // 링크 상태 업데이트
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //
  // const handleDeleteLink = async (linkPath: string) => {
  //   try {
  //     await deleteUserSocialLink(linkPath);
  //     setFields((prevLinks: Array<{ path: string; }>) => prevLinks.filter((link) => link.path !== linkPath));
  //
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  return (
    <gs.MainContainer>
      <Header edit={true} onClick={handleSave}/>
      <gs.MainBox>
        <ImageWithName>
          <ProfileIcon width={80} height={80}/>
          <FormInput
            name='nickname'
            formType='text'
            value={input.nickname}
            onChange={handleInputChange}
            placeHolder={userData.nickname}
          />
        </ImageWithName>
        <Spacer height={54}/>
        <UserInfoContainer>
          <InputLabel label='회원정보' />
          <Text type='body1'>이메일</Text>
        </UserInfoContainer>
        <Spacer height={30}/>
        <BoxContainer>
          <InputLabel label='소개글' />
          <TextArea
            name='intro'
            value={input.intro}
            onChange={handleInputChange}
            placeholder={userDataEx.description}
          />
        </BoxContainer>
        <BoxContainer>
          <InputLabel label='소셜 계정 연동' />
          {/*<SnsConnect fields={fields} setFields={setFields} />*/}
          <SnsConnect fields={fields} setFields={setFields} />
        </BoxContainer>
        <BoxContainer>
          <Text type='title1'>나를 표현할 수 있는 사진을 올려주세요</Text>
          <Text type='subtitle1'>내가 좋아하는 곳, 내 여행 스타일등 나의 캐릭터를 보여줄 수 있는 사진이면 더 좋아요.</Text>
          <ImageCarousel
                images={userData.profile_list}
                isEditable={true}
                onAdd={onAdd}
                onRemove={() => onFileChange}
          />
          <input type="file" onChange={onFileChange}  ref={fileInput} style={{ display: 'none' }}/>
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
    padding: 0px 0px 16px;
`;
