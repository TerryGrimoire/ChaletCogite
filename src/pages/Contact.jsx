import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import tel from "../assets/tel.png";
import mel from "../assets/mel.png";
import loc from "../assets/loc.png";
import infos from "../assets/infos.png";
import gite2 from "../assets/gite2.jpg";
import Hero from "../components/Hero";

function Contact({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Contact </title>
        <link rel="canonical" href={`${helmet.href}/Services`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <Hero number={5} />
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
          <h3>Comment venir au chalet</h3>
          <div>
            <iframe
              src="https://umap.openstreetmap.fr/fr/map/randonnee-a-pied-et-itineraire-4x4-jusquau-chalet-_217458?fbclid=IwZXh0bgNhZW0CMTAAAR28fmt8DMRi5Cv0YncUWtvSnkt2LC9zMvyLSWzNrd30hnE-62ZyyaUAoSs_aem_3BYqySwbacVVXU2R_2Secw#14/-21.1956/55.5050"
              frameBorder="0"
              title="Carte pour venir au Chalet CoGîte"
            />
            <article>
              {" "}
              <p>
                • Randonnée à pied depuis le parking du Dimitile (Lieu dit “Le
                Portail du Dimitile”){" "}
              </p>
              <p>
                • Prendre la piste 4x4 sur 100 m (durée ~ 1 min) puis tourner à
                gauche sur le Sentier Boeuf - La Chapelle jusqu'à la piste 4x4
                (durée ~ 30 min)
              </p>{" "}
              <p>
                • Marcher sur la piste 4x4 sur 1 km (durée ~ 15 min) puis
                prendre à droite sur le Sentier Mal au Ventre jusqu'à la piste
                4x4 (durée ~ 45 min)
              </p>{" "}
              <p>
                • Monter a gauche sur la piste 4x4 pendant 8 minutes depasser la
                chaine pour prendre à droite direction Le Chalet (durée ~ 15
                min){" "}
              </p>{" "}
              <p>
                • Prendre a droite pour descendre direction Le Chalet une
                dernière fois sur la piste 4x4 Attention ça glisse (durée ~ 15
                min). Le chalet se trouve sur votre droite, entrer par le
                portail vert.
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
