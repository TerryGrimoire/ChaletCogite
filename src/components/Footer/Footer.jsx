import React from "react";
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

  const items = avis.map((el) => (
    <div onDragStart={handleDragStart} className="avisGoogle">
      <h5>{el.nom}</h5>
      <p>{el.com.substring(0, 125)}...</p>
      <img src={google} alt="logo Google" />
      <img src={evaluation} alt="cinq étoiles notation" />
    </div>
  ));
  return (
    <footer className="all_footer">
      <div className="footer_avis">
        <h3>Nos clients témoignent</h3>
        <AliceCarousel
          disableDotsControls
          disableButtonsControls
          items={items}
          infinite
          mouseTracking
          responsive={{
            0: {
              items: 1,
              itemsFit: "contain",
            },
            904: {
              items: 4,
              itemsFit: "contain",
            },
          }}
        />
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
