import React, { useEffect, useState } from "react";

let url =
  "https://api.thecatapi.com/v1/images/search?api_key=a7881c6a-7106-436c-9b6e-162e8eabdceb";

const Cat = () => {
  const [mascota, setMascota] = useState([]);

  const datosMascotas = async () => {
    let gatos = await fetch(url);

    let gatosjson = await gatos.json();
    console.log(gatosjson);
    setMascota(gatosjson);
  };
  useEffect(() => {
    console.log("Inicia useEffect-Cat");
    datosMascotas();
  }, []);
  return (
    <>
      <h1 className="Títulogatos">API DE GATOS</h1>
      <ul>
        <div className="contenedorbotoncat">
          <img
            className="formatoCat"
            src={mascota[0] && mascota[0].url}
            alt=""
          ></img>
        </div>
        <div className="alinearbotoncat">
          <button className="botonCat" onClick={datosMascotas}>
            Cambiar Gato!{" "}
          </button>
        </div>
      </ul>
    </>
  );
};
export default Cat;
//
// <ul>{
//   users.map((e)=> (
//     <li key={e.id} </li>)  )
// }</ul>
//"https://api.thecatapi.com/v1/images?api_key=a7881c6a-7106-436c-9b6e-162e8eabdceb"
// "https://thecatapi.com/v1/images?api_key=a7881c6a-7106-436c-9b6e-162e8eabdceb" seg[un la p[agina de key con documentaci[on]]]
//let key = "a7881c6a-7106-436c-9b6e-162e8eabdceb";
