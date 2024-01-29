import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  height: 100dvh;
  height: 100vh;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}
`;
