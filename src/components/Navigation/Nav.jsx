import React from "react";
import { Link } from "react-router-dom";
import croix from "../../assets/fermer.png";

function Nav({ setOpenBurger }) {
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
          Accueil
        </button>
      </Link>
      <Link to="/Chalet">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Le Chalet
        </button>
      </Link>
      <Link to="/Formules">
        <button type="button" onClick={() => setOpenBurger(false)}>
          formules
        </button>
      </Link>
      <Link to="/Activites">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Activités
        </button>
      </Link>
      <Link to="/Boutique">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Boutique
        </button>
      </Link>
      <Link to="/Restauration">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Restauration
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
