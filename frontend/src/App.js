import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Calendrier from './pages/Calendrier';
import Profil from './pages/Profil_p';
import Profilmodif from './pages/Profilmodif';

function App ()  {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/calendrier" element={<Calendrier />}/>
      <Route path="/profil" element={<Profil />}/>
      <Route path="/profilmodif" element={<Profilmodif />}/>
      <Route path="*" element={<Accueil />} />   //renvoie à la page d'accueil si l'URL saisi est n'importe quoi
    </Routes>
    </BrowserRouter>
  );
}

export default App;
