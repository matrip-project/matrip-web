import React from 'react';
import styled, { keyframes } from 'styled-components';
import {FaCarSide} from 'react-icons/fa';

const LoadingIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 25%;
  z-index: 9999;
  background-color: #fff;
  width: 300px;
  height: 50px;
  border-radius: 10px;
`;



const move = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(700%);
  }
`;

const Loader = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${move} 3s infinite linear;
`;

const LoadText = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const LoadingIncdicator = () => {
  return (
    <LoadingIndicatorContainer>
      <Loader>
        <FaCarSide size={50}/> 
      </Loader>
      <LoadText>LOADING...</LoadText>
    </LoadingIndicatorContainer>
  );
};
export default LoadingIncdicator;