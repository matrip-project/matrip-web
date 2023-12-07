import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
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
import { DataProps, ImageProps } from '../../types/postData';
import { uploadImage } from '../../utils/uploadImage';
import { postJourney } from '../../apis/api/journey';

export interface StateProps {
  dataInput?: DataProps;
  setDataInput?: React.Dispatch<React.SetStateAction<DataProps>>;
  imageInput?: ImageProps;
  setImageInput?: React.Dispatch<React.SetStateAction<ImageProps>>;
}

function Posting() {
  const navigate = useNavigate();
  const { lat, lng } = useSelector((state: RootState) => state.location);
  const [end, setEnd] = useState('ACTIVE');
  const [dataInput, setDataInput] = useState<DataProps>({
    title: '',
    content: '',
    city: '',
    startDate: dayjs(new Date()).format('YYYY-MM-DD'),
    endDate: dayjs(addDays(new Date(), 1)).format('YYYY-MM-DD'),
    count: 0,
    latitude: lat,
    longitude: lng,
    tag: '',
    status: end,
    memberId: 1
  });
  const center = {
    lat: dataInput?.latitude,
    lng: dataInput?.longitude
  };
  const imageInput = {
    journeyImgRequestDtoList: [
      {
        path: '',
        sequence: 0
      }
    ]
  };
  const [preview, setPreview] = useState<File | null>(null);

  // console.log(imageInput);

  const handleSave = async () => {
    if (
      dataInput.city.length === 0 ||
      dataInput.title.length === 0 ||
      dataInput.content.length === 0 ||
      !preview
    ) {
      alert('필수 항목을 채워주세요!');
    }
    if (preview) {
      try {
        const uploaded = await uploadImage(preview);
        if (uploaded) {
          console.log(uploaded);
          imageInput.journeyImgRequestDtoList[0].path = uploaded;

          const dataMerged = { ...dataInput, ...imageInput };
          console.log(dataMerged);

          postData(dataMerged);
        }
      } catch (error) {
        console.log('image setstate fail:', error);
      }
    }
  };

  const postData = async (data: object) => {
    await postJourney(data).then((res) => {
      console.log('post journey success: ', res);
      navigate('/');
    });
  };

  const updateLocation = (lat: number, lng: number) => {
    setDataInput({
      ...dataInput,
      latitude: lat,
      longitude: lng
    });
  };

  return (
    <MainContainer>
      <Header edit={true} onClick={handleSave} />
      <MainBox>
        <ImageUpload
          url={imageInput.journeyImgRequestDtoList[0].path}
          setPreivew={setPreview}
        />
        <SpotSelect dataInput={dataInput} setDataInput={setDataInput} />
        <TitleInput dataInput={dataInput} setDataInput={setDataInput} />
        <DateSelect dataInput={dataInput} setDataInput={setDataInput} />
        <PersonnelInput dataInput={dataInput} setDataInput={setDataInput} />
        <PostingContainer>
          <Label label='소개글' essential={true} />
          <TextField
            limit={100}
            name='content'
            dataInput={dataInput}
            setDataInput={setDataInput}
          />
        </PostingContainer>
        {/* <PostingContainer>
          <Label label='해시태그' essential={false} />
          <TextField
            limit={50}
            name='tag'
            dataInput={dataInput}
            setDataInput={setDataInput}
          />
        </PostingContainer> */}
        <LocationSelect center={center} />
        <ChangeStateWrap>
          <ChangeStateBtn onClick={() => setEnd('')}>모집 마감</ChangeStateBtn>
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
