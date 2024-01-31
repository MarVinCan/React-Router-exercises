import { NavLink } from "react-router-dom";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container nav-bar">
        <div className="left-bar">
          <Link to="/">
            <h1 className="site-name">MeuSite</h1>
          </Link>
        </div>
        <nav className="right-bar">
          <NavLink
            className={({ isActive }) =>
              isActive ? "link-actv itens-navbar" : "itens-navbar"
            }
            to="/home"
          >
            Início
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-actv itens-navbar" : "itens-navbar"
            }
            to="promotion"
          >
            Promoção
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "link-actv itens-navbar" : "itens-navbar"
            }
            to="subscription"
          >
            Participar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
