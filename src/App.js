import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import Home from "./pages/Home";


const App = () => {
  return (
    
    <BrowserRouter>
     <Routes>
       <Route path='/' element={< Home />}/>
       <Route path='/fiche-logement' element={<FicheLogement/>}/>
       <Route path='/à-propos' element={<Apropos/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;