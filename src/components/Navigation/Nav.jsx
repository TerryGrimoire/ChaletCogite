import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger, langue }) {
  return (
    <nav className="flex-col openBurger justify-between mobile">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Accueil" : "Akèy"}
        </button>
      </Link>
      <Link to="/Chalet">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Le Chalet" : "Lo Shalé"}
        </button>
      </Link>
      <Link to="/Formules">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Formules" : "Formul"}
        </button>
      </Link>
      <Link to="/Activites">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Activités" : "Zaktivité"}
        </button>
      </Link>
      <Link to="/Boutique">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Boutique" : "Boutik"}
        </button>
      </Link>
      <Link to="/Restauration">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Restauration" : "Manzé"}
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          {langue ? "Contact" : "Kontakt"}
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
