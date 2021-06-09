import { Link, useLocation } from "react-router-dom";
import { NavContainer } from "./styles";

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <img src="/MARVEL-logo.svg" alt="logoMARVEL" />
      <ul>
        <li>
          <Link
            to="/characters"
            className={pathname === "/characters" ? "active" : ""}
          >
            Personagens
          </Link>
        </li>
        <li>
          <Link to="/movies" className={pathname === "/movies" ? "active" : ""}>
            Filmes
          </Link>
        </li>
        <li>
          <Link to="/hqs" className={pathname === "/hqs" ? "active" : ""}>
            HQs
          </Link>
        </li>

        <li>
          <img src="/user.svg" alt="user" />
          <Link to="/signin">Sair</Link>
        </li>
      </ul>
    </NavContainer>
  );
}
