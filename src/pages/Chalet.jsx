import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import logo from "../assets/logo.png";
import chalet from "../assets/chalet11.jpg";
import gite from "../assets/gite.jpg";
import gite2 from "../assets/gite9.jpg";
import gite3 from "../assets/gite8.jpg";
import heure from "../assets/lhorloge.svg";
import euro from "../assets/carte.svg";
import infos from "../assets/lune.svg";
import animal from "../assets/patte.svg";
import pol from "../assets/pol.svg";

function Chalet({ helmet, langue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Chalet </title>
        <link rel="canonical" href={`${helmet.href}/Chalet`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={0} langue={langue} />
        <section className="chalet_page_intro white">
          <h3>Qui sommes nous ?</h3>
          <p>
            Bienvenue au Chalet CoGîte, chez nous, Coralie et Quentin Josseron
            au Dimitile. Non pas mari et femme nous sommes jumeaux originaires
            du Tampon. On a grandi dans la tradition créole, où l'accueil et le
            partage sont au cœur de notre culture. Régalés par les bons carris
            de mamie et les moments passés en famille, on a voulu recréer cet
            esprit, en mêlant amour pour la nature, simplicité et authenticité.
            Persuadés que les réponses aux défis écologiques d’aujourd’hui
            passent par la sobriété, notre gîte reflète un engagement pour un
            tourisme plus respectueux de l’environnement.
          </p>
          <p>
            Le Chalet CoGite, c’est la garantie d’un séjour paisible et
            ressourçant, dans un cadre naturel exceptionnel, tout en minimisant
            l'impact sur l’environnement alentour.
          </p>
          <p>
            Que vous veniez pour vous reconnecter à la nature, profiter d’un
            moment convivial, déguster de bons petits mangés ou simplement vous
            offrir un moment de calme, notre petit cocon est l'option idéale.
          </p>
        </section>

        <section className="chalet_page_middle white">
          <div className="chalet_middle_top">
            <div className="duo_photo">
              <img src={gite} alt="" />
              <img src={gite2} alt="" />
            </div>
            <img src={chalet} alt="" />
          </div>
        </section>
        <section className="chalet_page_top">
          <img src={logo} alt="" />
          <article>
            <p>
              Que vous veniez pour vous reconnecter à la nature, déguster de
              bons petits plats ou simplement vous offrir un moment de calme,
              Coralie et Quentin vous accueillent avec plaisir au Chalet CoGîte.
              Ici, simplicité rime avec convivialité, confort avec authenticité.
            </p>
          </article>
        </section>
        <section className="chalet_regles white">
          <h3>Infos pratiques</h3>
          <div className="regles">
            <img src={gite3} alt="" />
            <div className="regles_container">
              <ul>
                <li>
                  <img src={heure} alt="" />
                  <p>Arrivée et départ : arrivée 15h et départ 11h</p>
                </li>
                <li>
                  <img src={infos} alt="" />
                  <p>Prix : à partir de 60€ la nuit</p>
                </li>

                <li>
                  <img src={euro} alt="" />
                  <p>Paiements acceptés : espèces, virements et chèques</p>
                </li>
                <li>
                  <img src={animal} alt="" />
                  <p> Les animaux ne sont pas acceptés</p>
                </li>
                <a href="/">
                  <img src={pol} alt="" /> Découvrir les règles du chalet
                </a>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Chalet;
