import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { BsPerson, BsGrid } from 'react-icons/bs';
import { getColor } from '../../utils/colorUtils';

function BottomNav() {
  const [isActive, setIsActive] = useState<number>(1);

  return (
    <NavContainer>
      <NavWrap>
        <NavBtn to={'/'} onClick={() => setIsActive(1)}>
          <StyledHome size='30' isActive={isActive} />
        </NavBtn>
        <NavBtn to={'/tripSchedule'} onClick={() => setIsActive(2)}>
          <StyledGlass size='30' isActive={isActive} />
        </NavBtn>
        <NavBtn to={'/itineraryInfo'} onClick={() => setIsActive(3)}>
          <StyledGrid size='30' isActive={isActive} />
        </NavBtn>
        <NavBtn to={'/userProfile'} onClick={() => setIsActive(4)}>
          <StyledPerson size='30' isActive={isActive} />
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
  background-color: ${getColor('white')};
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

const StyledHome = styled(BiHomeAlt)<{ isActive: number }>`
  color: ${({ isActive }) =>
    isActive === 1 ? getColor('primary') : getColor('black')};
`;
const StyledGlass = styled(HiMiniMagnifyingGlass)<{ isActive: number }>`
  color: ${({ isActive }) =>
    isActive === 2 ? getColor('primary') : getColor('black')};
`;
const StyledGrid = styled(BsGrid)<{ isActive: number }>`
  color: ${({ isActive }) =>
    isActive === 3 ? getColor('primary') : getColor('black')};
`;
const StyledPerson = styled(BsPerson)<{ isActive: number }>`
  color: ${({ isActive }) =>
    isActive === 4 ? getColor('primary') : getColor('black')};
`;

export default BottomNav;
