import styled from "styled-components";

export const ImgBackground = styled.div`
  height: 27.5rem;
  width: 18rem;
  background-image: url(${(props: { imgBackground: string }) =>
    props.imgBackground});
  background-position: center;
  border-radius: 2rem;

  section {
    position: absolute;
    bottom: 0;
    height: 14.625rem;
    width: 18rem;
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0.2),
      rgba(255, 0, 0, 0.8)
    );
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 1.5rem;
      text-align: center;
    }

    h3,
    p {
      padding: 0.2rem;
      width: 14rem;

      word-wrap: break-word;
      color: var(--white);
      font-family: "Axiforma Fina", sans-serif;
      line-height: 1rem;
    }

    p {
      margin-top: 0.5rem;
      max-height: 5rem;
      font-size: 0.75rem;
      overflow: auto;
      text-align: start;
    }
    footer {
      position: absolute;
      bottom: 0;
      padding-bottom: 1rem;
      a {
        text-decoration: none;
        color: var(--white);
        font-family: "Axiforma Fina", sans-serif;
        font-size: 1.25rem;
      }
    }
  }
`;
