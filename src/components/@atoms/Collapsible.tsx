import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Text from './Text';
import { getColor } from '../../utils/colorUtils';

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
            <Text type='subtitle1'> {header}</Text>
            {date && (
              <Text type='body1' color='neutral4'>
                {date}
              </Text>
            )}
          </CollapsibleHeaderText>
          {!isOpen ? <StyledDown /> : <StyledUp />}
        </CollapsibleHeader>
      </CollasibleContainer>
      {/* body */}
      <CollapsibleBody isOpen={isOpen}>
        <CollapsibleBodyWrap>
          <Text type='body1' color='neutral4'>
            {body}
          </Text>
        </CollapsibleBodyWrap>
      </CollapsibleBody>
    </>
  );
};

export default Collapsible;

const CollasibleContainer = styled.button`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-bottom: solid 1px ${getColor('neutral3')};
`;

const CollapsibleHeader = styled.div`
  width: 95%;
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
  border-bottom: solid 1px ${getColor('neutral3')};
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
  color: ${getColor('neutral4')};
`;

const StyledUp = styled(IoIosArrowUp)`
  font-size: 25px;
  color: ${getColor('neutral4')};
`;
