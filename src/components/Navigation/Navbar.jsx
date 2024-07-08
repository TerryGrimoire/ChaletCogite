import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex justify-between navbar desktop">
      <Link to="/">
        <img src={logo} alt="logo du Chalet CoGite" className="logo" />
      </Link>
      <Link to="/Chalet">Le Chalet</Link>
      <Link to="/Formules">formules</Link>
      <Link to="/Activites">Activités</Link>
      <Link to="/Boutique">Boutique</Link>
      <Link to="/Restauration">Restauration</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
