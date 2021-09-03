import "./App.css";
import Gatomain from "./components/Gatomain";
import Nasa from "./components/Nasa";
import Museo from "./components/Museo";
import Formulario from "./forms/Formulario";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h1 className="App"> ⭐ PROYECTO FINAL EN REACT! ⭐</h1>
        <br />
        <h2 className="App1"> ¡APIs de ejemplo!</h2>
        <nav>
          <ul>
            <div className="Contenedorbotones">
              <Link to="/nasa">
                <button className="Nasacontenedorlogo">
                  <img
                    className="Nasaboton"
                    src={"../imagenes/planetaboton.png"}
                    alt=""
                  />
                </button>
              </Link>

              <Link to="/gatomain">
                <button className="Gatocontenedorlogo">
                  <img
                    className="Gatoboton"
                    src={"../imagenes/Gatoboton.png"}
                    alt="icono de gato"
                  />
                </button>
              </Link>

              <Link to="/Museo">
                {" "}
                <button className="Museocontenedorlogo">
                  <img
                    className="Museoboton"
                    src={"../imagenes/Museoboton.png"}
                    alt="icono de museo"
                  />
                </button>
              </Link>
            </div>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gatomain" exact component={Gatomain} />

          <Route path="/Museo" exact component={Museo} />

          <Route path="/Nasa" exact component={Nasa} />
        </Switch>

        <Formulario />
      </div>
    </Router>
  );
}
