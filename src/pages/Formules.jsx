import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import Hero from "../components/Hero";

function Formules({ helmet }) {
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
        <Hero number={1} />
        <section className="all_section formules_main_container white">
          <h3>Des formules adaptées à tous les budgets</h3>
          <p>
            Nous proposons plusieurs formules adapatées à tous les profils et à
            tous les budgets. Avec ou sans repas, dans le gîte, dans la cabane
            ou en camping, chacun peut y trouver son compte.
          </p>
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
