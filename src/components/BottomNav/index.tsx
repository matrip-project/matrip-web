import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { BiHomeAlt } from 'react-icons/bi';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { BsPerson, BsGrid } from 'react-icons/bs';
import { getColor } from '../../utils/colorUtils';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/modules/keywordImgSlice';
import navHomeIcon from '../../asset/navHomeIcon.svg';
import navAccompanyIcon from '../../asset/navAccompanyIcon.svg';
import navPopularIcon from '../../asset/navPopularIcon.svg';
import navMupageIcon from '../../asset/navMupageIcon.svg';
import navNoneHome from '../../asset/navNoneHome.svg';
import navNoneAccompany from '../../asset/navNoneAccompany.svg';
import navNonePopular from '../../asset/navNonePopular.svg';
import navNoneMypage from '../../asset/navNoneMypage.svg';

function BottomNav() {
  const [activeIcons, setActiveIcons] = useState<number[]>([1, 0, 0, 0]);
  const dispatch = useDispatch();

  const getIconImage = (index: number) => {
    if (activeIcons[index - 1]) {
      switch (index) {
        case 1:
          return navHomeIcon;
        case 2:
          return navAccompanyIcon;
        case 3:
          return navPopularIcon;
        case 4:
          return navMupageIcon;
        default:
          return '';
      }
    } else {
      switch (index) {
        case 1:
          return navNoneHome;
        case 2:
          return navNoneAccompany;
        case 3:
          return navNonePopular;
        case 4:
          return navNoneMypage;
        default:
          return '';
      }
    }
  };

  const handleIconClick = (index: number) => {
    setActiveIcons((prev) => prev.map((_, i) => (i === index - 1 ? 1 : 0)));

    if (index === 3) {
      dispatch(setKeyword('제주'));
    }
  };

  return (
    <NavContainer>
      <NavWrap>
        <NavBtn onClick={() => handleIconClick(1)} to={'/'}>
          <StyledIcon
            src={getIconImage(1)}
            isActive={activeIcons[0] === 1}
            alt='홈 아이콘'
          />
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(2)} to={'/companionList'}>
          <StyledIcon
            src={getIconImage(2)}
            isActive={activeIcons[1] === 1}
            alt='동행 아이콘'
          />
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(3)} to={'/PopularTravel'}>
          <StyledIcon
            src={getIconImage(3)}
            isActive={activeIcons[2] === 1}
            alt='인기 여행 아이콘'
          />
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(4)} to={'/PopularTravel'}>
          <StyledIcon
            src={getIconImage(4)}
            isActive={activeIcons[3] === 1}
            alt='마이페이지 아이콘'
          />
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

const StyledIcon = styled.img<{ isActive: boolean }>``;

export default BottomNav;
