import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import LocationSelect from './postingComponents/LocationSelect';
import Header from '../../components/Header';
import { JourneyProps, ImageProps } from '../../types/postData';
import { uploadImage } from '../../utils/uploadImage';
import { postJourney, putJourney } from '../../apis/api/journey';
import { useDispatch } from 'react-redux';
import { deleteAll } from '../../redux/modules/postSlice';
import { useUserId } from '../../hooks/useUserId';

export interface StateProps {
  dataInput?: JourneyProps;
  imageInput?: ImageProps;
}

function Posting() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.post.data);
  const image = useSelector(
    (state: RootState) => state.post.data.journeyImgRequestDtoList
  );
  const preview = useSelector((state: RootState) => state.post.preview);
  const [end, setEnd] = useState(false);
  const postId = location.state?.id;
  const userId = useUserId();
  const center = {
    lat: data ? data.latitude : 0.0,
    lng: data ? data.longitude : 0.0
  };
  const imageInput = {
    journeyImgRequestDtoList: [
      {
        path: image ? image[0].path : '',
        sequence: 0
      }
    ]
  };

  const handleSave = async () => {
    if (data) {
      if (
        data.city.length === 0 ||
        data.title.length === 0 ||
        data.content.length === 0 ||
        (!preview && !image[0].path)
      ) {
        alert('필수 항목을 채워주세요!');
      } else {
        if (preview) {
          //new image
          try {
            const uploaded = await uploadImage(preview!);
            if (uploaded) {
              imageInput.journeyImgRequestDtoList[0].path = uploaded;

              const dataMerged = {
                ...data,
                ...imageInput,
                status: end ? 'CLOSED' : 'ACTIVE',
                id: postId,
                memberId: userId
              };
              console.log(dataMerged);

              if (postId) {
                putData(dataMerged);
              } else {
                postData(dataMerged);
              }
            }
          } catch (error) {
            console.log('image setstate fail:', error);
          }
        } else {
          console.log('no img');

          const dataMerged = {
            ...data,
            ...imageInput,
            status: end ? 'CLOSED' : 'ACTIVE',
            id: postId,
            memberId: userId
          };
          putData(dataMerged);
        }
      }
    }
  };

  const postData = async (data: object) => {
    await postJourney(data).then((res) => {
      console.log('post journey success: ', res);
      dispatch(deleteAll());
      navigate('/');
    });
  };

  const putData = async (data: object) => {
    await putJourney(data).then((res) => {
      console.log('put journey success: ', res);
      dispatch(deleteAll());
      navigate('/');
    });
  };

  return (
    <MainContainer>
      <Header edit={true} onClick={handleSave} />
      <PostMainbox>
        <ImageUpload url={image ? image[0].path : ''} />
        <SpotSelect dataInput={data} />
        <TitleInput dataInput={data} />
        <DateSelect dataInput={data} />
        <PersonnelInput dataInput={data} />
        <PostingContainer>
          <Label label='소개글' essential={true} />
          <TextField limit={100} name='content' dataInput={data} />
        </PostingContainer>
        {/* <PostingContainer>
          <Label label='해시태그' essential={false} />
          <TextField
            limit={50}
            name='tag'
            dataInput={data}
          />
        </PostingContainer> */}
        <LocationSelect center={center} />
        <ChangeStateWrap>
          <ChangeStateBtn onClick={() => setEnd(!end)}>
            모집 마감
          </ChangeStateBtn>
          <HelpBox>
            <Exclamation />
            <HelpWrap>
              동행 인원이 마감되었을 경우 ‘모집 마감’을 눌러주세요.
            </HelpWrap>
          </HelpBox>
        </ChangeStateWrap>
      </PostMainbox>
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

const PostMainbox = styled(MainBox)`
  width: 100%;
`;

export default Posting;
