import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu.png";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile no_button"
      >
        <img
          src={burger}
          alt="menu de navigation sur le site internet - trois lignes de navigation"
          className="burger"
        />
      </button>

      {openBurger && <Nav setOpenBurger={setOpenBurger} />}

      <Navbar setOpenBurger={setOpenBurger} />
    </header>
  );
}

export default Burger;
