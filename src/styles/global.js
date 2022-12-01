import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #121214;
  }
`;
