import React, { useState } from 'react';
import { styled } from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useAppDispatch } from '../../redux/hooks';
import { addDibs, removeDibs } from '../../redux/modules/dibSlice';

type StateType = {
  id: number;
  state: boolean;
};

const DibsBtn: React.FC<StateType> = ({ id, state }) => {
  const dispatch = useAppDispatch();
  const [dibsState, setDibsState] = useState<boolean>(state);

  // api 연동 후 서버에 post, delete 요청도 함께 해줘야 됨
  const handleDibs = () => {
    //찜 해놓은 상태
    if (dibsState) {
      dispatch(removeDibs(id));
    } else {
      dispatch(addDibs(id));
    }
    setDibsState(!dibsState);
  };

  return (
    <DibsBtnBox onClick={handleDibs}>
      {dibsState ? <AiFillHeart size='24' /> : <AiOutlineHeart size='24' />}
    </DibsBtnBox>
  );
};

const DibsBtnBox = styled.button`
  border: none;
  background: none;
  padding: 0 10px;
`;

export default DibsBtn;
