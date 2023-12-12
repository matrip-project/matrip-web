import styled from 'styled-components';
import { PostingContainer, StateProps } from '..';
import Label from './Label';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/modules/postSlice';

function PersonnelInput({ dataInput }: StateProps) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dataInput) {
      dispatch(
        setData({
          ...dataInput,
          count: parseInt(e.target.value)
        })
      );
    }
  };

  return (
    <PostingContainer>
      <Label label='동행 모집 인원' essential={true} />
      <InputWrap
        type='number'
        min={0}
        onChange={handleChange}
        value={dataInput?.count}
      />
    </PostingContainer>
  );
}

const InputWrap = styled.input`
  width: calc(90% - 7px);
  height: 36px;
  padding-left: 7px;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
`;

export default PersonnelInput;
