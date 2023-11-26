import React from 'react';
import styled from 'styled-components';

type ImageProps = {
    height : number;
};

const Image:React.FC<ImageProps> = ({height}) => {
  return (
    <ImageContainer height={height}>Image</ImageContainer>
  );
};

export default Image;

const ImageContainer = styled.div<ImageProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${props => props.height}px;
`;