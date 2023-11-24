import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface GoogleMapComponentProps {
  zoom: number;
  center: { lat: number; lng: number };

  // maker는 여러개가 될 수 있음
  // markers: { lat: number; lng: number };
}

function Map({ zoom, center }: GoogleMapComponentProps) {
  const [mapCenter, setMapCenter] = useState(center);

  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  };
  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ''}
        libraries={['places']}
      >
        <GoogleMap
          mapContainerStyle={{
            width: '100%',
            height: '200px',
            position: 'relative'
          }}
          zoom={zoom}
          center={mapCenter}
          options={mapOptions}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default Map;
