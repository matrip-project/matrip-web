import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#D30065',
  secondary: '#FFBBDB',
  neutral1: '#FCFCFC',
  neutral2: '#ECECEC',
  neutral3: '#D9D9D9',
  neutral4: '#9C9C9C',
  neutral5: '#262626',
  black: '#000',
  white: '#FFF'
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors
};
