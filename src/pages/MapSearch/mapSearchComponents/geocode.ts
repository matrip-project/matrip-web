interface GeocodeRes {
  address: string;
  location: any;
}

export const performReverseGeocode = (
  latLng: google.maps.LatLng,
  callback: (address: GeocodeRes) => void
) => {
  const geocoder = new google.maps.Geocoder(); // geocoder 객체 초기화
  geocoder.geocode({ location: latLng }, (results, status) => {
    if (status === google.maps.GeocoderStatus.OK && results) {
      const res: GeocodeRes = {
        address: results[0].formatted_address,
        location: {
          lat: latLng.lat(),
          lng: latLng.lat()
        }
      };
      callback(res);
    } else {
      console.error('Google Maps Reverse Geocoding Error: ', status);
    }
  });
};

// name : results[0].formatted_address,
//         lat : latLng.lat(),
//         lng : latLng.lat()
