import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Restauration({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Restauration </title>
        <link rel="canonical" href={`${helmet.href}/Restauration`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Restauration;
