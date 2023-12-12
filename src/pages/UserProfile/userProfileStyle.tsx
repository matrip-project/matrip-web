import { styled, css } from 'styled-components';

export const ProfileCard = styled.div`
  background-color: #fff;
  border-radius: 25px;
  overflow: hidden;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
  margin-top: 15px;
  margin-bottom: 20px;
`;

// 왜 이미지 넓이가 달라짐?????????
export const ImgCtnr = styled.div<{ $isEditable: boolean }>`
  width: 100%;
  // 높이 넓이와 같게
  padding-bottom: ${({ $isEditable }) => ($isEditable ? '100%' : '50%')};
  transition: padding-bottom 0.3s;
  position: relative;
  margin: 0px 0px;
  overflow: hidden;
  
`;

export const Img = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;  
`;

export const EditImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%; 
    background-color: #ffffff;
    background-color: rgba( 0, 0, 0, 0.5 );
`;


export const InfoCtnr = styled.div<{ $isEditable: boolean }>`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 13px;
  height: ${({ $isEditable }) => ($isEditable ? '150px' : '270px')};
  transition: height 0.3s;
`;



export const IdCtnr = styled.div`
  margin: 10px 0px;
  font-size: 23px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;

export const IdText = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 4px;
`;

export const EmailCtnr = styled.div`
  margin: 10px 0px;
  color: grey;
`;

export const EmailText = styled.div``;

export const BirthCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`;

export const BirthText = styled.div``;

export const LabelName = styled.div``;

export const SexCtnr = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0px;
`;

export const SexText = styled.div``;
