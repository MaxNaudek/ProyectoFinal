import React, { useEffect, useState } from "react";

const url =
  "https://api.harvardartmuseums.org/image?apikey=0348df04-91a7-4245-a184-6d7de1a1d8c6";

const Museo = () => {
  const [museo, setMuseo] = useState([]);

  const datosMuseo = async () => {
    const museofetch = await fetch(url);

    const museojson = await museofetch.json();
    console.log(museojson);
    const museo = museojson;
    setMuseo(museo);
  };
  useEffect(() => {
    console.log("Inicia useEffect-Museo");
    datosMuseo();
  }, []);
  return (
    <>
      <h1 className="Títulomuseo">API DE MUSEO HARVARD</h1>
      <ul>
        <div className="contenedorimagenmuseo">
          <img
            className="formatoMuseo"
            src={museo.records && museo.records[1].baseimageurl}
            alt=""
          ></img>
        </div>
        <div className="contenedorfechaybotonmuseo">
          <h2>{museo.records && museo.records[1].date}</h2>
        </div>
      </ul>
    </>
  );
};
export default Museo;

//  <button className="botonMuseo" onClick={datosMuseo}>
//   {" "}
//   MuseoBotón{" "}
// </button>
