import { styled } from 'styled-components';

export const MapContainer = styled.div`
  width: 100%;
`;

export const LocationSearchInput = styled.input`
  z-index: 9999;
  box-sizing: border-box;
  border: 1px solid #ccc;
  height: 40px;
  width: 80%; 
  border-radius: 25px;
  padding: 0 15px;
  position: absolute;
  left: 10%; 
  top: 40px; 
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const LocationSubmitBtn = styled.button`
  z-index: 9999;
  width: 20%;
  padding-bottom: 10%;
  position: absolute;
  bottom: 40px;
  left: 40%;
  border-radius: 25px;
  background-color: #fff;
`;

export const LocationSubmitBtnContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center; 
  align-items: center;    

  font-weight: 800;
  font-size: 20px;
`;

export const customStyles = [
    {
        'featureType': 'landscape',
        'stylers': [
            {
                'hue': '#FFBB00'
            },
            {
                'saturation': 43.400000000000006
            },
            {
                'lightness': 37.599999999999994
            },
            {
                'gamma': 1
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'stylers': [
            {
                'hue': '#FFC200'
            },
            {
                'saturation': -61.8
            },
            {
                'lightness': 45.599999999999994
            },
            {
                'gamma': 1
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'stylers': [
            {
                'hue': '#FF0300'
            },
            {
                'saturation': -100
            },
            {
                'lightness': 51.19999999999999
            },
            {
                'gamma': 1
            }
        ]
    },
    {
        'featureType': 'road.local',
        'stylers': [
            {
                'hue': '#FF0300'
            },
            {
                'saturation': -100
            },
            {
                'lightness': 52
            },
            {
                'gamma': 1
            }
        ]
    },
    {
        'featureType': 'water',
        'stylers': [
            {
                'hue': '#0078FF'
            },
            {
                'saturation': -13.200000000000003
            },
            {
                'lightness': 2.4000000000000057
            },
            {
                'gamma': 1
            }
        ]
    },
    {
        'featureType': 'poi',
        'stylers': [
            {
                'hue': '#00FF6A'
            },
            {
                'saturation': -1.0989010989011234
            },
            {
                'lightness': 11.200000000000017
            },
            {
                'gamma': 1
            }
        ]
    }
];
