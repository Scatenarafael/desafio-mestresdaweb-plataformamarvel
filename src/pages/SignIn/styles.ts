import styled from "styled-components";

export const SignInPageContainer = styled.div`
  display: flex;
`;

export const FormContainer = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    width: 237px;
  }

  .title {
    h2 {
      color: var(--red);
    }
    p {
      font-size: 1.5rem;
    }
  }

  form {
    width: 24rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input[type="text"],
    input[type="password"] {
      height: 4.6rem;
      border-radius: 3rem;
      &::-webkit-input-placeholder {
        padding-left: 1rem;
        color: var(--placeholder-color);
      }
    }
  }
  span {
    margin-left: 0.2rem;
  }
  .user-choices {
    font-size: 0.9375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--font-color);
    a {
      text-decoration: underline;
      text-decoration-color: red;
      color: var(--font-color);
    }
  }
  button {
    font-size: 1.75rem;
    background-color: var(--red);
    height: 4rem;
    border: none;
    border-radius: 3rem;
    a{
      text-decoration: none;
      color: var(--white);
    }
  }
  p {
    font-size: 1rem;
    a {
      color: var(--red);
    }
  }
`;

export const ImgContainer = styled.div`
  width: calc(100% - 50vw);
  height: 100vh;
  overflow: hidden;

  img {
    width: 110%;
    height: 110%;
    overflow: hidden;
    object-fit:cover ;
    -webkit-mask-image: linear-gradient(to right, transparent 2%, black);
  }
`;
