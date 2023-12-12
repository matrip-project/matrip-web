import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const InfoCtnr = styled.div`
  width: 100%;
  margin: 15px 0px;
  display: flex;
  flex-direction: column;
`;

export const FormBox = styled.form`
  width: 100%;
  margin-top: 30px;
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9c9c9c;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const InputBtn = styled.button`
  background: #ececec;
  border: solid 1px #ececec;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;
