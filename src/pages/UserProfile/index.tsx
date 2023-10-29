import React, { useState, MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';

import * as upc from './userProfileStyle';
import * as gs from '../../styles/GlobalStyles';

import { fdata } from '../../data/userdata';

import UploadImg from '../../components/UploadImg';
import { InfoCtnr } from '../ItineraryInfo/itineraryInfoStyle';

import { useIconClickHandler } from '../../hooks/useIconClickHandler';

import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillImageFill } from 'react-icons/bs';

// 유저 정보 인터페이스
interface UserInfo {
  nick: string;
  id: string;
  imgurl: string;
  email: string;
  sex: string;
  birth: string;
}


const UserProfile: React.FC = () => {
  // 임시
  const prf: UserInfo = fdata[0];
  // 유저 정보
  const [userInfo, setUserInfo] = useState<UserInfo>(prf);
  // 수정 가능 상태
  const [isEditable, setIsEditable] = useState<boolean>(true);
  // crop modal에서 받아온 자른 사진 s3 url
  const [pickedImg, setPickedImg] = useState<string>('');
  // 이미지 crop modal
  const [openCropImage, setOpenCropImage] = useState<boolean>(false);
  // 블러 처리된 이미지 영역
  const imageInputRef = useRef<HTMLInputElement>(null);
  //로컬에서 불러온 이미지
  const [localimg, setLocalImg] = useState<string>('');


  // 이미지 선택창 열기
  const openImgFile = (() => {
    onUploadButtonClick();
  });

  // 숨겨져 있는 input 버튼 ref 클릭
  async function onUploadButtonClick() {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  }

  // crop modal 열기
  const handleOpenCropImage = useIconClickHandler(() => {
    setOpenCropImage(true);
  });

  // 선택한 이미지에 대한 처리
  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      // setCrop(undefined)
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setLocalImg(reader.result?.toString() || ''),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
    setOpenCropImage(true);
  }

  // 유저 정보 수정가능 여부 상태 변경
  const handleEditUserInfo = useIconClickHandler(() => {
    setIsEditable(!isEditable);
  });

  // 받아온 이미지 s3 url setPickedImg
  const handleImageUrlFromCrop = (urlFromChild: string) => {
    setPickedImg(urlFromChild);
  };

  // 유저 정보 변경 값 setuserInfo
  const handleInfoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof UserInfo
  ) => {
    setUserInfo({ ...userInfo, [fieldName]: e.target.value });
  };

  // 저장된 값 서버로 POST
  const handleSubmit = () => {
    console.log('handle submit');
  };





  // 임시
  if (!pickedImg) {
    setPickedImg(prf.imgurl);
  }

  return (
    <gs.MainContainer>
      <gs.MainBox>
        <gs.PageName>
          내 프로필
        </gs.PageName>
        {openCropImage &&
          <UploadImg
            sendimg={handleImageUrlFromCrop}
            close={setOpenCropImage}
            imgdata={localimg}
          />
        }

        {/* 유저 프로필 카드 */}
        <upc.ProfileCard>
          {/* 유저 이미지 컨테이너 */}
          <upc.ImgCtnr $isEditable={isEditable}>
            <upc.Img src={pickedImg} />
            {!isEditable &&
              <upc.EditImg
                onClick={openImgFile}
              >
                {/* 안보이게 할 input btn */}
                <input type="file" accept="image/*" onChange={onSelectFile} ref={imageInputRef} hidden />
                <BsFillImageFill
                  size={50}
                  color='#fff'
                  onClick={handleOpenCropImage}
                />
              </upc.EditImg>
            }

          </upc.ImgCtnr>

          {/* 유저 정보 컨테이너 (form) */}
          <upc.InfoCtnr $isEditable={isEditable}>
            <upc.IdCtnr>
              <upc.IdText
                type='text'
                value={userInfo.id}
                onChange={(e: any) => handleInfoChange(e, 'id')}
                readOnly={isEditable}
              ></upc.IdText>
              {isEditable ?
                <AiFillEdit
                  onClick={handleEditUserInfo}
                />
                :
                <AiFillCheckCircle
                  onClick={handleEditUserInfo}
                />
              }
            </upc.IdCtnr>

            <upc.EmailCtnr>
              <upc.EmailText>{prf.email}</upc.EmailText>
            </upc.EmailCtnr>
            <upc.BirthCtnr>
              <upc.LabelName>생일</upc.LabelName>
              <upc.BirthText>{prf.birth}</upc.BirthText>
            </upc.BirthCtnr>
            <upc.SexCtnr>
              <upc.LabelName>성별</upc.LabelName>
              <upc.SexText>{prf.sex}</upc.SexText>
            </upc.SexCtnr>
          </upc.InfoCtnr>
        </upc.ProfileCard>

        {/* 친구 카드 */}
        <upc.ProfileCard>
          <div>친구 목록</div>
          <div>친구 목록</div>
          <div>친구 목록</div>
        </upc.ProfileCard>

      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default UserProfile;
