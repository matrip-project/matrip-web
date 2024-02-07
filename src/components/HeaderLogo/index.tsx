import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.svg';

const HeaderLogo: React.FC = () => {
  return (
    <HomeHeader>
      <LogoLink to='/'>
        <LogoImg src={logo} alt='Logo' />
      </LogoLink>
    </HomeHeader>
  );
};

export const HomeHeader = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  padding: 18px;
  margin: -40px 0 10px 0;
`;

export const LogoLink = styled(Link)`
  margin: auto;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  margin: auto;
`;

export default HeaderLogo;
