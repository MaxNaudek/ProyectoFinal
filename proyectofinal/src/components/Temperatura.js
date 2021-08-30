import React, { useEffect, useState } from "react";

let url = "https://api.imgflip.com/get_memes";

const Weather = () => {
  useEffect(() => {
    console.log("ALCH");
    datosPronostico();
  }, []);

  const [pronostico, setPronostico] = useState([]);

  const datosPronostico = async () => {
    let forecastfetch = await fetch(url);

    let forecastjson = await forecastfetch.json();
    console.log(forecastjson);
    const pronostico = forecastjson.data.memes[1].url;
    setPronostico(pronostico);
  };
  return (
    <>
      <h1>API DE PRONÓSTICO DEL CLIMA</h1>
      <ul>
        <button className="botonClima" onClick={datosPronostico}>
          ClimaBotón{" "}
        </button>
        <li key={pronostico}>
          <img className="formatoClima" src={pronostico}></img>
        </li>
      </ul>
    </>
  );
};
export default Weather;
