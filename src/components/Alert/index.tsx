import React from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Text, Spacer } from '../@atoms';

type AlertProps = {
    children?: React.ReactNode;
    header: string;
    body: string;
    buttonText: string;
    modalOpen: boolean;
    onClose: () => void;
};

const BottomAlert:React.FC<AlertProps> = ({ header, body, buttonText, onClose, modalOpen}) => {
    
    const navigate = useNavigate();
    const closeButtonClick = () => {
        onClose();
        navigate('/');
    };
    
    if (!modalOpen){
        return null;
    }

    return createPortal(
        <AlertContainer>
            <HeaderContainer>
                <Text type='title1'>{header}</Text>
            </HeaderContainer>
            <Spacer height={30}/>
            <BodyContainer>
                <Text type='subtitle1' color='neutral3'>{body}</Text>
            </BodyContainer>
            <Spacer height={35}/>
            <Button onClick={closeButtonClick} type='primary'>
                <Text type='title1' color='white'>
                    {buttonText}
                </Text>    
            </Button>
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
    background-color: #fff;
    width: 400px;
    height: 300px;
    border-radius: 35px;
    padding: 40px 30px 0px;
`;

const HeaderContainer = styled.div`
    border-bottom: 1px solid grey;
    padding-bottom: 16px;
`;

const BodyContainer = styled.div`
    
`;

