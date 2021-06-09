import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  height: 8rem;
  justify-content: space-between;
  border-bottom: 1px solid var(--red);
  padding: 2rem 10rem 0.2rem 3rem;
  
  /* padding-left: 3rem; */
  /* padding-right: 10rem; */

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
