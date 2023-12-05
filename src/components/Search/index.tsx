import React, { useRef, useState } from 'react';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import * as gs from '../../styles/GlobalStyles';
import * as ss from './SearchStyle';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDispatch } from 'react-redux';
import { setKeyword } from '../../redux/modules/searchSlice';
import { useNavigate } from 'react-router-dom';
import searchHeaderIcom from '../../asset/searchHeaderIcom.svg';

const Search: React.FC = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toLowerCase());
  };

  const handleSearch = () => {
    dispatch(setKeyword(input));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
      navigate('/CompanionList');
    }
  };

  return (
    <gs.MainContainer>
      <ss.SearchBox>
        <ss.SearchInput
          type='search'
          placeholder='검색'
          id='searchInput'
          value={input}
          onChange={getValue}
          onKeyDown={handleKeyPress}
        />

        <ss.SearchBtn
          className='searchIcon'
          type='submit'
          onClick={handleSearch}
        >
          <img src={searchHeaderIcom}></img>
        </ss.SearchBtn>
      </ss.SearchBox>
    </gs.MainContainer>
  );
};

export default Search;
