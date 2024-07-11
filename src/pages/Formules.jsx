import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";

function Formules({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Formules </title>
        <link rel="canonical" href={`${helmet.href}/formules`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
      <main className="all_main">
        <Hero number={1} />
      </main>
    </div>
  );
}

export default Formules;
