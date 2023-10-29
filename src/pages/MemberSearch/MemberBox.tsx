import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

type UserData = {
  imgUrl: string;
  nick: string;
  code: string; // 나중에 number로 바뀔 수도
};

function UserBox({ imgUrl, nick, code }: UserData) {
  return (
    <UserBoxWrap to={'/member'}>
      <ImgWrap>
        <UserImg src={imgUrl} alt='유저 프로필 사진' />
      </ImgWrap>
      <InfoWrap>
        <strong>{nick}</strong>
        <Code>#{code}</Code>
      </InfoWrap>
    </UserBoxWrap>
  );
}

const UserBoxWrap = styled(Link)`
  width: calc((100% - 20px) / 2);
  height: 300px;
  border: solid 1px transparent;
  border-radius: 25px;
  box-shadow: 3px 5px 20px #d4d4d4;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 85%;
`;

const UserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
`;

const InfoWrap = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Code = styled.div`
  color: #9c9c9c;
  margin-left: 10px;
`;

export default UserBox;
