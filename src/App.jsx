import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Chalet from "./pages/Chalet";
import Activites from "./pages/Activites";
import Formules from "./pages/Formules";
import Formule from "./pages/Formule";
import Restauration from "./pages/Restauration";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";
import terre from "./assets/globe.png";

import "./App.css";

function App() {
  const helmet = {
    title: "Le Chalet CoGîte",
    href: "https://chaletcogite.re",
  };

  const [langue, setLangue] = useState(true);

  return (
    <BrowserRouter>
      <Header helmet={helmet} langue={langue} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} langue={langue} />} />
        <Route
          path="/Chalet"
          element={<Chalet helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Formules"
          element={<Formules helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Formules/:id"
          element={<Formule helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Activites"
          element={<Activites helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Boutique"
          element={<Boutique helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Restauration"
          element={<Restauration helmet={helmet} langue={langue} />}
        />
        <Route
          path="/Contact"
          element={<Contact helmet={helmet} langue={langue} />}
        />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <button
        className="LangueButton"
        type="button"
        onClick={() => setLangue(!langue)}
      >
        <img src={terre} alt="icone planete terre" />{" "}
        <p>{!langue ? "FR" : "KR"}</p>
      </button>
      <Footer langue={langue} />
    </BrowserRouter>
  );
}

export default App;
