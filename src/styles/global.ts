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
      font-size: 87.5%;
    }
    @media (max-width:720px){
      font-size: 75%;
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

  h3, h4, h5, h6 {
    font-size: 1.25rem;
  }

  button{ 
    cursor: pointer;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .react-modal-content{
    padding:0;
    margin-left: 8rem;
    margin-bottom: 5rem;
    width: 100%;
    max-width: 41.2rem;
    height: 27.5rem;
    border-radius: 2rem;
    background: linear-gradient(45deg, rgba(0, 0, 0,0.85), var(--red));
    position: relative;
  }

  `;
