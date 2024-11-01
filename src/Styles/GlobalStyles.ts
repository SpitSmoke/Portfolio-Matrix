import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
background-color: #000;
color: #00ff00;
font-family: 'Roboto Mono','Courier New', Courier, monospace;
overflow-x: hidden;
}
`;
export default GlobalStyle;