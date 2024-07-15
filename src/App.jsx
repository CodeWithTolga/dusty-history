import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Classical from "./pages/Ottoman/Classical";
import Culture from "./pages/Ottoman/Culture";
import Decline from "./pages/Ottoman/Decline";
import End from "./pages/Ottoman/End";
import Figures from "./pages/Ottoman/Figures";
import Foundation from "./pages/Ottoman/Foundation";
import Legacy from "./pages/Ottoman/Legacy";
import Rise from "./pages/Ottoman/Rise";
import Sources from "./pages/Ottoman/Sources";
import Stagnation from "./pages/Ottoman/Stagnation";
 
import Ataturk from "./pages/Republic/Ataturk";
import ForeignPolicy from "./pages/Republic/ForeignPolicy";
import ImportantFigures from "./pages/Republic/ImportantFigures";
import LegacyAndDeath from "./pages/Republic/LegacyAndDeath";
import ModernTurkey from "./pages/Republic/ModernTurkey";
import Reforms from "./pages/Republic/Reforms";
import RepublicProclamation from "./pages/Republic/RepublicProclamation";
import RepublicSources from "./pages/Republic/Sources";

//== ,Osmanlı İmparatorluğu 

//== Atatürk Devrimi 
const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>

        {/* Osmanlı İmparatorluğu adı altından gelen linkler */}
        <Route path="/ottoman/classic-period" element={<Classical/>}/>
        <Route path="/ottoman/culture" element={<Culture/>}/>
        <Route path="/ottoman/decline-period" element={<Decline/>}/>
        <Route path="/ottoman/end" element={<End/>}/>
        <Route path="/ottoman/figures" element={<Figures/>}/>
        <Route path="/ottoman/foundation" element={<Foundation/>}/>
        <Route path="/ottoman/legacy" element={<Legacy/>}/>
        <Route path="/ottoman/rise" element={<Rise/>}/>
        <Route path="/ottoman/sources" element={<Sources/>}/>
        <Route path="/ottoman/Stagnation-period" element={<Stagnation/>}/>
        
         

        {/* Atatürk Devrimi adı altından gelen linkler */}
        <Route path="/republic/ataturk-life" element={<Ataturk/>}/>
        <Route path="/republic/foreign-policy" element={<ForeignPolicy/>}/>
        <Route path="/republic/foreign-policy" element={<ForeignPolicy/>}/>
        <Route path="/republic/important-figures" element={<ImportantFigures/>}/>
        <Route path="/republic/legacy-and-death" element={<LegacyAndDeath/>}/>
        <Route path="/republic/modern-turkey" element={<ModernTurkey/>}/>
        <Route path="/republic/reforms" element={<Reforms/>}/>
        <Route path="/republic/republic-proclamation" element={<RepublicProclamation/>}/>
        <Route path="/republic/republic-sources" element={<RepublicSources/>}/>    
      </Routes>
    </>
  )
}

export default App
