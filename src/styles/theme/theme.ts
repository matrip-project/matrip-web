import { DefaultTheme } from 'styled-components';

const colors = {
  primary: '#D30065',
  secondary: '#FFBBDB',
  neutral1: '#D9D9D9',
  neutral2: '#ADADAD',
  neutral3: '#666',
  neutral4: '#242424',
  black: '#000',
  white: '#FFF'
};

const texts = {
  mainTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    lineHeight: '22px',
    color: '#000'
  },
  subtitle: {
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '20.72px',
    color: '#666'
  },
  resultValue1: {
    fontSize: '1.6rem',
    fontWeight: '500',
    lineHeight: '23.68px',
    color: '#242424'
  },
  resultValue2: {
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '23.68px',
    color: '#242424'
  },
  tapTitle1: {
    fontSize: '1.4rem',
    fontWeight: '500',
    lineHeight: '20.72px',
    color: '#242424'
  },
  tapTitle2: {
    fontSize: '1.4rem',
    fontWeight: '500',
    lineHeight: '20.72px',
    color: '#ADADAD'
  },
  menuSelect: {
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '17.76px',
    color: '#464646'
  },
  menuNone: {
    fontSize: '1.2rem',
    fontWeight: '500',
    lineHeight: '17.76px',
    color: '#ADADAD'
  },
  content1: {
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '14.8px',
    color: '#242424'
  },
  content2: {
    fontSize: '1rem',
    fontWeight: '400',
    lineHeight: '14.8px',
    color: '#666'
  }
};

export type ColorsType = typeof colors;

export type TextsType = typeof texts;

export const theme: DefaultTheme = {
  colors,
  texts
};
