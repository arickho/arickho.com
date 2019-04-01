import { createGlobalStyle } from 'styled-components';

export const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Sofia Pro';
  src: url('/static/fonts/Sofia-Pro-Regular.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Sofia Pro';
  src: url('/static/fonts/Sofia-Pro-Semibold.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Sofia Pro';
  src: url('/static/fonts/Sofia-Pro-Bold.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: #220871;
  font-family: 'Sofia Pro', Helvetica, Arial, sans-serif;
  color: #F670A0;
}
`;
