import React, { useEffect, useState } from "react";
import papa from "papaparse";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import avis from "../../data/avisGoogle";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import region from "../../assets/region.png";
import ue from "../../assets/ue.png";
import evaluation from "../../assets/evaluation.png";
import google from "../../assets/google.png";

function Footer() {
  const handleDragStart = (e) => e.preventDefault();
  const [partenaires, setPartenaires] = useState([]);

  const items = avis.map((el) => (
    <article onDragStart={handleDragStart} className="avisGoogle">
      <h5>{el.nom}</h5>
      <p>{el.com.substring(0, 125)}...</p>
      <img src={google} alt="logo Google" />
      <img src={evaluation} alt="cinq étoiles notation" />
    </article>
  ));

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };

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
    setPartenaires(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_PARTENAIRES)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);
  return (
    <footer className="all_footer">
      <div className="footer_avis">
        <h3>Nos clients témoignent</h3>
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          infinite
          items={items}
          mouseTracking
          responsive={responsive}
        />
      </div>
      <div className="footer_partenaires">
        <h3>Ils nous font confiance</h3>
        <div>
          {partenaires &&
            partenaires.length > 0 &&
            partenaires
              .filter((el) => el.nom !== "" && el.nom !== "nom")
              .map((el) => (
                <article onDragStart={handleDragStart} className="avisGoogle">
                  <img src={el.logo} alt={`logo ${el.nom}`} />
                </article>
              ))}
        </div>
      </div>

      <section>
        <div className="main_footer">
          <div>
            <h5>Retrouvez nous sur les réseaux sociaux</h5>
            <div className="social">
              <a href="/">
                <img src={facebook} alt="logo Facebook" />
              </a>
              <a href="/">
                <img src={instagram} alt="logo Instagram" />
              </a>
              <a href="/">
                <img src={youtube} alt="logo youtube" />
              </a>
            </div>
          </div>
          <div>
            <p>
              Ce site a été financé par l’Union Européenne dans le cadre du
              programme FEDER-FSE+ Réunion dont l’Autorité de gestion est la
              Région Réunion. L’Europe s’engage à La Réunion avec le fonds FEDER{" "}
            </p>
            <div>
              <img src={region} alt="logo Région Réunion" />
              <img src={ue} alt="logo Région Réunion" />
            </div>
          </div>
        </div>
        <div>
          <p>
            Design et conception du site internet par le{" "}
            <a href="https://grimoire-numerique.re">Grimoire Numérique</a>
          </p>
          <Link to="/mentions">Mentions Légales</Link>
          <Link to="/mentions">Politique de confidentialité</Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
