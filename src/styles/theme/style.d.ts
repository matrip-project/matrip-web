import 'styled-components';
import { ColorsType, TextsType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    texts: TextsType;
  }
}
