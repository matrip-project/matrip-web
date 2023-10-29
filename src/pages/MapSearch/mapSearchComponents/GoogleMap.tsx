import React, { useState, useRef, useEffect } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox
} from '@react-google-maps/api';

import { performReverseGeocode } from './geocode';

import * as ms from '../mapPageStyle';



interface GoogleMapComponentProps {
  zoom: number;
  center: { lat: number; lng: number };

  // maker는 여러개가 될 수 있음
  // markers: { lat: number; lng: number };
}


const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
  zoom,
  center,
  // markers
}) => {
  const [mapCenter, setMapCenter] = useState(center);
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();

  //우클릭한 위치에 대한 정보
  const [clickedLocation, setClickedLocation] = useState<google.maps.LatLngLiteral>();
  const [clickedAddress, setClickedAddress] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  // 지도 우클릭하면 바뀌는 위치 정보를 검색창에도 반영 
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = clickedAddress;
    }
  }, [clickedAddress]);



  //StandaloneSearchBox 컴포넌트의 인스턴스를 참조
  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  /**
   * 맵에 표기되는 정보에 대한 옵션 설정
   * 위성지도 등
   */
  const mapOptions = {
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    styles: ms.customStyles
  };



  /**
   * 위치 검색에 대한 onChange함수
   * 검색 결과 값 중 선택한 장소에 대한 위도 경도 값을 setMapCenter()
   */
  const onPlacesChanged = () => {
    if (searchBox) {
      // places는 검색 결과중 하나를 선택한 결과값
      const places = searchBox.getPlaces();
      if (places && places.length === 1) {
        // 위도 경도 값
        const place = places[0].geometry?.location;
        // const placeName = places[0].name;
        const placeAddress = places[0].formatted_address;
        console.log(places[0]);

        if (place && placeAddress) {
          setMapCenter({ lat: place.lat(), lng: place.lng() });
          setClickedLocation({ lat: place.lat(), lng: place.lng() });
          setClickedAddress(placeAddress);
        }
      }
    }
  };

  const onMapRightClick = (e: google.maps.MapMouseEvent) => {
    const location = e.latLng;

    if (!location) { return; }

    const newLoc = {
      lat: e.latLng?.lat()!,
      lng: e.latLng?.lng()!,
    };

    // Reverse geocode를 실행하여 주소 가져오기
    if (location) {
      performReverseGeocode(location, (res) => {
        if (res && newLoc) {
          setClickedAddress(res.address);
          setClickedLocation(newLoc);
        }
      });
    }
  };

  const onSubmitLocation = (e:any) => {
    e.preventDefault;
    console.log(clickedAddress);
    console.log('submit loaciotn!');
  };


  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY || ''}
        libraries={['places']}
      >

        <GoogleMap
          mapContainerStyle={{
            zIndex: 999,
            width: '100%',
            height: '100vh',
            position: 'relative'
          }}
          zoom={zoom}
          center={mapCenter}
          options={mapOptions}
          onRightClick={onMapRightClick}
        >
          <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
            <ms.LocationSearchInput ref={inputRef} type='text' placeholder='🔍  위치 검색'
              style={{ position: 'absolute', width: '80%', left: '10%', top: '40px', height:'40px', borderRadius:'25px'}}
            />
          </StandaloneSearchBox>
          {clickedLocation &&
            <Marker
              key={clickedLocation.lat + clickedLocation.lng}
              position={{ lat: clickedLocation.lat, lng: clickedLocation.lng }}
              onClick={(e: google.maps.MapMouseEvent) => console.log('cliecked')}
              icon={
                {
                  url: `data:image/svg+xml;utf-8,${encodeURIComponent(
                    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="red">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z" fill="#1C274C"/>
                    <path d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z" fill="#1C274C"/>
                  </svg>`
                  )}`,
                  scaledSize: new google.maps.Size(40, 40),
                  anchor: new google.maps.Point(20, 40),
                }
              }
            />
          }

          {/* 이 부분에 넣을 내용이나 아이콘 논의 해봐야 합니다~! */}
          <ms.LocationSubmitBtn
            onClick={(e:any) => onSubmitLocation(e)}
          >
            <ms.LocationSubmitBtnContents>
              확인
            </ms.LocationSubmitBtnContents>
          </ms.LocationSubmitBtn>
        </GoogleMap>
      </LoadScript>

      {clickedAddress &&
        <div>
          <h3>FOR DEV : 지도위에 우클릭하시면 됩니당</h3>
          <h1>{clickedAddress}</h1>
        </div>
      }
    </>
  );
};

export default GoogleMapComponent;
