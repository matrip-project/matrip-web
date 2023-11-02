import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#056676',
  secondary: '#5EAAA8',
  neutral1: '#F1F1F1',
  neutral2: '#ECECEC',
  neutral3: '#D9D9D9',
  neutral4: '#9C9C9C',
  neutral5: '#676767',
  black: '#333',
  white: '#FFF'
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors
};
