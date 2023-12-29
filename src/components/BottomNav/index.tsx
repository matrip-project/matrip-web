import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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
  const path = useLocation().pathname;

  useEffect(() => {
    if (path === '/companionList') {
      setActiveIcons([0, 1, 0, 0]);
    } else if (path === '/popularTravel') {
      setActiveIcons([0, 0, 1, 0]);
    } else if (path === '/mypage') {
      setActiveIcons([0, 0, 0, 1]);
    } else if (path === '/') {
      setActiveIcons([1, 0, 0, 0]);
    }
  }, [path]);

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
          <StyledILine $isActive={activeIcons[0] === 1} />
          <StyledIcon
            src={getIconImage(1)}
            $isActive={activeIcons[0] === 1}
            alt='홈'
          />
          <StyledText>홈</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(2)} to={'/companionList'}>
          <StyledILine $isActive={activeIcons[1] === 1} />
          <StyledIcon
            src={getIconImage(2)}
            $isActive={activeIcons[1] === 1}
            alt='동행'
          />
          <StyledText>동행리스트</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(3)} to={'/popularTravel'}>
          <StyledILine $isActive={activeIcons[2] === 1} />
          <StyledIcon
            src={getIconImage(3)}
            $isActive={activeIcons[2] === 1}
            alt='인기 여행지'
          />
          <StyledText>인기여행지</StyledText>
        </NavBtn>
        <NavBtn onClick={() => handleIconClick(4)} to={'/mypage'}>
          <StyledILine $isActive={activeIcons[3] === 1} />
          <StyledIcon
            src={getIconImage(4)}
            $isActive={activeIcons[3] === 1}
            alt='마이페이지'
          />
          <StyledText>마이페이지</StyledText>
        </NavBtn>
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 75px;
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
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 390px) {
    width: 320px;
  }
`;

const NavBtn = styled(Link)`
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 75px;
`;

const StyledILine = styled.div<{ $isActive: boolean }>`
  border-top: ${({ $isActive }) => ($isActive ? '4px solid #D30065' : 'none')};
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

const StyledIcon = styled.img<{ $isActive: boolean }>`
  margin-top: 13px;
`;

export default BottomNav;
