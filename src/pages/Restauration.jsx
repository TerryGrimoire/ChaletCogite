import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import vague from "../assets/separateur.svg";

function Restauration({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [restauration, setRestauration] = useState([]);
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
    setRestauration(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_RESTAURATION)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Restauration </title>
        <link rel="canonical" href={`${helmet.href}/Restauration`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <section className="boutique_produits_section white">
          <h3>Découvrez le menu </h3>
          <p>
            Nos menus varient en fonction des saisons et des différentes
            récoltes de la semaine.
          </p>

          <div className="boutique_produits_container">
            {restauration &&
              restauration.length > 0 &&
              restauration[0] &&
              restauration[0].semaine &&
              restauration
                .filter(
                  (element) =>
                    element.semaine !== "semaine" && element.semaine !== ""
                )
                .map((el) => (
                  <div className="restaurant_menu_container">
                    {el.semaine &&
                      el.semaine.split(";").map((elou) => (
                        <div className="menu">
                          <h5>{elou.split(":")[0]}</h5>
                          <p className="restaurant_menu_eloument">
                            {elou
                              .split(":")[1]
                              .split(",")
                              .map((eloument) => (
                                <ul>
                                  <p>{eloument}</p>{" "}
                                  <img src={vague} alt="separateur" />{" "}
                                </ul>
                              ))}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
          </div>
        </section>
        <section className="boutique_article_main_container white">
          <h3>Manger bien, manger sain</h3>
          <div className="boutique_article_container">
            {restauration
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

export default Restauration;
