import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import Hero from "../components/Hero";

function Boutique({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [boutique, setBoutique] = useState([]);
  const prepareData = (data2) => {
    const headers = data2[1];
    const dataRows = data2.slice(1);

    // Choix des colonnes selon la langue
    const selectedIndexes = langue
      ? [0, 1, 2, 3, 4, 5, 6] // Colonnes A à G pour le français
      : Array.from({ length: headers.length - 8 }, (_, i) => i + 8); // Colonnes I à fin pour le créole

    const selectedHeaders = selectedIndexes.map((i) => headers[i]);

    const json = dataRows.map((line) => {
      const obj = {};
      selectedIndexes.forEach((i, j) => {
        obj[selectedHeaders[j]] = line[i];
      });
      return obj;
    });

    setBoutique(json);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_BOUTIQUE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, [langue]); // Recharger les données si langue change

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Boutique </title>
        <link rel="canonical" href={`${helmet.href}/Boutique`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={3} langue={langue} />
        <section className="boutique_produits_section white">
          <h3>
            {langue ? "Découvrez nos produits" : "Nout bann prodwi lakour"}
          </h3>
          <p>
            {langue
              ? "Nos produits sont disponibles sur commande, en quantité limitée. Sur place ou en point relais dans les bas."
              : "Nout bann prodwi lé disponib su komann, na pwin bonpé, zot pe trap sur plas ou byin nou pe trouv anou dan lé ba."}
          </p>
          <div className="boutique_produits_container">
            {boutique &&
              boutique.length > 1 &&
              boutique
                .filter((element) => element.prix !== "prix")
                .map((el) => (
                  <div className="boutique_produit">
                    <img src={el.photo} alt={el.produit} />
                    <h5>{el.produit && el.produit.toUpperCase()}</h5>
                    <p>{el.prix} €</p>
                    <small
                      className={
                        el.stock && el.stock.includes("sto") ? "blue" : "marron"
                      }
                    >
                      {el.stock}
                    </small>
                  </div>
                ))}
          </div>
        </section>
        <section className="boutique_article_main_container white">
          <h3>{langue ? "A propos de notre boutique" : "Boutik"}</h3>
          <div className="boutique_article_container">
            {boutique
              .filter(
                (element) => element.prix !== "prix" && element.texte !== ""
              )
              .map((el) => (
                <div>
                  <img src={el.image} alt={el.titre} />
                  <article>
                    <h4>{el.titre && el.titre.toUpperCase()}</h4>
                    <p>{el.texte}</p>
                  </article>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Boutique;
