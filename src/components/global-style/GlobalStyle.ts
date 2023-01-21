import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 20px;
    background-color: #000;
    font-family: Verdana, sans-serif;
  }
`;
