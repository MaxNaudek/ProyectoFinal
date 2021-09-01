import React, { useEffect, useState } from "react";

let url =
  "https://api.harvardartmuseums.org/image?apikey=0348df04-91a7-4245-a184-6d7de1a1d8c6";

const Museo = () => {
  const [museo, setMuseo] = useState([]);

  const datosMuseo = async () => {
    let museofetch = await fetch(url);

    let museojson = await museofetch.json();
    console.log(museojson);
    let museo = museojson;
    setMuseo(museo);
  };
  useEffect(() => {
    console.log("ALCH");
    datosMuseo();
  }, []);
  return (
    <>
      <h1>API DE MUSEO HARVARD</h1>
      <ul>
        <button className="botonMuseo" onClick={datosMuseo}>
          MuseoBotón{" "}
        </button>
        <li key={museo.records && museo.records[0].id}>
          <img
            className="formatoMuseo"
            src={museo.records && museo.records[1].baseimageurl}
          ></img>
          <h1 className="forma">
            {museo.records && museo.records[1].renditionnumber}
          </h1>
          <h2>{museo.records && museo.records[1].date}</h2>
        </li>
      </ul>
    </>
  );
};
export default Museo;

//key= "2b10xHSlWtmuPD1K3EoX78m1"
//api-key: 2b10xHSlWtmuPD1K3EoX78m1
//"https://my-api.plantnet.org/v2/identify/all?api-key=2b10xHSlWtmuPD1K3EoX78m1&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_1.jpeg&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_2.jpeg&organs=flower&organs=leaf";
//, {
//   headers: {
//     "api-key": "2b10xHSlWtmuPD1K3EoX78m1",
//   },
// });

//import React, { useEffect, useState } from "react";
//
// let url =
//   "https://api.harvardartmuseums.org/Image?apikey=0348df04-91a7-4245-a184-6d7de1a1d8c6";
//
// const Temperatura = () => {
//   const [pronostico, setPronostico] = useState([]);
//
//   const datosPronostico = async () => {
//     let forecastfetch = await fetch(url);
//
//     let forecastjson = await forecastfetch.json();
//     console.log(forecastjson);
//     const pronostico = forecastjson.records[0].copyright;
//     setPronostico(pronostico);
//   };
//   useEffect(() => {
//     console.log("ALCH");
//     datosPronostico();
//   }, []);
//   return (
//     <>
//       <h1>API DE PRONÓSTICO DEL CLIMA</h1>
//       <ul>
//         <button className="botonClima" onClick={datosPronostico}>
//           ClimaBotón{" "}
//         </button>
//         <li key={pronostico}>
//           <img className="formatoClima" src={pronostico}></img>
//           <h1 className="oms">{pronostico.records[0].date}</h1>
//         </li>
//       </ul>
//     </>
//   );
// };
// export default Temperatura;
//
// //key= "2b10xHSlWtmuPD1K3EoX78m1"
// //api-key: 2b10xHSlWtmuPD1K3EoX78m1
// //"https://my-api.plantnet.org/v2/identify/all?api-key=2b10xHSlWtmuPD1K3EoX78m1&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_1.jpeg&images=https%3A%2F%2Fmy.plantnet.org%2Fimages%2Fimage_2.jpeg&organs=flower&organs=leaf";
// //, {
// //   headers: {
// //     "api-key": "2b10xHSlWtmuPD1K3EoX78m1",
// //   },
// // });
