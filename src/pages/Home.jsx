import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import papa from "papaparse";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import video from "../assets/video.mp4";

import gite1 from "../assets/gite1.jpg";
import pied from "../assets/pied.jpg";
import main from "../assets/main.jpg";
import droite from "../assets/droite.png";
import propositions from "../data/propositions";
import aussi from "../data/aussi";
import aussiKR from "../data/aussiKR";
import propositionsKR from "../data/propositionsKR";

export default function Home({ helmet, langue }) {
  const aussiData = langue ? aussi : aussiKR;
  const propositionsData = langue ? propositions : propositionsKR;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();
  const [hero, setHero] = useState([]);
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
    setHero(json);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_HERO)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  const dataReal = hero && hero[1] && hero[1].galerie.split(";");

  const items =
    dataReal &&
    dataReal.map((el) => (
      <img src={el} onDragStart={handleDragStart} alt="presentation" />
    ));

  return (
    <main className="flex-col">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <section className="home_top">
        <video autoPlay loop muted>
          <track kind="captions" />
          <source src={video} type="video/mp4" />
        </video>
        <div className="veil" />
        <article>
          <h1>{langue ? "Chalet CoGîte" : "Shalé kojit"}</h1>
          <h2> {langue ? "L'Ecogite du Dimitile" : "Lékojit Dimitil"}</h2>
          <div className="buttons_container">
            <Link to="/Chalet">
              <button className="button_style" type="button">
                {langue ? "Découvrir notre histoire" : "Dekouv nout zistwar"}
              </button>
            </Link>
            <Link to="/Formules">
              <button className="button_style but2" type="button">
                {langue ? "Découvrir nos formules" : "Dekouv nout formil"}
              </button>
            </Link>
          </div>
        </article>
      </section>
      <section className="home_gite white">
        <div>
          <article>
            <h3>
              {langue
                ? "LE CONCEPT “ Alon Cogiter dann Dimitile”"
                : "LE KONSEPT “ Alon kojité dann Dimitil”"}{" "}
            </h3>
            <p>
              {langue
                ? "Le Chalet Cogite c’est notre chambre d’hôtes éco responsable et collaborative. Dans notre petit chalet autonome en électricité et en eau, faîtes l’expérience d’un tourisme durable au cœur d’un espace naturel sensible."
                : "Le Shalé Kojit sé nout jit dann milié la foré ousa i met ansanm. Nout ti kaz otonom ek dolo, lestrisité, vyin bat in karé dann inn joli ti kwin la foré Dimitile."}
            </p>{" "}
            <p>
              {langue
                ? " Venez “CoGiter” avec nous, en participant à la vie du lieu ou simplement pour profiter de la fraîcheur des hauts et vous reposer. Cogiter c’est aussi réfléchir aux enjeux de la transition écologique via le partage de la tradition et du savoir vivre créole réunionnais."
                : "Mont azot pou kojité, zot va giny repozé oubyin mèt la min ansanm. Vyin kas koko, kojité desu lekoloji réyoné, nout manyèr viv lontan, nout tradisyon, nout kisanoulé, anou réyoné."}
            </p>
            <Link to="/Chalet">
              <button type="button" className="button_style">
                {langue ? "Découvrir notre histoire" : "Dekouv nout zistwar"}
              </button>
            </Link>
          </article>

          <img src={gite1} alt="" className="gite2" />
        </div>
      </section>

      <section className="home_banniere">
        {propositionsData.map((el) => (
          <div>
            <img src={el.image} alt={el.titre} /> <h5>{el.titre}</h5>{" "}
            <p>{el.texte}</p>
          </div>
        ))}
      </section>
      <section className="white home_first_carousel">
        <h3>{langue ? "Découvrez notre gîte" : "FOTO ISI AN O"}</h3>
        <div>
          <AliceCarousel
            mouseTracking
            disableDotsControls
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            items={items}
            infinite
            renderPrevButton={() => {
              return (
                <img
                  src={droite}
                  alt="chevron gauche"
                  className="chevron gauche"
                />
              );
            }}
            renderNextButton={() => {
              return (
                <img src={droite} alt="chevron droite" className="chevron" />
              );
            }}
            responsive={{
              0: {
                items: 1,
              },
              1024: {
                items: 3,
                itemsFit: "contain",
              },
            }}
          />
        </div>
      </section>
      <section className="home_formules">
        <h3>{langue ? "Nos formules" : "Kwa nou propoz"}</h3>
        <p>
          {langue
            ? "Nous proposons des formules différentes selon les envies et le nombre de personnes. Un peu plus que gîter nous vous invitons à CoGîter avec nous, à vivre l’expérience collaborative d’une nuit en gîte."
            : "Zot y pe shwazi kel séjour zot la anvi kan zot y vyin vwar anou."}
        </p>
        <section>
          {" "}
          <div>
            <h4>{langue ? "Formule Donn' la main" : "Formul donn la min"}</h4>
            <img
              src={main}
              alt="personne qui cuisine avec d'autres gens qui aident derrière"
            />
            <p>
              {langue
                ? "La formule Donn' la main (à partir de 6 personnes) vous offre une expérience conviviale et collaborative. En plus de votre hébergement en chambre, vous pourrez participer à la préparation du dîner et petit-déjeuner avec des ingrédients frais, locaux et de saison. Nous faisons tout ensemble, que ce soit la vaisselle ou le maintien de la propreté du gîte."
                : "An formul donn la min (6 moun minimun) zot na la nwit an shanm, nou fé kwi manjé, nou mett prop, nou koup dobwa etc. Tout sak néna pou fé, nou fé ansanm. An partaj, an lamontraj, an lantouraj. "}
            </p>
            <Link to="/Formules">
              <button type="button" className="button_style">
                {langue ? "Découvrir cette formule" : "Klik terla pou konet"}
              </button>
            </Link>
          </div>
          <div>
            <h4>{langue ? "Formule Pié sou tab" : "Formul pyé sou tab"}</h4>
            <img src={pied} alt="personne qui se fait servir" />
            <p>
              {langue
                ? "La formule Pied sous table , plus classique, est parfaite pour ceux qui cherchent à se détendre complètement et profiter d'un cadre unique en harmonie avec la nature. Elle inclut votre hébergement en chambre, ainsi que le dîner et petit déjeuner préparés avec des ingrédients frais, locaux et de saison."
                : " La formul pyé sou tab, sé in formul klassik ousa zot y vyin manjé, dormir, détann azot é anprofité dan la fré lé o. "}
            </p>
            <Link to="/Formules">
              {" "}
              <button type="button" className="button_style">
                {langue ? "Découvrir cette formule" : "Klik terla pou konet"}
              </button>
            </Link>
          </div>
        </section>
      </section>
      <section className="home_aussi white">
        <h3>{langue ? "Le gîte c'est aussi" : "Kan na pi na ankor"}</h3>
        <section>
          {aussiData.map((el) => (
            <div>
              <img src={el.image} alt={el.titre} />
              <article>
                <h4>{el.titre}</h4>
                <p>{el.texte}</p>
                <Link to={el.link}>
                  {langue ? "En savoir plus" : "Klik terla pou konet"}
                </Link>
              </article>
            </div>
          ))}
        </section>
      </section>
      <section className="home_trouver white">
        <h3>{langue ? "Nous trouver" : "Ousa nou lé ? "}</h3>
        <p>
          {langue
            ? "Le Chalet Cogite se trouve en plein cœur de l'empire marron au Dimitile. Accessible à pied par sentier ou en 4x4."
            : "Zot va trouv anou dann milyé lanpir maron Dimitile, i giny mont a pyé oubyin an 4x4 "}
        </p>
        <small>
          <a href="https://g.co/kgs/XVwEiCf" target="_blank" rel="noreferrer">
            51 Piste 4x4 Jean Dubard, Entre-Deux 97414, La Réunion
          </a>
        </small>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9893449491847!2d55.505811099999995!3d-21.1899921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21787500604c5a2b%3A0x43e20c61844bef73!2sLe%20Chalet%20CoGite!5e1!3m2!1sfr!2sfr!4v1720087504866!5m2!1sfr!2sfr"
          title="coigte"
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  );
}
