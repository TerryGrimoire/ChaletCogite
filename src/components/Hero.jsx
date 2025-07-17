import React from "react";
import heroKR from "../data/heroKR";
import hero from "../data/hero";

function Hero({ number, langue }) {
  const heroData = langue ? hero : heroKR;
  return (
    <div className="hero_container">
      {heroData && heroData.length > 1 && (
        <div className="hero">
          <img src={heroData[number].img} alt={heroData[number].title} />
          <h1>{heroData[number].title}</h1>
          <div className="veil" />
        </div>
      )}
    </div>
  );
}

export default Hero;
