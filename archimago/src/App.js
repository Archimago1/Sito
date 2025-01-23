import "./App.css";
import Home from "./components/Home/Home.js";
import Servizi from "./components/Servizi/Servizi.js";
import Progetti from "./components/Progetti/Progetti.js";
import Contatti from "./components/Contatti/Contatti.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/servizi" exact element={<Servizi />} />
        <Route path="/progetti" exact element={<Progetti />} />
        <Route path="/contatti" exact element={<Contatti />} />
      </Routes>
    </Router>
  );
}

export default App;
