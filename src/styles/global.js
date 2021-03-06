import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  html, body, #root{
    min-height: 100%;
    font-family: 'Roboto', sans-serif;

  }

  body{
    background: #000014;
    -webkit-font-smoothing: antialiased;
    
  }

  body, input, button{
    color: #000014;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;

  }

  button{
    cursor: pointer;
  }
`;
