import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';

const HeaderLogo: React.FC = () => {
  const navigate = useNavigate();

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
  margin-top: 30px;
  padding: 18px;
`;

export const LogoLink = styled(Link)`
  margin: auto;
  text-decoration: none;
`;

export const LogoImg = styled.img`
  margin: auto;
`;

export default HeaderLogo;
