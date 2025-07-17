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
    // j correspond aux lignes de A à ZZZ sur fichier Excel
    // index
    // line correspond à
    // index correspond à
    // key correspond à

    let obj = {};
    const json = data2.map((line) => {
      data2[1].forEach((key, j) => {
        obj = { ...obj, [key]: line[j] };
      });

      return obj;
    });

    json.shift();
    setBoutique(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_BOUTIQUE)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

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
          <h3>Découvrez nos produits</h3>
          <p>
            Nos produits sont disponibles sur commande, en quantité limitée. Sur
            place ou en point relais dans les bas.
          </p>
          <div className="boutique_produits_container">
            {boutique &&
              boutique.length > 1 &&
              boutique
                .filter((element) => element.prix !== "prix")
                .map((el) => (
                  <div className="boutique_produit">
                    <img src={el.photo} alt={el.produit} />
                    <h5>{el.produit.toUpperCase()}</h5>
                    <p>{el.prix} €</p>
                    <small
                      className={el.stock.includes("stock") ? "blue" : "marron"}
                    >
                      {el.stock}
                    </small>
                  </div>
                ))}
          </div>
        </section>
        <section className="boutique_article_main_container white">
          <h3>A propos de notre boutique </h3>
          <div className="boutique_article_container">
            {boutique
              .filter(
                (element) => element.prix !== "prix" && element.texte !== ""
              )
              .map((el) => (
                <div>
                  <img src={el.image} alt={el.titre} />
                  <article>
                    <h4>{el.titre.toUpperCase()}</h4>
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
