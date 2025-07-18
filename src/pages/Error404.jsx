import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error404">
      <h1>Erreur 404</h1> <p>Page non trouvée</p>{" "}
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Error404;
