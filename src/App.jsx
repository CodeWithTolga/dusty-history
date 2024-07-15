import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Classic from "./pages/Classic";
import CultularLife from "./pages/CultularLife";
import Distribution from "./pages/Distribution";
import Foundation from "./pages/Foundation";
import ImportantFigures from "./pages/ImportantFigures";
import Increase from "./pages/Increase";
import OttomanHeritace from "./pages/OttomanHeritace";
import StandDecline from "./pages/StandDecline";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/classic-periot" element={<Classic/>}/>
        <Route path="/cultural-social-life" element={<CultularLife/>}/>
        <Route path="/distribution-periot" element={<Distribution/>}/>
        <Route path="/foundation-periot" element={<Foundation/>}/>
        <Route path="/important-figures" element={<ImportantFigures/>}/>
        <Route path="/increase-periot" element={<Increase/>}/>
        <Route path="/ottoman-heritace" element={<OttomanHeritace/>}/>
        <Route path="/stand-decline-periot" element={<StandDecline/>}/>
      </Routes>
    </>
  )
}

export default App
