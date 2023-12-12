import React from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './mapPageStyle';
import GoogleMapComponent from './mapSearchComponents/GoogleMap';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const MapSearch = () => {
  const data = useSelector((state: RootState) => state.post.data);
  const center = { lat: data.latitude, lng: data.longitude };
  const zoom = 13;

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <ms.MapContainer>
          <GoogleMapComponent
            center={center}
            zoom={zoom}
            //markers={markers}
          />
        </ms.MapContainer>
      </gs.MainBox>
    </gs.MainContainer>
  );
};

export default MapSearch;
