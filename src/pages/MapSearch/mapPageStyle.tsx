import { styled } from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
`;

export const LocationSearchInput = styled.input`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  height: 40px;
  width: 80%;
  border-radius: 25px;
  padding: 0 15px;
  z-index: 9999;
  position: relative;
  left: 10%;
  top: 40px;
  display: flex;
  align-items: center;

  ${(props) => props.theme.texts.resultValue1};

  &::placeholder {
    ${(props) => props.theme.texts.subtitle};
  }
`;

export const LocationSubmitBtn = styled.button`
  z-index: 9999;
  width: 8rem;
  height: 5rem;
  position: absolute;
  bottom: 40px;
  left: 40%;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.texts.mainTitle};
`;

export const customStyles = [
  {
    featureType: 'landscape',
    stylers: [
      {
        hue: '#FFBB00'
      },
      {
        saturation: 43.400000000000006
      },
      {
        lightness: 37.599999999999994
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.highway',
    stylers: [
      {
        hue: '#FFC200'
      },
      {
        saturation: -61.8
      },
      {
        lightness: 45.599999999999994
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.arterial',
    stylers: [
      {
        hue: '#FF0300'
      },
      {
        saturation: -100
      },
      {
        lightness: 51.19999999999999
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        hue: '#FF0300'
      },
      {
        saturation: -100
      },
      {
        lightness: 52
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      {
        hue: '#0078FF'
      },
      {
        saturation: -13.200000000000003
      },
      {
        lightness: 2.4000000000000057
      },
      {
        gamma: 1
      }
    ]
  },
  {
    featureType: 'poi',
    stylers: [
      {
        hue: '#00FF6A'
      },
      {
        saturation: -1.0989010989011234
      },
      {
        lightness: 11.200000000000017
      },
      {
        gamma: 1
      }
    ]
  }
];
