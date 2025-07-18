import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import Hero from "../components/Hero";

function Formules({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formules, setFormules] = useState([]);
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
    setFormules(json.filter((x) => x.formules !== "formules"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_FORMULES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Formules </title>
        <link rel="canonical" href={`${helmet.href}/formules`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={1} langue={langue} />
        <section className="all_section formules_main_container white">
          <h3>
            {langue
              ? "Différentes formules pour différentes envies"
              : "Shak lanvi na son formul"}
          </h3>
          <p>
            {langue
              ? "Nous proposons plusieurs formules adaptées selon vos envies et votre budget. Une nuit dans le chalet ou dans la cabane, en couple ou en groupe, en formule collaborative ou formule plus classique, vous avez le choix."
              : "Nou propoz bonpé formul adapté solon zot lanvi é zot budjé. In nwit dann shalé oubyin dan nout kabann, an koup ou an group, an formul kolaboratif ou an formul klasik, zot na lo shwa."}
          </p>

          <small>
            <ul>
              <li>
                {langue
                  ? "Tarif enfants à partir de 3 ans, jusqu'à 9 ans 40 €"
                  : "tarif marmay a partir 3 zan ziska 9 an 40 €"}
              </li>
              <li>
                {langue
                  ? "Tarif Bébés séjour offert (0 à 2 ans) (2 bébés par groupe)"
                  : "Tarif bébé ziska 2 an gratwi (2 bébé par group)"}
              </li>
            </ul>
          </small>
          <div className="formules_container">
            {formules &&
              formules.length > 0 &&
              formules.map((element) => (
                <Link to={`/Formules/${element.formules.replaceAll(" ", "_")}`}>
                  <div className="formules_tarifs">
                    <h5>{element.formules}</h5> <p>{element.minimum}</p>
                  </div>
                  <div className="veil" />
                  <img src={element.image} alt={element.formules} />
                </Link>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Formules;
