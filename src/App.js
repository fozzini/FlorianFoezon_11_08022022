import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route Route path='/home' element={Home}/>
       <Route Route path='/fiche-logement' element={FicheLogement}/>
       <Route Route path='/erreur"404"' element={Error}/>
       <Route Route path='/à-propos' element={Apropos}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;