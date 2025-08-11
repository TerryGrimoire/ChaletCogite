import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";

function Navbar({ langue }) {
  return (
    <nav className="flex justify-between navbar desktop">
      <Link to="/">
        <img src={logo} alt="logo du Chalet CoGite" className="logo" />
      </Link>
      <Link to="/Chalet">{langue ? "Le Chalet" : "Lo Shalé"}</Link>
      <Link to="/Formules">{langue ? "Formules" : "Formul"}</Link>
      <Link to="/Activites">{langue ? "Activités" : "Zaktivité"}</Link>
      <Link to="/Boutique">{langue ? "Boutique" : "Boutik"}</Link>
      <Link to="/Restauration">{langue ? "Restauration" : "Manzé"}</Link>
      <Link to="/Contact">{langue ? "Contact" : "Kontakt"}</Link>
    </nav>
  );
}

export default Navbar;
