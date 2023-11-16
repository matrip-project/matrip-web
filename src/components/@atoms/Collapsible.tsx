import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface CollapsibleProps {
  header: string;
  body: string;
  date?: string;
}

const Collapsible: React.FC<React.PropsWithChildren<CollapsibleProps>> = ({
  header,
  body,
  date
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    //container
    <>
      <CollasibleContainer onClick={() => setIsOpen(!isOpen)}>
        <CollapsibleHeader>
          <CollapsibleHeaderText>
            <MenuSelect> {header}</MenuSelect>
            {date && <Date>{date}</Date>}
          </CollapsibleHeaderText>
          {!isOpen ? <StyledDown /> : <StyledUp />}
        </CollapsibleHeader>
      </CollasibleContainer>
      {/* body */}
      <CollapsibleBody isOpen={isOpen}>
        <CollapsibleBodyWrap>
          <MenuSelect>{body}</MenuSelect>
        </CollapsibleBodyWrap>
      </CollapsibleBody>
    </>
  );
};

export default Collapsible;

const MenuSelect = styled.div`
  ${(props) => props.theme.texts.menuSelect}
`;

const Date = styled.div`
  ${(props) => props.theme.texts.content2}
`;

const CollasibleContainer = styled.button`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-bottom: solid 1px ${(props) => props.theme.colors.neutral2};
`;

const CollapsibleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CollapsibleHeaderText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-right: 10px;
`;

const CollapsibleBody = styled.div<{ isOpen: boolean }>`
  width: 100%;
  border-bottom: solid 1px ${(props) => props.theme.colors.neutral2};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 0.5s ease;
  max-height: ${(props) => (props.isOpen ? '300px' : '0px')};

  & > div {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

const CollapsibleBodyWrap = styled.div`
  width: 95%;
  padding: 10px 0;
  margin: 0 auto;
`;

const StyledDown = styled(IoIosArrowDown)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.neutral3};
`;

const StyledUp = styled(IoIosArrowUp)`
  font-size: 25px;
  color: ${(props) => props.theme.colors.neutral3};
`;
