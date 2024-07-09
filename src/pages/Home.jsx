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
          <h2> Le gîte écologique en agroforesterie du Dimitile</h2>
          <div className="buttons_container">
            <Link to="/Carte">
              <button className="button_style" type="button">
                Découvrir notre histoire
              </button>
            </Link>
            <Link to="/Contact">
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
            <h3>Notre concept </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              debitis quia aliquam? Nemo doloremque beatae modi perferendis
              quidem. Dolorum, quas. Iusto maxime sit debitis facilis, officiis
              dolores, corrupti repellendus aliquid dolor optio illum sequi?
              Maxime maiores cum suscipit voluptate nesciunt et temporibus iure
              incidunt iste. Explicabo maxime sit quis vero!
            </p>
            <button type="button" className="button_style">
              Découvrir notre histoire
            </button>
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
          Le cogîte propose à tous nos visiteurs deux formules en fonction de
          leurs besoins et leurs attentes. Bien plus qu'un gîte, nous avons à
          coeur de créer du lien et partager des moments avec nos visiteurs. A
          noter, il est possible de venir au gîte juste pour dormir, sans
          inclure une formule repas.
        </p>
        <section>
          <div>
            <h4>Formule pied sous la table</h4>
            <img src={pied} alt="personne qui se fait servir" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              facere quod ad alias quasi distinctio dignissimos, totam
              aspernatur error accusamus maxime blanditiis quas, quam sed ea
              nulla rerum velit nesciunt?
            </p>
            <Link to="/Formules">
              {" "}
              <button type="button" className="button_style">
                Découvrir cette formule
              </button>
            </Link>
          </div>

          <div>
            <h4>Formule donne la main</h4>
            <img
              src={main}
              alt="personne qui cuisine avec d'autres gens qui aident derrière"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              facere quod ad alias quasi distinctio dignissimos, totam
              aspernatur error accusamus maxime blanditiis quas, quam sed ea
              nulla rerum velit nesciunt?
            </p>
            <Link to="/Formules">
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
          Le chalet Cogite se trouve en terre de marronage, en plein coeur de
          l'empire marron.
        </p>

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
