import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import rightIcon from '../../asset/arrowRight.svg';
import { Text, Spacer } from '../../components/@atoms';
import UserIntro from '../../components/UserIntro';
import Header from '../../components/Header';
import { useAppSelector } from '../../redux/hooks';
import {ReactComponent as ProfileIcon} from '../../asset/profileNone.svg';


const MENUS = {
    '비밀번호 재설정': '/resetpassword',
    '메이트립 이용방법': '/usemethod',
    '공지사항': '/notice',
    '고객센터': '/support',
    '이용약관': '/terms',
    '개인정보 처리방침': '/privacy',
};

const MyPageMain = () => {
    const navigate = useNavigate();
    const storedData = sessionStorage.getItem('userData');
    const userData = storedData ? JSON.parse(storedData) : null;
    console.log(userData);
    useEffect(() => {
        if(!userData)  {
            navigate('/login');
        }
    },[userData, navigate]);

    return (
        <gs.MainContainer>
            <Header edit={false} />
            <gs.MainBox>
                {userData &&
                    <LinkToProfile to='/profile'>
                        <ProfileIcon width={60} height={60}>
                            <div>
                                {userData &&
                                    <>
                                        <Text type='title1'>{userData.nickname}</Text>
                                        <Text type='body2'>{userData.email}</Text>
                                    </>
                                }
                            </div>
                        </ProfileIcon>
                    </LinkToProfile>
                }
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


            </gs.MainBox>
        </gs.MainContainer>
    );
};

export default MyPageMain;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const MenuLable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 58px;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.neutral1};
`;

const LinkToProfile = styled(Link)`
    width: 100%;
    height: 90px;
    border-bottom: 1px solid ${props => props.theme.colors.neutral1};
`;

const LinkToEach = styled(Link)`
    width: 100%;
    height: 58px;
    
`;

const UseProfile = styled.div`
    
    
`;
