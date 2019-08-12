import { createGlobalStyle } from 'styled-components';
import { theme } from '../theme.js';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Prata');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  body {
    font-family: 'Open Sans', sans-serif;
    background: ${theme.mainBg};
    color: ${theme.text};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Prata';
  }
  

  *, *:after, *:before {
    box-sizing: border-box;
    outline: none;
  }

  a {
    color: currentColor;
  }
`;

export default GlobalStyle;
