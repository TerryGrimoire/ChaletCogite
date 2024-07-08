import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Activites({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title> {helmet.title} | Activites </title>
        <link rel="canonical" href={`${helmet.href}/Activites`} />
        <meta name="description" content={helmet.description} />
      </Helmet>
    </div>
  );
}

export default Activites;
