import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import Header from '../Header';

interface Tab {
  label: string;
  to: string;
}

interface TabProps {
  tabs: Tab[];
}

const TabMenu: React.FC<TabProps> = ({ tabs }) => {
  const location = useLocation();
  const [curr, setCurr] = useState(location.pathname);

  const handleClick = (path: string) => {
    setCurr(path);
  };

  return (
    <MainContainer>
      <Header edit={false} />
      <MainBox>
        {location.pathname.includes('companionLog') && (
          <CompanionTitle>동행로그</CompanionTitle>
        )}
        <TabContainer>
          {tabs.map((tab, index) => (
            <TabWrapper key={index} to={tab.to}>
              <TabTitle
                onClick={() => handleClick(tab.to)}
                $active={curr === tab.to}
              >
                {tab.label}
              </TabTitle>
            </TabWrapper>
          ))}
        </TabContainer>
        <Outlet />
      </MainBox>
    </MainContainer>
  );
};

export const TabContainer = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  gap: 40px;
  border-bottom: 2px solid ${(props) => props.theme.colors.neutral1};
  margin-bottom: 10px;
`;

const CompanionTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 100%;
  margin: 10px 0 20px 0;
`;

const TabWrapper = styled(Link)``;

export const TabTitle = styled.div<{ $active: boolean }>`
  ${(props) => props.theme.texts.tapTitle1}
  color: ${(props) =>
    props.$active
      ? props.theme.texts.tapTitle1.color
      : props.theme.texts.tapTitle2.color};
  border-bottom: ${(props) =>
    props.$active ? `2px solid ${props.theme.colors.primary}` : 'none'};
  height: 100%;
`;

export default TabMenu;
