import React from 'react';
import * as gs from '../../styles/GlobalStyles';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';
import * as mds from './memberDetailStyle';
import Header from '../../components/Header';
import './index.css';

function MemberDetail() {
  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <mds.SearchInputBox>
          <mds.SearchIcon>
            <HiMiniMagnifyingGlass
              size='24'
              color='#9C9C9C'
              style={{ marginLeft: '10px' }}
            />
          </mds.SearchIcon>
          <mds.SearchInput>@Nickname</mds.SearchInput>
        </mds.SearchInputBox>
        <mds.DetailBox>
          <mds.ImgWrap>
            <mds.Img
              src='https://img2.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202302/21/spotvnews/20230221133133423kfxy.jpg'
              alt='유저 프로필 사진'
            />
          </mds.ImgWrap>
          <mds.InfoBox>
            <mds.NameWrap>
              <p>설인아</p>
              <mds.Code>#1234</mds.Code>
            </mds.NameWrap>
            <mds.Email>thegrace@asac.com</mds.Email>
            <div>
              <mds.SubInfo>
                <strong>생일</strong>
                <p>1995.12.12</p>
              </mds.SubInfo>
              <mds.SubInfo>
                <strong>성별</strong>
                <p>Female</p>
              </mds.SubInfo>
              <mds.Introduction>
                I like to play with active people and hang out new freinds. I
                like to play with active people and hang out new freinds.
              </mds.Introduction>
            </div>
          </mds.InfoBox>
        </mds.DetailBox>
        <mds.BtnBox>
          <mds.Btn className='approve'>
            <AiOutlineCheck size='24' color='#fff' />
          </mds.Btn>
          <mds.Btn className='decline'>
            <FiX size='24' color='#fff' />
          </mds.Btn>
        </mds.BtnBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default MemberDetail;
