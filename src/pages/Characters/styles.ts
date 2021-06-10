import styled from "styled-components";

export const HomeContainer = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    overflow: hidden;
    padding-bottom: 3rem;

    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1) 45%,
        rgba(0, 0, 0, 0.8)
      ),
      url("/background-image.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right;
  }
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-bottom: 3rem;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 45%,
      rgba(0, 0, 0, 0.8)
    ),
    url("/background-image.svg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right;
`;
