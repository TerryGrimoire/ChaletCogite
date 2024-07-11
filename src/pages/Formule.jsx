import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import langue from "../assets/langue.png";
import acco from "../assets/acco.png";
import carte from "../assets/carte2.png";
import rest from "../assets/rest.png";
import confort from "../assets/confort.png";
import bain from "../assets/bain.png";
import resto from "../assets/resto2.png";

function Formule({ helmet }) {
  const { id } = useParams();

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

  const formule = formules.filter(
    (el) => el.formules.replaceAll(" ", "_") === id
  )[0];

  return (
    <div className="formulebyId_main_container">
      <Helmet>
        <title> {helmet.title} | Formule </title>
        <link rel="canonical" href={`${helmet.href}/formule`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <div className="hero_container">
        {formule && (
          <div className="hero">
            <img src={formule.image} alt={formule.formules} />
            <h1>{formule.formules}</h1>
            <div className="veil" />
          </div>
        )}
      </div>
      <main className="all_main white formulebyId_container">
        <h3>
          Plus de détails sur la formule{" "}
          <span>{formule && formule.formules}</span>
        </h3>
        <article>
          {formule && formule.descriptif.split(";").map((el) => <p>{el}</p>)}
        </article>
        <div className="formulebyId_tarifs">
          <h4>Prix par personne</h4>
          {formule &&
            formule.tarifs &&
            formule.tarifs.split(";").map((el) => (
              <p>
                • {"  "}
                {el}
              </p>
            ))}
        </div>

        <div className="formulebyId_carousel_container">
          <Carousel
            infiniteLoop
            dynamicHeight
            autoFocus
            emulateTouch
            showStatus={false}
          >
            {formule &&
              formule.galerie &&
              formule.galerie.split(";").map((el) => (
                <div className="carousel_img_container">
                  <img
                    src={el}
                    alt={formule.formules}
                    className="carousel_img"
                  />
                </div>
              ))}
          </Carousel>
        </div>

        <article className="details_formulebyId">
          {formule && formule.nourriture && (
            <div>
              <div>
                <img src={resto} alt="fourchette et couteau" />{" "}
                <h5>Restauration</h5>
              </div>{" "}
              <ul>
                {formule.nourriture.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.hygiene && (
            <div>
              <div>
                <img src={bain} alt="baignoire" /> <h5>Salle de bain</h5>
              </div>{" "}
              <ul>
                {formule.hygiene.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.confort && (
            <div>
              <div>
                <img src={confort} alt="télévision" /> <h5>Confort</h5>
              </div>{" "}
              <ul>
                {formule.confort.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.accomodation && (
            <div>
              <div>
                <img src={acco} alt="lit" /> <h5>Équipements</h5>
              </div>{" "}
              <ul>
                {formule.accomodation.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.restrictions && (
            <div>
              <div>
                <img src={rest} alt="cadenas" /> <h5>Restrictions</h5>
              </div>{" "}
              <ul>
                {formule.restrictions.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.paiements && (
            <div>
              <div>
                <img src={carte} alt="carte bancaire" />{" "}
                <h5>Moyens de paiement</h5>
              </div>{" "}
              <ul>
                {formule.paiements.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formule && formule.langues && (
            <div>
              <div>
                <img src={langue} alt="langues parlées" />{" "}
                <h5>Langues parlées</h5>
              </div>{" "}
              <ul>
                {formule.langues.split(";").map((element) => (
                  <li>
                    🗸{"  "}
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </main>
    </div>
  );
}

export default Formule;
