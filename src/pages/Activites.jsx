import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import Hero from "../components/Hero";

import euro from "../assets/euro.png";

function Activites({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activite, setActivite] = useState([]);
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
    setActivite(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_ACTIVITES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Activites </title>
        <link rel="canonical" href={`${helmet.href}/Activites`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={2} />
        {activite && activite.length > 0 && activite[0].evenement ? (
          <section className="white agenda_main_container">
            <h3>L'agenda du mois</h3>
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
          <h3>Autour du Chalet Cogîte</h3>
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

export default Activites;
