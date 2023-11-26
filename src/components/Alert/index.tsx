import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Button, Text } from '../@atoms';

type AlertProps = {
    children?: React.ReactNode;
    header: string;
    body: string;
    buttonText: string;
    modalOpen: boolean;
    onClose: () => void;
};

const BottomAlert:React.FC<AlertProps> = ({ header, body, buttonText, onClose, modalOpen}) => {
    if (!modalOpen){
        return null;
    }

    return createPortal(
        <AlertContainer>
            <HeaderContainer>
                <Text type='title2'>{header}</Text>
            </HeaderContainer>
            <BodyContainer>{body}</BodyContainer>
            <Button onClick={onClose} type='primary'>{buttonText}</Button>
        </AlertContainer>,
        document.getElementById('root') as Element,
    );
};

export default BottomAlert;

const AlertContainer = styled.div`
    position: fixed;
    z-index: 100;
    bottom: -30px;
    left: 0;
    right: 0;
    margin: auto;
    background-color: red;
    width: 600px;
    height: 300px;
    border-radius: 35px;
`;

const HeaderContainer = styled.div`

`;

const BodyContainer = styled.div`
    
`;

