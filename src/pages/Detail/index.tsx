import { useParams } from 'react-router-dom';
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
import { DataProps } from '../../types/postData';
import { getCleanDetailInfo } from '../../apis/services/journey';
import Header from '../../components/Header';

function Detail() {
  const id = useParams().id;
  const [detail, setDetail] = useState<DataProps>();
  const [image, setImage] = useState<any[]>([]);
  const zoom = 13;

  useEffect(() => {
    const getData = async () => {
      if (id) {
        await getJourneyDetail(parseInt(id)).then((res) => {
          console.log('get journey success: ', res);
          const detailData = getCleanDetailInfo(res);

          setImage(detailData.journeyImgRequestDtoList);

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

  return (
    <MainContainer>
      <Header edit={false} />
      <D.DeatilMainBox>
        <Thumbnail url={image[0]?.path} />
        {detail && (
          <>
            <Info data={detail} />
            <Map
              center={{ lat: detail.latitude, lng: detail.longitude }}
              zoom={zoom}
            />
            {/* <Plan plan={plan} /> */}
            <D.CommentContainer>
              <CommentInput />
              <CommentCount cnt={detail.journeyCount!} />
            </D.CommentContainer>
          </>
        )}
      </D.DeatilMainBox>
    </MainContainer>
  );
}

export default Detail;
