import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { BsPerson, BsGrid } from 'react-icons/bs';

function BottomNav() {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <NavContainer>
      <NavWrap>
        <NavBtn to={'/'} onClick={() => setIsActive(1)}>
          <BiHomeAlt size='30' color={isActive === 1 ? '#5EAAA8' : '#000'} />
        </NavBtn>
        <NavBtn to={'/tripSchedule'} onClick={() => setIsActive(2)}>
          <HiMiniMagnifyingGlass
            size='30'
            color={isActive === 2 ? '#5EAAA8' : '#000'}
          />
        </NavBtn>
        <NavBtn to={'/itineraryInfo'} onClick={() => setIsActive(3)}>
          <BsGrid size='30' color={isActive === 3 ? '#5EAAA8' : '#000'} />
        </NavBtn>
        <NavBtn to={'/userProfile'} onClick={() => setIsActive(4)}>
          <BsPerson size='30' color={isActive === 4 ? '#5EAAA8' : '#000'} />
        </NavBtn>
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: solid #dcdcdc 1px;
  z-index: 999999;
`;

const NavWrap = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

const NavBtn = styled(Link)`
  padding: 0 15px;
`;

export default BottomNav;
