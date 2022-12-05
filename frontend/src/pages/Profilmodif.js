import Navbar from "../components/Navbar";
import Ccalendrier from "../components/Ccalendrier";
import './Accueil.css';
import './Profilmodif.css';
import React from "react";
import {useState} from "react";
import './Profilmodif.css';
import Axios from 'axios';

function Profilmodif () {


    const[nom, setNom] = useState('')
    const[prenom,setPrenom] = useState('')
    const[age,setAge] = useState(0)
    const[poids,setPoids] = useState(0)
    const[activite,setActivite] = useState(0)

    const savemodif=() => {
         //Mise à jour des données
        Axios.post("https://localhost:3002/insert", {
            nom: nom,
            prenom: prenom,
            age: age,
            poids: poids,
            activite: activite,
        });
    };

    return(
            <div id="fondP">
            <Navbar />
            <h1 className="titre">Modification de mes données</h1>
            
        
           <input type="text" class="form_field" placeholder="Nom" name="Nom" id='Nom' required 
           onChange={(event) => {setNom(event.target.value);}}/>
           <label for="Nom" class="form_label">Nom</label>
            
           <input type="text" class="form_field" placeholder="Prénom" name="Prénom" id='Prénom' required 
           onChange={(event) => {setPrenom(event.target.value);}} />
           <label for="Prénom" class="form_label">Prénom</label>

           <input type="number" class="form_field" placeholder="Age" name="Age" id='Age' required 
           onChange={(event) => {setAge(event.target.value);}}/>
           <label for="Age" class="form_label">Âge</label>

           <input type="number" class="form_field" placeholder="Poids" name="Poids" id='Poids' required 
           onChange={(event) => {setPoids(event.target.value);}}/>
           <label for="Poids" class="form_label">Poids</label>

           <input type="number" class="form_field" placeholder="Activité" name="Activité" id='Activité' required 
           onChange={(event) => {setActivite(event.target.value);}}/>
           <label for="Activité" class="form_label">Activité/Semaine</label>

           
           <button class="style" onClick={savemodif}>Enregistrer les modifications</button>

            </div>
    )
}

export default Profilmodif;



