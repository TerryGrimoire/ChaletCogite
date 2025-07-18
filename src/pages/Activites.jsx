import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import Hero from "../components/Hero";

import euro from "../assets/euro.png";

function Activites({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activite, setActivite] = useState([]);
  const prepareData = (data2) => {
    const headers = data2[1];
    const dataRows = data2.slice(1);

    // Choix des colonnes selon la langue
    const selectedIndexes = langue
      ? [0, 1, 2, 3, 4, 5, 6, 7] // Colonnes A à G pour le français
      : Array.from({ length: headers.length - 8 }, (_, i) => i + 8); // Colonnes I à fin pour le créole

    const selectedHeaders = selectedIndexes.map((i) => headers[i]);

    const json = dataRows.map((line) => {
      const obj = {};
      selectedIndexes.forEach((i, j) => {
        obj[selectedHeaders[j]] = line[i];
      });
      return obj;
    });

    setActivite(json);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_ACTIVITES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, [langue]); // Recharger les données si langue change

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Activites </title>
        <link rel="canonical" href={`${helmet.href}/Activites`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={2} langue={langue} />
        {activite && activite.length > 0 && activite[0].evenement ? (
          <section className="white agenda_main_container">
            <h3>{langue ? "L'agenda du mois" : "Lazinda lo mwa"}</h3>
            <div className="agenda_container">
              {activite
                .filter(
                  (el) => el.evenement !== "evenement" && el.evenement !== ""
                )
                .map((el) => (
                  <Link to="/Contact" className="agenda">
                    <img src={el.affiche} alt="" />
                    <ul>
                      <li>
                        <h5>{el.evenement}</h5>{" "}
                        <p className="date">{el.date}</p>{" "}
                        <div className="prix">
                          <p>{el.prix}</p>
                          <img src={euro} alt="euro" />
                        </div>
                      </li>

                      <li className="details">
                        {el.details &&
                          el.details.length > 0 &&
                          el.details.split(";").map((elo) => <p>{elo}</p>)}
                      </li>
                    </ul>
                  </Link>
                ))}
            </div>
          </section>
        ) : null}

        <section className="boutique_article_main_container white">
          <h3>
            {langue
              ? "Les activités autour du Chalet Cogite"
              : "Kosa néna pou fé otour lo shalé"}
          </h3>
          <div className="boutique_article_container">
            {activite
              .filter(
                (element) => element.titre !== "titre" && element.texte !== ""
              )
              .map((el) => (
                <div>
                  <img src={el.image} alt={el.titre} />
                  <article>
                    <h4>{el.titre.toUpperCase()}</h4>
                    {el.texte.split(";").map((elementaire) => (
                      <p>{elementaire}</p>
                    ))}
                  </article>
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Activites;
