import "./App.css";
import Cat from "./components/Gatomain.js";
import Nasa from "./components/Nasa.js";
import Weather from "./components/Temperatura.js";
function App() {
  return (
    <>
      <div className="App">La App de Max</div>;
      <Cat />
      <Nasa />
      <Weather />
    </>
  );
}

export default App;
