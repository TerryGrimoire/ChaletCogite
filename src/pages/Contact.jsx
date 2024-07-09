import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import tel from "../assets/tel.png";
import mel from "../assets/mel.png";
import loc from "../assets/loc.png";
import infos from "../assets/infos.png";
import gite2 from "../assets/gite2.jpg";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main contact_page">
        <section className="white">
          <h3>Nous contacter</h3>
          <div className="contact_infos">
            <img src={gite2} alt="gite dans la montagne" />
            <ul>
              <li>
                <img src={loc} alt="icone pour montrer la localisation" />
                <a
                  href="https://maps.app.goo.gl/yAZBdEDfzkSMecFt9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>
                    Dimitile, 51 Piste 4x4 Jean Dubard, Entre-Deux 97414, La
                    Réunion
                  </p>
                </a>
              </li>
              <li>
                <img
                  src={infos}
                  alt="icone d'une maison pour donner des informations sur le chalet"
                />
                <p>Ouvert tous les jours de la semaine et le weekend</p>
              </li>
              <li>
                <img src={tel} alt="icone d'un téléphone" />
                <a href="tel:+262693949992">
                  <p>0693949992</p>
                </a>
              </li>
              <li>
                <img src={mel} alt="icone d'une enveloppe" />
                <a href="mailto:chalet.cogite@protonmail.com">
                  <p>chalet.cogite@protonmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="home_trouver white">
          <h3>Venir au chalet</h3>
          <p>
            Le chalet Cogite se trouve en terre de marronage, en plein coeur de
            l'empire marron. Ainsi, une randonnée est néccessaire afin de vous y
            rendre.
          </p>

          <iframe
            src="//umap.openstreetmap.fr/fr/map/randonnee-a-pied-et-itineraire-4x4-jusquau-chalet-_217458?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
            title="coigte"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
    </div>
  );
}

export default Contact;
