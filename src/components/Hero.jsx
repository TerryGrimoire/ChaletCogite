import React, { useEffect, useState } from "react";
import papa from "papaparse";

function Hero({ number }) {
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
    setHero(json.filter((x) => x.titre !== "titre"));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(import.meta.env.VITE_HERO)
      .then((result) => result.text())
      .then((text) => papa.parse(text))
      .then((data2) => prepareData(data2.data));
  }, []);

  return (
    <div className="hero_container">
      {hero && hero.length > 1 && (
        <div className="hero">
          <img src={hero[number].photo} alt={hero[number].titre} />
          <h1>{hero[number].titre}</h1>
          <div className="veil" />
        </div>
      )}
    </div>
  );
}

export default Hero;
