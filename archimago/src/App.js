import "./App.css";
import Home from "./components/Home/Home.js";
import Servizi from "./components/Servizi/Servizi.js";
import ProgettoCasa from "./components/ProgettoCasa/ProgettoCasa.js";
import Progetti from "./components/Progetti/Progetti.js";
import Progetto1 from "./components/Progetti/ProgettiSingoli/Progetto1.js";
import Progetto2 from "./components/Progetti/ProgettiSingoli/Progetto2.js";
import Progetto3 from "./components/Progetti/ProgettiSingoli/Progetto3.js";
import Progetto4 from "./components/Progetti/ProgettiSingoli/Progetto4.js";
import Progetto5 from "./components/Progetti/ProgettiSingoli/Progetto5.js";
import Progetto6 from "./components/Progetti/ProgettiSingoli/Progetto6.js";
import Progetto7 from "./components/Progetti/ProgettiSingoli/Progetto7.js";
import Progetto8 from "./components/Progetti/ProgettiSingoli/Progetto8.js";
import Progetto9 from "./components/Progetti/ProgettiSingoli/Progetto9.js";
import Progetto10 from "./components/Progetti/ProgettiSingoli/Progetto10.js";
import Progetto11 from "./components/Progetti/ProgettiSingoli/Progetto11.js";
import Progetto12 from "./components/Progetti/ProgettiSingoli/Progetto12.js";
import Progetto13 from "./components/Progetti/ProgettiSingoli/Progetto13.js";
import Progetto14 from "./components/Progetti/ProgettiSingoli/Progetto14.js";

import Team from "./components/Team/Team.js";
import Contatti from "./components/Contatti/Contatti.js";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/servizi" exact element={<Servizi />} />
        <Route path="/progettoCasa" exact element={<ProgettoCasa />} />
        <Route path="/progetti" exact element={<Progetti />} />
        <Route path="/progetti/progetto1" exact element={<Progetto1 />} />
        <Route path="/progetti/progetto2" exact element={<Progetto2 />} />
        <Route path="/progetti/progetto3" exact element={<Progetto3 />} />
        <Route path="/progetti/progetto4" exact element={<Progetto4 />} />
        <Route path="/progetti/progetto5" exact element={<Progetto5 />} />
        <Route path="/progetti/progetto6" exact element={<Progetto6 />} />
        <Route path="/progetti/progetto7" exact element={<Progetto7 />} />
        <Route path="/progetti/progetto8" exact element={<Progetto8 />} />
        <Route path="/progetti/progetto9" exact element={<Progetto9 />} />
        <Route path="/progetti/progetto10" exact element={<Progetto10 />} />
        <Route path="/progetti/progetto11" exact element={<Progetto11 />} />
        <Route path="/progetti/progetto12" exact element={<Progetto12 />} />
        <Route path="/progetti/progetto13" exact element={<Progetto13 />} />
        <Route path="/progetti/progetto14" exact element={<Progetto14 />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/contatti" exact element={<Contatti />} />
      </Routes>
    </Router>
  );
}

export default App;
