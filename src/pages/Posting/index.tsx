import { useState } from 'react';
import styled from 'styled-components';
import { MainBox, MainContainer } from '../../styles/GlobalStyles';
import { ReactComponent as Exclamation } from '../../asset/exclamation.svg';
import ImageUpload from './postingComponents/ImageUpload';
import SpotSelect from './postingComponents/SpotSelect';
import TitleInput from './postingComponents/TitleInput';
import PersonnelInput from './postingComponents/PersonnelInput';
import Label from './postingComponents/Label';
import TextField from './postingComponents/TextField';
import DateSelect from './postingComponents/DateSelect';
import dayjs from 'dayjs';
import { addDays } from 'date-fns';
import LocationSelect from './postingComponents/LocationSelect';
import Header from '../../components/Header';

export interface StateProps {
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
  number?: number;
  setNumber?: React.Dispatch<React.SetStateAction<number>>;
}

function Posting() {
  const [end, setEnd] = useState(false);
  const [destination, setDestination] = useState('');
  const [title, setTitle] = useState('');
  const [personnel, setPersonnel] = useState(0);
  const [detail, setDetail] = useState('');
  const [tag, setTag] = useState('');
  const [date, setDate] = useState({
    startDate: dayjs(new Date()).format('YYYY.MM.DD'),
    endDate: dayjs(addDays(new Date(), 1)).format('YYYY.MM.DD')
  });
  const [location, setLocation] = useState({
    lat: 37.5665,
    lng: 126.978
  });

  return (
    <MainContainer>
      <Header edit={true} />
      <MainBox>
        <ImageUpload />
        <SpotSelect state={destination} setState={setDestination} />
        <TitleInput state={title} setState={setTitle} />
        <DateSelect date={date} setDate={setDate} />
        <PersonnelInput setNumber={setPersonnel} />
        <PostingContainer>
          <Label label='소개글' essential={true} />
          <TextField limit={100} state={detail} setState={setDetail} />
        </PostingContainer>
        <PostingContainer>
          <Label label='해시태그' essential={true} />
          <TextField limit={50} state={tag} setState={setTag} />
        </PostingContainer>
        <LocationSelect center={location} />
        <ChangeStateWrap>
          <ChangeStateBtn onClick={() => setEnd(true)}>
            모집 마감
          </ChangeStateBtn>
          <HelpBox>
            <Exclamation />
            <HelpWrap>
              동행 인원이 마감되었을 경우 ‘모집 마감’을 눌러주세요.
            </HelpWrap>
          </HelpBox>
        </ChangeStateWrap>
      </MainBox>
    </MainContainer>
  );
}

export const PostingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

export const HelpWrap = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1rem;
  line-height: 20px;
  margin-left: 3px;
`;

const ChangeStateWrap = styled.div`
  width: 90%;
  margin: 15px 0;
`;

const ChangeStateBtn = styled.button`
  width: 100%;
  height: 46px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 50px;
`;

const HelpBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export default Posting;
