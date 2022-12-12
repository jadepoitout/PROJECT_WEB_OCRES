import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Coachmodif.css';

import { useState, useEffect } from "react";
import Axios from "axios";

function Coachmodif () {

  const [listofCoach, setListofCoach] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [photo, setPhoto] = useState("");
  const [specialite, setSpecialite] = useState("");

  const createCoach = () => {
    Axios.post("http://localhost:3000/createCoach", {
      name,
      contact,
      photo,
      specialite,
    }).then((response) => {
      setListofCoach([
        ...listofCoach,
        {
          name,
          contact,
          photo,
          specialite,
        },
      ]);
    });
  };

    return(
        <div id="fondM">

            <Navbar />
            <div id="titre"><h1>Ajout d'un coach</h1></div>*
            <div></div>
          
        <div id="taille" >
        <div id="decalage"><input
          type="text"
          placeholder="Nom..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        /></div>
        
        <div><input
          type="number"
          placeholder="Contact..."
          onChange={(event) => {
            setContact(event.target.value);
          }}
        /></div>
         
         <div><input
          type="text"
          placeholder="Nom de la photo..."
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        /></div>
        
        <div></div>
        <input
          type="text"
          placeholder="Spécialité..."
          onChange={(event) => {
            setSpecialite(event.target.value);
          }}
        />
      

<div><button onClick={createCoach}> Modification des données </button></div>
        
      </div>

        </div>
    )
}

export default Coachmodif;