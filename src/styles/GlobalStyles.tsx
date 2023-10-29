import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
sub,
sup,
tt,
var,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a,
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}

body{
  background: ${({ theme }: { theme: any }) => theme.bgColor};
  color:${({ theme }: { theme: any }) => theme.textColor};
}
// button{
//   border: solid ${({ theme }: { theme: any }) => theme.borderColor} 1px;
// }
`;

// 전체 화면 컨테이너
export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
`;

// 그 안에 들어갈 내용을 감싸는 컨테이너
export const MainBox = styled.div`
  max-width: 600px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 70px 0;
  // background-color: #f0f0f0;

  @media screen and (min-width: 600px) {
    width: 600px;
  }
`;

export const PageName = styled.div`
  width: 80%;
  margin-top: 15px;
  font-weight: 800;
  font-size: 22px;
`;
