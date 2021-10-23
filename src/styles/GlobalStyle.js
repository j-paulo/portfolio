import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #fdfcfb;
}

html {
  scroll-behavior: smooth;
  background-color: #22211f;
}

.text-center { text-align: center; }

`;

export default GlobalStyle;
