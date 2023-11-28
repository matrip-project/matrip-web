import { Link } from 'react-router-dom';
import { PostingContainer } from '..';
import Map from '../../../components/Map';
import Label from './Label';

type LocationType = {
  lat: number;
  lng: number;
};

interface LocationProps {
  center: LocationType;
}

function LocationSelect({ center }: LocationProps) {
  return (
    <PostingContainer>
      <Label label='위치 설정' essential={true} />
      <Link to={'/mapSearch'} style={{ width: '90%' }}>
        <Map center={center} zoom={13} />
      </Link>
    </PostingContainer>
  );
}

export default LocationSelect;
