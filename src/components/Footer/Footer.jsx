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

function Footer({ langue }) {
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
      <div className="footer_partenaires">
        <h3>
          {langue ? "Ils nous ont fait confiance" : "Zot i fé anou konfyans"}
        </h3>
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
      <div className="footer_avis">
        <h3>
          {langue ? "Nos clients témoignent" : "Kosa nout kliyan i pans de nou"}
        </h3>
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          infinite
          items={items}
          mouseTracking
          responsive={responsive}
        />
      </div>

      <section>
        <div className="main_footer">
          <div>
            <h5>
              {langue
                ? "Retrouvez nous sur les réseaux sociaux"
                : "Artrouv anou su rézo sosyo"}
            </h5>
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
              {langue
                ? "Ce site a été financé par l’Union Européenne dans le cadre du programme FEDER-FSE+ Réunion dont l’Autorité de gestion est la Région Réunion. L’Europe s’engage à La Réunion avec le fonds FEDER"
                : "Sit la la été finansé par Lunion Européinn ek son program FEDER-FSE+ Rényon é son lotorité de jestyon sé La Réjyon Rényon. Leurop i angaj ali La Rényon sanm son fon FEDER. La Fondasyon de France la osi partisip dan le finansman. "}
            </p>
            <div>
              <img src={region} alt="logo Région Réunion" />
              <img src={ue} alt="logo Région Réunion" />
            </div>
          </div>
        </div>
        <div>
          <p>
            {langue
              ? "Design, conception et traduction du site internet par le "
              : "Dizaynn, konsepsyon é traduksyon lo sit internet par lo "}
            <a href="https://grimoire-numerique.re">Grimoire Numérique</a>
          </p>
          <Link to="/mentions">
            {langue ? "Mentions Légales" : "Mansyon légal"}
          </Link>
          <Link to="/mentions">
            {langue
              ? "Politique de confidentialité"
              : "Politik konfidansyalité"}
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
