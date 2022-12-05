import './models/Profil.js';

//*Variable qui nous permettra d'utiliser les fonctionnalités du Module Express*/
const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors');
/*création de l'app*/
const app = express ();

/*définition paramètres du serveur*/
const hostname='localhost';
const port= 3002;

const ProfilModel = require("./models/Profil.js");

/*permet de recevoir les infos du frontend*/
app.use(express.json());
app.use(cors());

//app.use(pro());

mongoose.connect("mongodb+srv://jade_poitout:technoweb2022@cluster0.u5kwszo.mongodb.net/profil?retryWrites=true&w=majority" /*correspond à la mongodb data base*/, {
useNewUrlParser: true,
});

/*var router = express.Router();*/


//Permet la mise à jour des données
app.post('/insert', async (req,res) => {

   const nom= req.body.nom
   const prenom= req.body.prenom
   const age= req.body.age
   const poids= req.body.poids
   const activite= req.body.activite

   const profil = new ProfilModel({profilNom: nom, profilPrenom: prenom, profilAge: age, profilWeight: poids, profilActivite: activite});

   try {
    console.log(profil);
     await profil.save();
     res.send("inserted data");
   } catch(err) {
    console.log(err);
   }});

/*démarrage serveur*/
  app.listen(port, () => {
  console.log('Le serveur fonctionne sur https://${hostname}:${port} \n');


});

