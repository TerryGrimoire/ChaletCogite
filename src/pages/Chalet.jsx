import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";
import logo from "../assets/logo.png";
import chalet from "../assets/chalet1.jpg";
import gite from "../assets/gite.jpg";
import gite2 from "../assets/gite9.jpg";
import gite3 from "../assets/gite8.jpg";
import heure from "../assets/lhorloge.svg";
import euro from "../assets/carte.svg";
import infos from "../assets/lune.svg";
import animal from "../assets/patte.svg";
import pol from "../assets/pol.svg";

function Chalet({ helmet }) {
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
        <Hero number={0} />
        <section className="chalet_page_intro white">
          <h3>Qui sommes nous ?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            facere quod ad alias quasi distinctio dignissimos, totam aspernatur
            error accusamus maxime blanditiis quas, quam sed ea nulla rerum
            velit nesciunt? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nobis, facere quod ad alias quasi distinctio dignissimos,
            totam aspernatur error accusamus maxime blanditiis quas, quam sed ea
            nulla rerum velit nesciunt? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
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
          <article className="chalet_middle_bottom">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              facere quod ad alias quasi distinctio dignissimos, totam
              aspernatur error accusamus maxime blanditiis quas, quam sed ea
              nulla rerum velit nesciunt? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <p>
              Nobis, facere quod ad alias quasi distinctio dignissimos, totam
              aspernatur error accusamus maxime blanditiis quas, quam sed ea
              nulla rerum velit nesciunt?
            </p>
          </article>
        </section>
        <section className="chalet_page_top">
          <img src={logo} alt="" />
          <article>
            <p>
              Nobis, facere quod ad alias quasi distinctio dignissimos, totam
              aspernatur error accusamus maxime blanditiis quas, quam sed ea
              nulla rerum velit nesciunt? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit.
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
