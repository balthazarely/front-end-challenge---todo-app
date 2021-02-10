import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --background-color: white;
    --page-background-color: #eaeaea;
    --dark-accent-color: #f1f1f1;
    --dark-accent-color-lighter: #b7b7b7;
    --accent-color: turquoise;
    --text-color: #3d3d3d;
    --font-family: 'Josefin Sans';
  }
  [data-theme="dark"] {
    --background-color: #124a63;
    --page-background-color: #181824;
    --dark-accent-color: #206788;
    --dark-accent-color-lighter: #2f7fa3;
    --accent-color: turquoise;
    --text-color: #e7e7e7;
    --font-family: 'Josefin Sans';
    --bg-night: 'night.jpg'
  }


  * {
    font-family: var(--font-family);
    transition: 0.1s all;
  }
  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background: var(--page-background-color);
  
  }
`;

export default GlobalStyle;
