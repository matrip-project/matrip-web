import { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import rightIcon from '../../asset/arrowRight.svg';
import { Text, Spacer } from '../../components/@atoms';
import Header from '../../components/Header';
import { ReactComponent as ProfileIcon } from '../../asset/profileNone.svg';
import * as hs from '../Home/homeStyle';
import share from '../../asset/share.svg';
import addPostButton from '../../asset/addPostButton.svg';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../redux/modules/postSlice';
import { useUserInfoQuery } from '../../query-hooks/userDataQueries';

const MENUS = {
  '비밀번호 재설정': '/resetpassword',
  '메이트립 이용방법': '/usemethod',
  공지사항: '/service/notice',
  고객센터: '/service/faq',
  이용약관: '/service/terms',
  '개인정보 처리방침': '/service/privacy'
};

const MyPageMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storedData = localStorage.getItem('myId');
  const userId = storedData ? JSON.parse(storedData) : null;
  const { data, isLoading, error } = useUserInfoQuery(userId);

  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
  }, [userId, navigate]);

  const handleInviteFriend = () => {
    const urlToCopy = 'http://matrip.s3-website.ap-northeast-2.amazonaws.com/';
    navigator.clipboard.writeText(urlToCopy);
    alert('링크가 복사되었습니다!');
  };

  const onClickAddButton = () => {
    navigate('/posting');
    dispatch(deleteAll());
  };

  if (isLoading) {
    return <div>sss</div>;
  }

  if (error) {
    return <div>sss</div>;
  }

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <LinkToProfile to='/profile'>
          <ProfileIcon width={60} height={60} />
          <Spacer width={15} />
          <div>
            <Text type='title1'>
              {data.nickname} {'>'}{' '}
            </Text>
            <Spacer height={6} />
            <Text type='body2'>{data.email}</Text>
          </div>
        </LinkToProfile>

        {Object.entries(MENUS).map(([menu, path], idx) => {
          return (
            <LinkToEach key={idx} to={path}>
              <MenuLable>
                <Text type='subtitle1'>{menu}</Text>
                <Spacer width={10} />
                <img src={rightIcon} height={14} />
              </MenuLable>
            </LinkToEach>
          );
        })}

        <hs.InviteFriend onClick={() => handleInviteFriend()}>
          친구 초대하기 <hs.InviteFriendImg src={share} />
        </hs.InviteFriend>

        <hs.buttonWrraperContainer>
          <hs.postContainer onClick={onClickAddButton}>
            <hs.WriteBtn src={addPostButton}></hs.WriteBtn>
          </hs.postContainer>
        </hs.buttonWrraperContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default MyPageMain;

const MenuLable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutral1};
`;

const LinkToProfile = styled(Link)`
  width: 100%;
  height: 90px;

  border-bottom: 1px solid ${(props) => props.theme.colors.neutral1};

  display: flex;
  align-items: center;
`;

const LinkToEach = styled(Link)`
  width: 100%;
  height: 58px;
`;
