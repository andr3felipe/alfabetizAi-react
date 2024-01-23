import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  height: 100dvh;
  height: 100vh;
}

body, input,  button, textarea {
  font-family: 'Montserrat', sans-serif;
}
`;
