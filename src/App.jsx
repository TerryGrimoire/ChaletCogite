import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Chalet from "./pages/Chalet";
import Activites from "./pages/Activites";
import Formules from "./pages/Formules";
import Restauration from "./pages/Restauration";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mentions";

import "./App.css";

function App() {
  const helmet = {
    title: "Le Chalet CoGîte",
    href: "https://chaletcogite.re",
  };
  return (
    <BrowserRouter>
      <Header helmet={helmet} />
      <Routes>
        <Route path="/" element={<Home helmet={helmet} />} />
        <Route path="/Chalet" element={<Chalet helmet={helmet} />} />
        <Route path="/Formules" element={<Formules helmet={helmet} />} />
        <Route path="/Activites" element={<Activites helmet={helmet} />} />
        <Route path="/Boutique" element={<Boutique helmet={helmet} />} />
        <Route
          path="/Restauration"
          element={<Restauration helmet={helmet} />}
        />
        <Route path="/Contact" element={<Contact helmet={helmet} />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
