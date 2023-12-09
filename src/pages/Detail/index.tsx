import { useNavigate, useParams } from 'react-router-dom';
import { MainContainer } from '../../styles/GlobalStyles';
import * as D from './detailStyle';
import Map from '../../components/Map';
import Info from './detailComponents/Info';
import CommentInput from '../../components/@atoms/CommentInput';
import CommentCount from '../../components/@atoms/CommentCount';
import Thumbnail from '../../components/@atoms/Thumbnail';
import Plan from './detailComponents/Plan';
import { useEffect, useState } from 'react';
import { getJourneyDetail } from '../../apis/api/journey';
import { DataProps, ImageProps } from '../../types/postData';
import { getCleanDetailInfo } from '../../apis/services/journey';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { setData, setImage } from '../../redux/modules/postSlice';
import { useUserId } from '../../hooks/useUserId';

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useParams().id;
  const [detail, setDetail] = useState<DataProps>();
  const [imageData, setImageData] = useState<ImageProps[]>([]);
  const zoom = 13;
  const userId = useUserId();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        await getJourneyDetail(parseInt(id)).then((res) => {
          console.log('get journey success: ', res);
          const detailData = getCleanDetailInfo(res);

          setImageData(detailData.journeyImgRequestDtoList);

          delete detailData['journeyImgRequestDtoList'];
          setDetail(detailData);
        });
      }
    };

    getData();
  }, [id]);

  const plan = [
    {
      day: 1,
      content:
        '7:00 강남역 만나서 출발\n12시 충주호 도착\n주변 “맛집”에서 점심식사'
    },
    {
      day: 2,
      content:
        '8:00 강남역 만나서 출발\n12시 충주호 도착\n 주변 “맛집”에서 점심식사'
    }
  ];

  const onCommentClick = () => {
    if (id) {
      return navigate(`/trip/${parseInt(id)}/comments`);
    }
  };

  const onEditClick = () => {
    if (detail) {
      dispatch(setData(detail));
    }
    if (imageData) {
      dispatch(setImage(imageData));
    }
    navigate('/posting', { state: { id: parseInt(id!) } });
  };

  return (
    <MainContainer>
      <Header
        edit={false}
        mine={userId === detail?.memberId}
        onClick={onEditClick}
      />
      <D.DeatilMainBox>
        <Thumbnail url={imageData ? imageData[0]?.path : ''} />
        {detail && (
          <>
            <Info data={detail} />
            <Map
              center={{ lat: detail.latitude, lng: detail.longitude }}
              zoom={zoom}
            />
            {/* <Plan plan={plan} /> */}
            <D.CommentContainer>
              <CommentInput journeyId={parseInt(id!)} memberId={1} />
              <CommentCount
                cnt={detail.journeyCount!}
                onClick={onCommentClick}
              />
            </D.CommentContainer>
          </>
        )}
      </D.DeatilMainBox>
    </MainContainer>
  );
}

export default Detail;
