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
          <h3>{langue ? "Qui sommes nous ?" : "Kisa nou lé ? "}</h3>
          <p>
            {langue
              ? "Bienvenue au Chalet CoGîte, chez nous, Coralie et Quentin Josseron au Dimitile. Non pas mari et femme nous sommes jumeaux originaires du Tampon. On a grandi dans la tradition créole, où l'accueil et le partage sont au cœur de notre culture. Régalés par les bons carris de mamie et les moments passés en famille, on a voulu recréer cet esprit, en mêlant amour pour la nature, simplicité et authenticité. Persuadés que les réponses aux défis écologiques d’aujourd’hui passent par la sobriété, notre gîte reflète un engagement pour un tourisme plus respectueux de l’environnement."
              : " Ariv azot isi an ho Dimitile, dann Shalé Kojit, shé nout 2 Coralie é Quentin Josseron. Nou sé pa djeune marié, nou lé zimo, zimel é nou sort Tampon. Nou la grandi dann tradisyon kréol, ousa lakey ek lo partaz i fé briy nout kiltir. Souvnans bon manjé mémé ,dimansh an famiy ek lanbians la ranpli anou sanm lamour. Pou nou manyer lontan sé inn solusyon problem klimatik. Dann nout jit nou angaj anou pou pratik in tourism i respèkt la Rényon, an simplisité nout domounité. "}
          </p>
          <p>
            {langue
              ? "Le Chalet CoGite, c’est la garantie d’un séjour paisible et ressourçant, dans un cadre naturel exceptionnel, tout en minimisant l'impact sur l’environnement alentour."
              : "Vyin repoz azot, pass in séjour trankil, pran swin in joli ti bout la foré ansanm nou."}
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
              {langue
                ? "Que vous veniez pour vous reconnecter à la nature, déguster de bons petits plats ou simplement vous offrir un moment de calme, Coralie et Quentin vous accueillent avec plaisir au Chalet CoGîte. Ici, simplicité rime avec convivialité, confort avec authenticité."
                : "Zot i pe monté pou apresyé la natir, anprofité sanm kamarad, an famy, ranpli zot jabo ek in bon kari febwa sinonsa zis pou giny la trankilité, nout porte lé rouver. Terla y kass pa la tete, y fé sanm lo ker."}
            </p>
          </article>
        </section>
        <section className="chalet_regles white">
          <h3>{langue ? "Infos pratiques" : "Sak zot i dwa konèt"}</h3>
          <div className="regles">
            <img src={gite3} alt="" />
            <div className="regles_container">
              <ul>
                <li>
                  <img src={heure} alt="" />
                  <p>
                    {langue
                      ? "Arrivée et départ : arrivée 15h et départ 11h"
                      : "Arivé/dépar : arivé 15zèr é dépar 11zèr"}
                  </p>
                </li>

                <li>
                  <img src={euro} alt="" />
                  <p>
                    {langue
                      ? "Paiements acceptés : espèces, virements et chèques"
                      : "Péman aksépté : lespès, virman é shèk"}
                  </p>
                </li>
                <li>
                  <img src={animal} alt="" />
                  <p>
                    {" "}
                    {langue
                      ? "Les animaux ne sont pas acceptés"
                      : "Zanimo lé pa aksépté"}
                  </p>
                </li>
                <a
                  href="https://drive.google.com/file/d/1qJgM1NvY3S3jgCBoYEzXe-RdhnuLgT2v/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={pol} alt="" />{" "}
                  {langue
                    ? "Découvrir les règles du chalet"
                    : "Dekouv nout bann règ"}
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
