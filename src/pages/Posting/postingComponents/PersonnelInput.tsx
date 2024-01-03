import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/modules/postSlice';
import { PostingContainer, StateProps } from '..';
import Label from './Label';
import { ReactComponent as Up } from '../../../asset/up.svg';

function PersonnelInput({ dataInput }: StateProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const parsedValue = parseInt(e.target.value);

    setValue(parsedValue);

    if (dataInput) {
      dispatch(
        setData({
          ...dataInput,
          count: parsedValue
        })
      );
    }
  };

  const increment = () => {
    setValue((value) => value + 1);
    if (dataInput) {
      dispatch(
        setData({
          ...dataInput,
          count: value + 1
        })
      );
    }
  };

  const decrement = () => {
    setValue((value) => value - 1);
    if (dataInput) {
      dispatch(
        setData({
          ...dataInput,
          count: value - 1
        })
      );
    }
  };

  return (
    <PostingContainer>
      <Label label='동행 모집 인원' essential={true} />
      <InputWrap type='number' min={0} onInput={handleInput} value={value} />
      <ButtonWrap>
        <Up onClick={increment} />
        <Down onClick={decrement} />
      </ButtonWrap>
    </PostingContainer>
  );
}

const InputWrap = styled.input`
  width: calc(90% - 7px);
  height: 36px;
  padding-left: 7px;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  position: relative;
`;

const ButtonWrap = styled.div`
  position: absolute;
  display: flex;
  right: 8%;
  top: 55.3%;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const Down = styled(Up)`
  transform: scaleY(-1);
`;

export default PersonnelInput;
