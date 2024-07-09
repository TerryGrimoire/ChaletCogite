import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/logo2.png";
import chalet from "../assets/chalet1.jpg";
import gite from "../assets/gite.jpg";
import gite2 from "../assets/gite9.jpg";

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
          <h3>Plus d'informations sur le chalet</h3>
          <div className="regles">
            <img src={chalet} alt="" />
            <div>
              <ul>
                <li>Pas d'animaux dans le chalet</li>
                <li>Moyens de paiement acceptés : Espèces et chèques</li>
                <li>Arrivée 15h départ 11h</li>
                <li>Pas d'animaux dans le chalet</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Chalet;
