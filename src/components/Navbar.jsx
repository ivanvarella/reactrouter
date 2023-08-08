// 2- link with React Router
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        //className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        //className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
