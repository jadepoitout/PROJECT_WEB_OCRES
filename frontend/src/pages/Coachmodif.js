import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Coachmodif.css';

import { useState, useEffect } from "react";
import Axios from "axios";

function Coachmodif() {

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

  return (
    <div id="fondM">

      <Navbar />
      <div id="titre"><h1></h1></div>*
      <div></div>

      <div id="taille" >

        <h1>Ajout d'un coach </h1>

        <div id="form__group">
          <input
            type="text"
            class="form__field"
            placeholder="Nom..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <br></br>
        <div><input
          type="number"
          class="form__field"
          placeholder="Contact..."
          onChange={(event) => {
            setContact(event.target.value);
          }}
        /></div>

        <br></br>
        <div><input
          type="text"
          class="form__field"
          placeholder="Nom de la photo..."
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
        /></div>

        <br></br>
        <div><input
          type="text"
          class="form__field"
          placeholder="Spécialité..."
          onChange={(event) => {
            setSpecialite(event.target.value);
          }}
        /></div>



        <div><button onClick={createCoach} className="styleb"> Ajouter mon dernier coach </button></div>

      </div>

    </div>
  )
}

export default Coachmodif;