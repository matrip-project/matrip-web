import React, { useState } from 'react';
import { HiMapPin, HiMiniMagnifyingGlass, HiPencil } from 'react-icons/hi2';
import * as gs from '../../styles/GlobalStyles';
import * as ss from './SearchStyle';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Search: React.FC = () => {
  // serch
  const [searchInput, setSearchInput] = useState('');
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setSearchInput(input);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const getValue = (e: any) => {
    setInput(e.target.value.toLowerCase());
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
          <HiMiniMagnifyingGlass size='24' color='gray' />
        </ss.SearchBtn>
      </ss.SearchBox>
    </gs.MainContainer>
  );
};

export default Search;
