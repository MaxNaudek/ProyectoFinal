import React from "react";

function Botones() {
  return (
    <>
      <div className="Contenedorbotones">
        <button>
          <img
            className="Gatoboton"
            src={"../imagenes/Gatoboton.png"}
            onClick={"./src/components/Gatomain.js"}
          />
        </button>
        <button>
          <img
            className="Gatoboton"
            src={"../imagenes/planetaboton.png"}
            onClick={"./src/components/Gatomain.js"}
          />
        </button>
        <button>
          <img
            className="Gatoboton"
            src={"../imagenes/Temperaturaboton.png"}
            onClick={"./src/components/Gatomain.js"}
          />
        </button>
      </div>
    </>
  );
}
export default Botones;
