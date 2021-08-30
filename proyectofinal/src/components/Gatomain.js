import React, { useEffect, useState } from "react";

let url = "https://api.thecatapi.com/v1/images/search";
let key = "a7881c6a-7106-436c-9b6e-162e8eabdceb";
const Cat = () => {
  useEffect(() => {
    console.log("ALM");
    datosMascotas();
  }, []);

  const [mascota, setMascota] = useState([]);

  const datosMascotas = async () => {
    let gatos = await fetch(url);

    let gatosjson = await gatos.json();
    console.log(gatosjson);
    const mascota = gatosjson;
    setMascota(mascota);
  };
  return (
    <>
      <h1>API DE GATOS</h1>
      <ul>
        <button className="botonCat" onClick={datosMascotas}>
          GatoBotón{" "}
        </button>
        <li key={mascota.id}>
          <img className="formatoCat" src={mascota[0].url}></img>
        </li>
      </ul>
    </>
  );
};
export default Cat;
// <ul>{
//   users.map((e)=> (
//     <li key={e.id} </li>)  )
// }</ul>
//"https://api.thecatapi.com/v1/images?api_key=a7881c6a-7106-436c-9b6e-162e8eabdceb"
// "https://thecatapi.com/v1/images?api_key=a7881c6a-7106-436c-9b6e-162e8eabdceb" seg[un la p[agina de key con documentaci[on]]]
