import React, { useState } from 'react';
import { HiMapPin, HiMiniMagnifyingGlass, HiPencil } from 'react-icons/hi2';
import Post from '../../components/Post';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './mainStyle';

const Main: React.FC = () => {
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
      <gs.MainBox>
        <ms.MainBoxHeader>
          <ms.SearchWriteBox>
            <ms.SearchBox>
              <ms.SearchInput
                type='search'
                placeholder='여행장소를 입력해주세요!'
                id='searchInput'
                value={input}
                onChange={getValue}
                onKeyDown={handleKeyPress}
              ></ms.SearchInput>
              <ms.SearchBtn
                className='searchIcon'
                type='submit'
                onClick={handleSearch}
              >
                <HiMiniMagnifyingGlass size='24' />
              </ms.SearchBtn>
            </ms.SearchBox>
          </ms.SearchWriteBox>
          <ms.locationContainer>
            <ms.locationBox>
              <HiMapPin size='24' />
             <ms.marginzeroP> 현위치 : 서울 마포구 마포대로 122</ms.marginzeroP>
            </ms.locationBox>
          </ms.locationContainer>
        </ms.MainBoxHeader>
        <ms.postContainer>
          <Post searchInput={searchInput} />
        </ms.postContainer>
        <ms.WriteBtn>
          <HiPencil size='24' color='white'></HiPencil>
        </ms.WriteBtn>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default Main;
