import { Button, Form } from "react-bootstrap/";
import React, { useState } from "react";

const Formulario = () => {
  const [datos, setDatos] = useState({});

  const [objeto, setObjeto] = useState([]);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const objetofetch = await fetch(datos.api);

    const objetojson = await objetofetch.json();
    console.log(objetojson);
    setObjeto(objetojson);
  };

  return (
    <>
      <br />
      <br />
      <h1 className="tituloformulario">Formulario</h1>
      <form className="" onSubmit={handleSubmit}>
        <div className="formularioyboton">
          <Form.Control
            size="lg"
            type="text"
            placeholder="Escribe la dirección de tu API!"
            className=""
            onChange={handleInputChange}
            name="api"
          />
          <Button
            variant="outline-dark"
            className="botonFormulario"
            type="submit"
          >
            Resultado!
          </Button>
        </div>
      </form>

      <p>{JSON.stringify(objeto)}</p>
    </>
  );
};

export default Formulario;
