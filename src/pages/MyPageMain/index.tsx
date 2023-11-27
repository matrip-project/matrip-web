import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import rightIcon from '../../asset/arrowRight.svg';
import { Text, Spacer } from '../../components/@atoms';
import UserIntro from '../../components/UserIntro';


const MENUS: string[] = ['비밀번호 재설정', '메이트립 이용방법', '공지사항', '고객센터', '이용약관', '개인정보 처리방침'];

const MyPageMain = () => {
    return (
        <gs.MainContainer>
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
                        {MENUS.map((menu, idx) => {
                            return (
                                <MenuLable key={idx}>
                                    <Text type='subtitle1'>{menu}</Text>
                                    <Spacer width={10}/>
                                    <img src={rightIcon} height={14}/>
                                </MenuLable>
                            );
                        })
                        }
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

const UseProfile = styled.div`
    
    
`;