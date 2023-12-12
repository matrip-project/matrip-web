import {styled} from 'styled-components';

export const EditImageCtnr = styled.div`
    z-index: 1000;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -0%);
    background-color: #fff;
    border: 1px solid grey;
    border-radius: 25px;
    width: 80%;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const EditImgHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

`;

export const CropControl = styled.div`
    width: 100%;
`;

export const ImageInput = styled.input`
      
    border: none;
    padding: 8px;
    background-color: white;
    color: #555;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: background-color 0.2s, box-shadow 0.2s, color 0.2s;
`;

export const SaveImgBtn = styled.button`
    width: 70px;
    height: 40px;
    background-color: transparent;
    border: none;
    font-size: 17px;
    font-weight: bold;
    overflow: hidden;
`;