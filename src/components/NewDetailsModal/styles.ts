import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  .listSide {
    width: calc(100%-18rem);
    max-width: 23.5rem;
    overflow: auto;
    margin-bottom: 1rem;
    padding: 1rem 2rem 2rem 2rem;

    ul {
      list-style: none;
    }
  }

  .imageSide {
    border-radius: 2rem;
    width: 18rem;
    background-image: url(${(props: { bgImage: string }) => props.bgImage});
    background-size: cover;
    background-repeat: space;
    background-position: center;

    button {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }
  }
`;
