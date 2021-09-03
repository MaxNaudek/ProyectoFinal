import React, { useEffect, useState } from "react";

const url =
  "https://api.nasa.gov/planetary/apod?api_key=DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";

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
    console.log("Inicia useEffect-Nasa");
    datosObjetos();
  }, []);
  return (
    <>
      <h1 className="Títulonasa">API DE NASA</h1>
      <ul>
        <img className="formatoNasa" src={objeto.hdurl} alt=""></img>
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
//let key = "DGuonCzgkwvRGOuog7LXxDQrmaDw2tlef79SD1uR";
