import { styled } from 'styled-components';

export const MainBoxHeader = styled.div`
  width: 100%;
  margin: 20px 0;
`;

export const SearchWriteBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-right: 10px;
  height: 45px;
  border-radius: 40px;
  outline: none;
  padding: 0 20px;
  background-color: #f1f1f1;
  border: none;
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const WriteBtn = styled.button`
  background: none;
  background-color: #056676;
  border-radius: 100%;
  height: 65px;
  width: 65px;
  position: fixed;
  bottom: 100px;
  right: 670px;
  box-shadow: 2px 3px 5px;
  cursor: pointer;
`;

export const locationContainer = styled.div`
  display: flex;
`;

export const locationBox = styled.div`
  display: flex;
  margin-right: 20px;
  justify-content: center;
  text-align: center;
`;

export const marginzeroP = styled.p`
  justify-content: center;
  text-align: center;
`;

export const postContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* gap: 15px; */
`;
