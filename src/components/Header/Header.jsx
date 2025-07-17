import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu2.png";

function Burger({ langue }) {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex justify-between align-center">
      <button
        type="button"
        onClick={() => setOpenBurger(!openBurger)}
        className="mobile"
      >
        <img src={burger} alt="menu burger" />
      </button>

      {openBurger && <Nav setOpenBurger={setOpenBurger} langue={langue} />}

      <Navbar setOpenBurger={setOpenBurger} langue={langue} />
    </header>
  );
}

export default Burger;
