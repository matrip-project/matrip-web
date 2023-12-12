import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { HiOutlinePlus } from 'react-icons/hi';
import { fdata } from '../../data/userdata';

function AddMember() {
  return (
    <MemberIconBox>
      {fdata.map((user) => (
        <MemberIconWrap key={user.id}>
          <MemberIconImg src={user.imgurl} alt='유저 프로필 사진' />
        </MemberIconWrap>
      ))}
      <Link to={'/memberSearch'}>
        <AddIcon>
          <HiOutlinePlus color='#fff' size='32' />
        </AddIcon>
      </Link>
    </MemberIconBox>
  );
}

const MemberIconBox = styled.div`
  display: flex;
  gap: 10px;
`;

const MemberIconWrap = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: solid 3px #5eaaa8;
  box-sizing: border-box;
`;

const MemberIconImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  objcet-fit: cover;
`;

const AddIcon = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #5eaaa8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddMember;
