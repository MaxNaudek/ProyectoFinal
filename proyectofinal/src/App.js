import "./App.css";
import Gatomain from "./components/Gatomain";
import Nasa from "./components/Nasa";
import Museo from "./components/Museo";
import Botones from "./components/Botones";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h1 className="App"> ⭐ PROYECTO FINAL EN REACT! ⭐</h1>
        <nav>
          <ul>
            <Link to="/nasa">
              <button>
                <img
                  className="Nasaboton"
                  src={"../imagenes/planetaboton.png"}
                />
              </button>
            </Link>

            <Link to="/gatomain">
              <button>
                <img className="Gatoboton" src={"../imagenes/Gatoboton.png"} />
              </button>
            </Link>

            <Link to="/Museo">
              {" "}
              <button>
                <img
                  className="Museoboton"
                  src={"../imagenes/Museoboton.png"}
                />
              </button>
            </Link>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/gatomain" exact component={Gatomain} />

          <Route path="/Museo" exact component={Museo} />

          <Route path="/Nasa" exact component={Nasa} />
        </Switch>
      </div>
    </Router>
  );
}
