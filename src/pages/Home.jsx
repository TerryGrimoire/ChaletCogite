import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import video from "../assets/video.mp4";
import gite2 from "../assets/gite2.jpg";
import gite from "../assets/gite.jpg";
import gite1 from "../assets/gite1.jpg";
import gite3 from "../assets/gite3.jpg";
import gite4 from "../assets/gite4.jpg";
import gite5 from "../assets/gite5.jpg";
import gite6 from "../assets/gite6.jpg";
import gite7 from "../assets/gite7.jpg";
import gite8 from "../assets/gite8.jpg";
import gite9 from "../assets/gite9.jpg";
import gite10 from "../assets/gite10.jpg";
import gite11 from "../assets/gite11.jpg";
import pied from "../assets/pied.jpg";
import main from "../assets/main.jpg";
import droite from "../assets/droite.png";
import propositions from "../data/propositions";
import aussi from "../data/aussi";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img src={gite} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite2} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite3} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite4} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite5} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite6} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite7} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite8} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite9} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite10} onDragStart={handleDragStart} alt="presentation" />,
    <img src={gite11} onDragStart={handleDragStart} alt="presentation" />,
  ];

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
          <h1>Le Chalet CoGîte</h1>
          <h2> L'Ecogite du Dimitile</h2>
          <div className="buttons_container">
            <Link to="/Chalet">
              <button className="button_style" type="button">
                Découvrir notre histoire
              </button>
            </Link>
            <Link to="/Formules">
              <button className="button_style but2" type="button">
                Découvrir nos formules
              </button>
            </Link>
          </div>
        </article>
      </section>
      <section className="home_gite white">
        <div>
          <article>
            <h3>LE CONCEPT “ Alon Cogiter dann Dimitile” </h3>
            <p>
              Le Chalet Cogite c’est notre chambre d’hôtes éco responsable et
              collaborative. Dans notre petit chalet autonome en électricité et
              en eau, faîtes l’expérience d’un tourisme durable au cœur d’un
              espace naturel sensible.
            </p>{" "}
            <p>
              Venez “CoGiter” avec nous, en participant à la vie du lieu ou
              simplement pour profiter de la fraîcheur des hauts et vous
              reposer. Cogiter c’est aussi réfléchir aux enjeux de la transition
              écologique via le partage de la tradition et du savoir vivre
              créole réunionnais.
            </p>
            <Link to="/Chalet">
              <button type="button" className="button_style">
                Découvrir notre histoire
              </button>
            </Link>
          </article>

          <img src={gite1} alt="" className="gite2" />
        </div>
      </section>

      <section className="home_banniere">
        {propositions.map((el) => (
          <div>
            <img src={el.image} alt={el.titre} /> <h5>{el.titre}</h5>{" "}
            <p>{el.texte}</p>
          </div>
        ))}
      </section>
      <section className="white home_first_carousel">
        <h3>Découvrez notre gîte</h3>
        <div>
          <AliceCarousel
            mouseTracking
            disableDotsControls
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
        <h3>Nos formules</h3>
        <p>
          Nous proposons des formules différentes selon les envies et le nombre
          de personnes. Un peu plus que gîter nous vous invitons à CoGîter avec
          nous, à vivre l’expérience collaborative d’une nuit en gîte.
        </p>
        <section>
          {" "}
          <div>
            <h4>Formule "Donn' la main"</h4>
            <img
              src={main}
              alt="personne qui cuisine avec d'autres gens qui aident derrière"
            />
            <p>
              La formule "Donn' la main" (à partir de 6 personnes) vous offre
              une expérience conviviale et collaborative. En plus de votre
              hébergement en chambre, vous pourrez participer à la préparation
              du dîner et petit-déjeuner avec des ingrédients frais, locaux et
              de saison. Nous faisons tout ensemble, que ce soit la vaisselle ou
              le maintien de la propreté du gîte.
            </p>
            <Link to="/Formules">
              <button type="button" className="button_style">
                Découvrir cette formule
              </button>
            </Link>
          </div>
          <div>
            <h4>Formule “Pié sou tab”</h4>
            <img src={pied} alt="personne qui se fait servir" />
            <p>
              La formule "Pied sous table" , plus classique, est parfaite pour
              ceux qui cherchent à se détendre complètement et profiter d'un
              cadre unique en harmonie avec la nature. Elle inclut votre
              hébergement en chambre, ainsi que le dîner et petit déjeuner
              préparés avec des ingrédients frais, locaux et de saison.
            </p>
            <Link to="/Formules">
              {" "}
              <button type="button" className="button_style">
                Découvrir cette formule
              </button>
            </Link>
          </div>
        </section>
      </section>
      <section className="home_aussi white">
        <h3>Le gîte c'est aussi</h3>
        <section>
          {aussi.map((el) => (
            <div>
              <img src={el.image} alt={el.titre} />
              <article>
                <h4>{el.titre}</h4>
                <p>{el.texte}</p>
                <Link to={el.link}>En savoir plus</Link>
              </article>
            </div>
          ))}
        </section>
      </section>
      <section className="home_trouver white">
        <h3>Nous trouver</h3>
        <p>
          Le Chalet Cogite se trouve en plein cœur de l'empire marron au
          Dimitile. Accessible à pied par sentier ou en 4x4.
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
