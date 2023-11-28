import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainBox, MainContainer } from '../../styles/GlobalStyles';

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
      <MainBox>
        <TabContainer>
          {tabs.map((tab, index) => (
            <TabWrapper key={index} to={tab.to}>
              <TabTitle
                onClick={() => handleClick(tab.to)}
                active={curr === tab.to}
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
  /* margin-bottom: 30px; */
`;

const TabWrapper = styled(Link)``;

export const TabTitle = styled.div<{ active: boolean }>`
  ${(props) => props.theme.texts.tapTitle1}
  color: ${(props) =>
    props.active
      ? props.theme.texts.tapTitle1.color
      : props.theme.texts.tapTitle2.color};
  border-bottom: ${(props) =>
    props.active ? `2px solid ${props.theme.colors.primary}` : 'none'};
  height: 100%;
  padding: 0 10px;
`;

export default TabMenu;
