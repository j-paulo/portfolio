import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

.text-center { text-align: center; }

`;

export default GlobalStyle;
