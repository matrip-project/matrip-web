import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Exclamation } from '../../../asset/exclamation.svg';
import { HelpWrap, PostingContainer, StateProps } from '..';
import Label from './Label';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/modules/postSlice';

function TitleInput({ dataInput }: StateProps) {
  const [inputCnt, setInputCnt] = useState(0);
  const dispatch = useDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dataInput) {
      dispatch(setData({ ...dataInput, title: e.target.value }));
    }
    setInputCnt(e.target.value.length);
  };

  return (
    <PostingContainer>
      <Label label='제목' essential={true} />
      <HelpContainer>
        <Exclamation />
        <HelpWrap>제목등록시 여행할 “장소”를 꼭 넣어주세요</HelpWrap>
      </HelpContainer>
      <InputBox>
        <InputWrap
          onChange={handleInput}
          value={dataInput?.title}
          placeholder='ex)포천!! 포천아일랜드 당일여행 동행구합니다'
          maxLength={35}
        />
        <InputCntWrap>{inputCnt}/35</InputCntWrap>
      </InputBox>
    </PostingContainer>
  );
}

const HelpContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: -7px 0 10px 0;
`;

const InputBox = styled.div`
  position: relative;
  width: 90%;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
`;

const InputWrap = styled.input`
  ${(props) => props.theme.texts.tapTitle1};
  width: 84%;
  height: 36px;
  padding: 0 7px;
  border: none;

  &::placeholder {
    ${(props) => props.theme.texts.tapTitle2};
  }
`;

const InputCntWrap = styled.div`
  ${(props) => props.theme.texts.menuNone};
  position: absolute;
  right: 3%;
  top: 15px;
`;

export default TitleInput;
