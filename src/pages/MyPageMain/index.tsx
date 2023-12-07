import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import rightIcon from '../../asset/arrowRight.svg';
import { Text, Spacer } from '../../components/@atoms';
import UserIntro from '../../components/UserIntro';
import Header from '../../components/Header';
import {getMyUserData} from '../../apis/api/userData';


const MENUS = {
    '비밀번호 재설정': '/resetpassword',
    '메이트립 이용방법': '/usemethod',
    '공지사항': '/notice',
    '고객센터': '/support',
    '이용약관': '/terms',
    '개인정보 처리방침': '/privacy',
};

const MyPageMain = () => {



    return (
        <gs.MainContainer>
            <Header edit={false} />
            <gs.MainBox>
                <LinkToProfile to={'/mypage/profile'}>
                    <UserIntro iconSize={60}>
                        <div>
                            <Text type='title1'>ssss</Text>
                            <Text type='body2'>ssss</Text>
                        </div>
                    </UserIntro>
                </LinkToProfile>
                {/* MENUS */}
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
