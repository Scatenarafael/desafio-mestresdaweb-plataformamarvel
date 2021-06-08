import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #000000;
    --red: #FF0000;
    --font-color: #84848D;
    --placeholder-color: #d1d1d1d6;
    --white: #FFFFFF;
  }

  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    @media (max-width:1080px){
      font-size: 93.75%;
    }
    @media (max-width:720px){
      font-size: 87.5%;
    }
  }
  body{
    background: var(--background);
    color: var(--font-color);
  }

  body, input, textarea, button{
    font-family: 'Axiforma', sans-serif;
    font-weight: 400;
  }

  h1, strong{
    font-size: 3rem;
    font-weight: 700;
  }

  h2, h3, h4, h5, h6 {
    font-size: 2rem;
  }

  button{ 
    cursor: pointer;
  }

  `;
