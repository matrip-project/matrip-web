import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 298px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: relative;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  display: inline-flex;
  width: 298px;
  height: 48px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50px;
  border: 1px solid var(--box-stroke, #d9d9d9);
  background: var(--theme-white-theme-core-tokens-ui-background-white, #fff);
`;

export const SearchBtn = styled.button`
  background: none;
  border: none;
  right: 16px;
  cursor: pointer;
  position: absolute;
`;
