import React, { useEffect, useState } from "react";

let url =
  "https://api.nasa.gov/planetary/apod?api_key=DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";

let key = "DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";
const Nasa = () => {
  const [objeto, setObjeto] = useState([]);

  const datosObjetos = async () => {
    let nasafetch = await fetch(url);

    let nasajson = await nasafetch.json();
    console.log(nasajson);
    const objeto = nasajson;
    setObjeto(objeto);
  };
  useEffect(() => {
    console.log("ALV");
    datosObjetos();
  }, []);
  return (
    <>
      <h1>API DE NASA</h1>
      <ul key={objeto}>
        <img className="formatoNasa" src={objeto.hdurl}></img>
        <h1 className="explicacionNasa">{objeto.explanation}</h1>
      </ul>
    </>
  );
};
export default Nasa;
//"https://api.nasa.gov/planetary/apod?api_key=DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";
//<button className="botonNasa" onClick={datosObjetos}>
//  NasaBotón{" "}
//</button>
