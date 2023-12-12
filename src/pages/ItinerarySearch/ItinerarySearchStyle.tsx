import { Link } from 'react-router-dom';
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

export const WriteLink = styled(Link)`
  padding: 0;
  position: fixed;
  bottom: 10%;
  right: 36%;
`;

export const WriteBtn = styled.button`
  background: none;
  background-color: #056676;
  border-radius: 100%;
  height: 65px;
  width: 65px;
  box-shadow: 2px 3px 5px;
  cursor: pointer;
`;

export const SearchPlacePeopleBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const DateBoxBtn = styled.button`
  width: 400px;
  height: 45px;
  margin-right: 10px;
  border-radius: 40px;
  outline: none;
  text-align: left;
  padding-left: 20px;
  color: gray;
  border: none;
  cursor: pointer;
`;

export const NumberPeople = styled.div`
  width: 200px;
  height: 45px;
  border-radius: 40px;
  outline: none;
  padding: 0 20px;
  text-align: center;
  align-items: center;
  background-color: #f1f1f1;
  border: none;
  display: flex;
  position: relative;
`;

export const NumberPeopleP = styled.p`
  color: gray;
  font-size: 14px;
  justify-content: center;
  text-align: left;
  align-items: center;
`;

export const NumberPeopleCount = styled.div`
  text-align: right;
  position: absolute;
  display: flex;
  right: 20px;
`;

export const NumberPeopleMinus = styled.button`
  color: gray;
  height: 45px;
  font-size: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const NumberPeoplePlus = styled.button`
  color: gray;
  height: 45px;
  font-size: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
  background-color: transparent;
`;

export const NumberPeopleCountText = styled.div`
  color: #5EAAA8;
  width: 25px;
  font-size: 20px;
  height: 45px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const locationContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
`;

export const locationBox = styled.div`
  display: flex;
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
