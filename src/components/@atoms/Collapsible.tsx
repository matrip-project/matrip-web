import React, { useState } from 'react';
import styled from 'styled-components';

import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai';

interface CollapsibleProps{
    header : string;
    body : string;
    date : string;
}

const Collapsible: React.FC<React.PropsWithChildren<CollapsibleProps>> = ({
    header,
    body,
    date
}) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    //container
    <CollasibleContainer>
        <CollapsibleHeader>
            <CollapsibleHeaderText>
            <span> {header}</span>
            <span> {date}</span>
            
            </CollapsibleHeaderText>
            
            <CollapsibleBtn onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ?
                <AiOutlineDown />
                :
                <AiOutlineUp />
                }
            </CollapsibleBtn>
        </CollapsibleHeader>
        {/* body */}
            <CollapsibleBody isOpen={isOpen}>
                Body : {body}
            </CollapsibleBody>
        
    </CollasibleContainer>
  );
};

export default Collapsible;

const CollasibleContainer = styled.div`
    border-bottom: 1px solid #000;
    padding: 10px 0px;
    width: 100%;
`;

const CollapsibleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const CollapsibleHeaderText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

`;

const CollapsibleBody = styled.div<{isOpen:boolean}>`
    transition: 0.5s ease;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    max-height: ${props => (props.isOpen ? '300px' : '0px')};
`;

const CollapsibleBtn = styled.button`
    border: none;
    background-color: #ffff;
`;
