import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import monde from "../assets/langue.png";
import acco from "../assets/acco.png";
import carte from "../assets/carte2.png";
import rest from "../assets/rest.png";
import confort from "../assets/confort.png";
import bain from "../assets/bain.png";
import resto from "../assets/resto2.png";

function Formule({ helmet, langue }) {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formules, setFormules] = useState([]);
  const prepareData = (data2) => {
    const headers = data2[1];
    const dataRows = data2.slice(1);

    // Choix des colonnes selon la langue
    const selectedIndexes = langue
      ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // Colonnes A à G pour le français
      : Array.from({ length: headers.length - 14 }, (_, i) => i + 14); // Colonnes I à fin pour le créole

    const selectedHeaders = selectedIndexes.map((i) => headers[i]);

    const json = dataRows.map((line) => {
      const obj = {};
      selectedIndexes.forEach((i, j) => {
        obj[selectedHeaders[j]] = line[i];
      });
      return obj;
    });

    setFormules(json);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_FORMULES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, [langue]); // Recharger les données si langue change

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
          {langue
            ? "Plus de détails sur la formule "
            : "Plis zinformasyon su lo formul "}
          <span>{formule && formule.formules}</span>
        </h3>
        <article>
          {formule && formule.descriptif.split(";").map((el) => <p>{el}</p>)}
        </article>
        <div className="formulebyId_tarifs">
          <h4>{langue ? "Prix par personne" : "Pri par personn"}</h4>
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
                <h5>{langue ? "Restauration" : "Restorasyon"}</h5>
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
                <img src={bain} alt="baignoire" />{" "}
                <h5>{langue ? "Salle de bain" : "Sal do bin"}</h5>
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
                <img src={confort} alt="télévision" />{" "}
                <h5>{langue ? "Confort" : "Konfor"}</h5>
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
                <img src={acco} alt="lit" />{" "}
                <h5>{langue ? "Équipements" : "Zékipman"}</h5>
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
                <img src={rest} alt="cadenas" />{" "}
                <h5>{langue ? "Restrictions" : "Réstriksyon"}</h5>
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
                <h5>{langue ? "Moyens de paiement" : "Mwayin péman"}</h5>
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
                <img src={monde} alt="langues parlées" />{" "}
                <h5>{langue ? "Langues parlées" : "Langkozé"}</h5>
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
