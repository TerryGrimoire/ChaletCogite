import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between navbar desktop">
      <Link to="/">
        <img src={logo} alt="logo du Chalet CoGite" className="logo" />
      </Link>
      <Link to="/Services">Le Chalet</Link>
      <Link to="/Tarifs">formules</Link>
      <Link to="/Tarifs">Activités</Link>
      <Link to="/Tarifs">Boutique</Link>
      <Link to="/Tarifs">Restauration</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
