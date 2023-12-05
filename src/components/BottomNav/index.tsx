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
          <StyledILine isactive={activeIcons[0] === 1} />
          <StyledIconHome
            src={getIconImage(1)}
            isactive={activeIcons[0] === 1}
            alt='홈 아이콘'
          />
          <StyledText>홈</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(2)} to={'/companionList'}>
          <StyledILine isactive={activeIcons[1] === 1} />
          <StyledIconAccompany
            src={getIconImage(2)}
            isactive={activeIcons[1] === 1}
            alt='동행 아이콘'
          />
          <StyledText>동행리스트</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(3)} to={'/PopularTravel'}>
          <StyledILine isactive={activeIcons[2] === 1} />
          <StyledIconPopular
            src={getIconImage(3)}
            isactive={activeIcons[2] === 1}
            alt='인기 여행 아이콘'
          />
          <StyledText>인기여행지</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(4)} to={'/mypage'}>
          <StyledILine isactive={activeIcons[3] === 1} />
          <StyledIconMy
            src={getIconImage(4)}
            isactive={activeIcons[3] === 1}
            alt='마이페이지 아이콘'
          />
          <StyledText>마이페이지</StyledText>
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
  z-index: 99;
`;

const NavWrap = styled.nav`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0px 25px 0px 35px; */
  @media screen and (min-width: 390px) {
    width: 320px;
  }
`;

const NavBtn = styled(Link)`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledILine = styled.div<{ isactive: boolean }>`
  border-top: ${({ isactive }) => (isactive ? '4px solid #D30065' : 'none')};
  width: 45px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledText = styled.div`
  ${(props) => props.theme.texts.menuNone};
  text-align: center;
  margin-top: 8px;
`;

const StyledIconHome = styled.img<{ isactive: boolean }>`
  margin-top: 13px;
`;

const StyledIconAccompany = styled.img<{ isactive: boolean }>`
  margin-top: 13px;
`;

const StyledIconPopular = styled.img<{ isactive: boolean }>`
  margin-top: 13px;
`;

const StyledIconMy = styled.img<{ isactive: boolean }>`
  margin-top: 13px;
`;

export default BottomNav;
