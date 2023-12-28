import React, {useState, useRef, ChangeEvent} from 'react';
import * as gs from '../../styles/GlobalStyles';
import styled from 'styled-components';

import {useNavigate} from 'react-router-dom';
import FormInput from '../../components/FormInput';
import {Text, InputLabel, Spacer} from '../../components/@atoms';
import SnsConnect from '../../components/SnsConnect';
import ImageCarousel from '../../components/ImageCarousel';
import Header from '../../components/Header';

import {ReactComponent as ProfileIcon} from '../../asset/profileNone.svg';
import useUpdateUserInfoMutation from '../../query-hooks/useUpdateUserInfoMutation';
import {useUserInfoQuery} from '../../query-hooks/userDataQueries';
import {useImage} from '../../hooks/useImage';

const EditProfile = () => {
    const navigate = useNavigate();
    const mutation = useUpdateUserInfoMutation();
    const userId = JSON.parse(localStorage.getItem('myId') || '{}');
    const [trigger, setTrigger] = useState(false);

    const { data, isLoading, error } = useUserInfoQuery(userId);
    console.log(data);
    console.log(data.profile_list);

    const {fileInput, onAddClick, handleAddPic, handleDeletePic} = useImage(data);
    const [input, setInput] = useState({
        nickname: data.nickname,
        intro: data.intro || '소개글을 작성해주세요.',
    });

    const [fields, setFields] = useState(data.link_list.map((item: { id: number, path: string }) => ({
        id: item.id,
        value: item.path
    })));


    const handleInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const handleSave = async () => {
        const variables = {memberId: userId, profileData: input};
        const res = await mutation.mutateAsync(variables);
        navigate('/profile');
    };



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
                        placeHolder={data.nickname}
                    />
                    <Spacer height={4}/>
                    <Text color='primary' type='body1'>닉네임은 한달에 한번 변경가능합니다.</Text>

                </ImageWithName>
                <Spacer height={54}/>
                <UserInfoContainer>
                    <InputLabel label='회원정보'/>
                    <Spacer height={12}/>
                    <UserInfoSpan> {data.name} </UserInfoSpan>
                    |
                    <UserInfoSpan> {data.birth} </UserInfoSpan>
                    <Text type='body2'>{data.email}</Text>
                </UserInfoContainer>
                <Spacer height={30}/>
                <BoxContainer>
                    <InputLabel label='소개글'/>
                    <Spacer height={6}/>
                    <TextArea
                        name='intro'
                        value={input.intro}
                        onChange={handleInputChange}
                        placeholder={input.intro}
                    />
                </BoxContainer>
                <BoxContainer>
                    <InputLabel label='소셜 계정 연동'/>
                    <Spacer height={6}/>
                    <Text color='primary' type='body1'>
                        소셜 연동은 최대 5개까지 연동 가능합니다
                    </Text>

                    <SnsConnect fields={fields} setFields={setFields}/>
                </BoxContainer>
                <BoxContainer>
                    <Text type='title1'>나를 표현할 수 있는 사진을 올려주세요</Text>

                    <Spacer height={4}/>
                    <Text type='body1'>
                        내가 좋아하는 곳, 내 여행 스타일등 나의 캐릭터를 보여줄 수 있는
                        사진이면 더 좋아요.
                    </Text>
                    <Spacer height={10}/>
                    <ImageCarousel
                        images={data.profile_list}
                        isEditable={true}
                        onAdd={onAddClick}
                        onRemove={handleDeletePic}
                    />
                    <input
                        type='file'
                        onChange={handleAddPic}
                        ref={fileInput}
                        style={{display: 'none'}}
                    />

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


const UserInfoSpan = styled.span`
  font-size: 12px;
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
