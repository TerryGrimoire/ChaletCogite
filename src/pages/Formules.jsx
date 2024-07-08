import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

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
    </div>
  );
}

export default Formules;
