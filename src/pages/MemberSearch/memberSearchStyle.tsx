import { styled } from 'styled-components';

export const SearchInputBox = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.div`
  position: absolute;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 15px 0 40px;
  border-radius: 40px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box; // border 두께를 크기 계산에 포함

  background-color: #f0f0f0;

  &:focus {
    border: 1px solid #000;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
`;

export const SearchResultArea = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
`;
