import React from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as ms from './mapPageStyle';
import GoogleMapComponent from './mapSearchComponents/GoogleMap';

const MapSearch = () => {
  /**
   * 임의값 지정
   * 추후 geolocation추가해서 현재 위치 받아오는 기능 추가 필
   */
  const center = { lat: 37.5665, lng: 126.978 };
  const zoom = 13;
  // const markers = { lat: 37.5665, lng: 126.978 };

  return (
    <gs.MainContainer>
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
