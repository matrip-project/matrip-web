import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { BsPerson, BsGrid } from 'react-icons/bs';
import { getColor } from '../../utils/colorUtils';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/modules/keywordImgSlice';

function BottomNav() {
  const [isActive, setIsActive] = useState<number>(1);
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <NavWrap>
        <NavBtn to={'/'} onClick={() => setIsActive(1)}>
          <StyledHome size='30' $isActive={isActive} />
        </NavBtn>
        <NavBtn to={'/CompanionList'} onClick={() => setIsActive(2)}>
          <StyledGlass size='30' $isActive={isActive} />
        </NavBtn>
        <NavBtn
          to={'/PopularTravel'}
          onClick={() => {
            setIsActive(3);
            dispatch(setKeyword('제주'));
          }}
        >
          <StyledGrid size='30' $isActive={isActive} />
        </NavBtn>
        <NavBtn to={'/userProfile'} onClick={() => setIsActive(4)}>
          <StyledPerson size='30' $isActive={isActive} />
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
  justify-content: space-between;
  @media screen and (min-width: 390px) {
    width: 390px;
  }
`;

const NavBtn = styled(Link)`
  padding: 0 15px;
`;

const StyledHome = styled(BiHomeAlt)<{ $isActive: number }>`
  color: ${({ $isActive }) =>
    $isActive === 1 ? getColor('primary') : getColor('black')};
`;
const StyledGlass = styled(HiMiniMagnifyingGlass)<{ $isActive: number }>`
  color: ${({ $isActive }) =>
    $isActive === 2 ? getColor('primary') : getColor('black')};
`;
const StyledGrid = styled(BsGrid)<{ $isActive: number }>`
  color: ${({ $isActive }) =>
    $isActive === 3 ? getColor('primary') : getColor('black')};
`;
const StyledPerson = styled(BsPerson)<{ $isActive: number }>`
  color: ${({ $isActive }) =>
    $isActive === 4 ? getColor('primary') : getColor('black')};
`;

export default BottomNav;
