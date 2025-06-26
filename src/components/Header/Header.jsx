import React, { useState } from "react";
import Nav from "../Navigation/Nav";
import Navbar from "../Navigation/Navbar";
import burger from "../../assets/menu2.png";

function Burger() {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <header className="flex justify-between align-center">
      <button type="button" onClick={() => setOpenBurger(!openBurger)} className="mobile">
        <img src={burger} alt="" />
      </button>

      {openBurger && <Nav setOpenBurger={setOpenBurger} />}

      <Navbar setOpenBurger={setOpenBurger} />
    </header>
  );
}

export default Burger;
