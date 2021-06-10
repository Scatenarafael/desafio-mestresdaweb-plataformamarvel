import styled from "styled-components";

export const NavContainer = styled.nav`
  @media (max-width: 1200px) {
    padding:0;
    height: 100vh;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-left: 1px solid var(--red);
    img {
      width: 7rem;
      margin-bottom: 5rem;
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      li {
        width: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        a {
          padding: 0;
          margin: 0;
          width: 100%;
        }
        img {
          display: none;
        }
      }
    }
  }
  display: flex;
  height: 8rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--red);
  padding: 2rem 5rem 0.2rem 3rem;

  img {
    width: 7.62rem;
  }

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      list-style: none;
      padding: 0rem 5rem;

      &:last-child {
        padding-right: 0;
      }

      img {
        width: 3.4375rem;
      }
      a {
        text-decoration: none;
        color: var(--font-color);
        font-family: "Axiforma", sans-serif;
        font-size: 1.875rem;
        font-weight: bold;

        &.active {
          color: var(--white);
        }
      }
    }
  }
`;
