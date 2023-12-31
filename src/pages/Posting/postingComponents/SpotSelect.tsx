import styled from 'styled-components';
import Label from './Label';
import { PostingContainer, StateProps } from '..';
import InterestButton from '../../../components/@atoms/PlaceChoiceButton';
import { useDispatch } from 'react-redux';
import { setData } from '../../../redux/modules/postSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function SpotSelect({ dataInput }: StateProps) {
  const data = useSelector((state: RootState) => state.post.data);
  const dispatch = useDispatch();
  const spot = [
    '서울',
    '경기',
    '인천',
    '강원',
    '부산',
    '충북',
    '충남',
    '전북',
    '전남',
    '제주',
    '경북',
    '경남'
  ];

  const handleClick = (curr: string) => {
    if (dataInput) {
      dispatch(setData({ ...dataInput, city: curr }));
    }
  };

  return (
    <PostingContainer>
      <Label label='여행지 선택' essential={true} />
      <SpotWrap>
        {spot.map((spot, index) => (
          <StyledInterest
            key={index}
            $active={spot === dataInput?.city}
            onClick={() => {
              handleClick(spot);
            }}
          >
            {spot}
          </StyledInterest>
        ))}
      </SpotWrap>
    </PostingContainer>
  );
}

const SpotWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 90%;
`;

const StyledInterest = styled(InterestButton)<{ $active: boolean }>`
  background-color: ${(props) => props.$active && props.theme.colors.primary};
  border-color: ${(props) => props.$active && props.theme.colors.primary};
  color: ${(props) => props.$active && props.theme.colors.white};
`;

export default SpotSelect;
