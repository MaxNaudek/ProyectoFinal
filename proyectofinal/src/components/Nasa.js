import React, { useEffect, useState } from "react";

let url =
  "https://api.nasa.gov/planetary/apod?api_key=DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";

let key = "DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";
const Nasa = () => {
  useEffect(() => {
    console.log("ALV");
    datosObjetos();
  }, []);

  const [objeto, setObjeto] = useState([]);

  const datosObjetos = async () => {
    let nasafetch = await fetch(url);

    let nasajson = await nasafetch.json();
    console.log(nasajson);
    const objeto = nasajson;
    setObjeto(objeto);
  };
  return (
    <>
      <h1>API DE NASA</h1>
      <ul>
        <button className="botonNasa" onClick={datosObjetos}>
          NasaBotón{" "}
        </button>
        <li key={objeto}>
          <img className="formatoNasa" src={objeto.hdurl}></img>
          <h1 className="explicacionNasa">{objeto.explanation}</h1>
        </li>
      </ul>
    </>
  );
};
export default Nasa;
//"https://api.nasa.gov/planetary/apod?api_key=DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";
