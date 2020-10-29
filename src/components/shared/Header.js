import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">Productos </Link>
        <Link to="/info">
          <li>Acerca de</li>
        </Link>
        <Link to="/carrito">
          <li>Carrito</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
