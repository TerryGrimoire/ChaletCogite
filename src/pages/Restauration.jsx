import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import papa from "papaparse";

import Hero from "../components/Hero";

import vague from "../assets/separateur.svg";

function Restauration({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [restauration, setRestauration] = useState([]);
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

    setRestauration(json);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_RESTAURATION)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, [langue]); // Recharger les données si langue change

  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Restauration </title>
        <link rel="canonical" href={`${helmet.href}/Restauration`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={4} langue={langue} />
        <section className="boutique_produits_section white">
          <h3>{langue ? "Au menu" : "Kosa néna pou manjé"}</h3>
          <p>
            {langue
              ? "Une cuisine généreuse au feu de bois, mélange de cuisine locale, familiale et de cuisine du monde. Pas un carry sans son rougail et son brèdes lakour. C’est ce que vous mijote les marmites du Chalet Cogite"
              : "In kwizinn jénérez o fé d-bwa, mélanz kwizinn lokal, famiyal é kwizinn lo monn. Pa in kari san son rogay é son brèd lakour. Sé sa lo Shalé Kojit i fé pou zot."}
          </p>

          <div className="resto_container">
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
                    {el.semaine && (
                      <div className="menu">
                        <h5>{el.semaine.split(":")[0]}</h5>
                        <p className="restaurant_menu_eloument">
                          {el.semaine
                            .split(":")[1]
                            .split(";")
                            .map((eloument) => (
                              <ul>
                                <p>{eloument}</p>{" "}
                                <img src={vague} alt="separateur" />{" "}
                              </ul>
                            ))}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
          </div>
        </section>
        <section className="boutique_article_main_container white">
          <h3>
            {langue
              ? "Manger bien, manger sain"
              : "Alon manz bon nafer pou nout kor"}
          </h3>
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
