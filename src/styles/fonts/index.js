import { createGlobalStyle } from 'styled-components';
import Prentendard from './Pretendard-Regular.woff2';

export default createGlobalStyle`
@font-face {
    font-family: "Prentendard";
    src: url(${Prentendard}) fromat("woff2");
}`;
