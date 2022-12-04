//*Variable qui nous permettra d'utiliser les fonctionnalités du Module Express*/
const express = require("express");
const mongoose = require("mongoose");
/*création de l'app*/
const app = express ();

/*définition paramètres du serveur*/
const hostname='localhost';
const port= 3002;

const ProfilModel = require("./models/Profil.js");

/*permet de recevoir les infos du frontend*/
app.use(express.json());
//app.use(pro());


mongoose.connect("mongodb+srv://jade_poitout:technowen2022@cluster0.u5kwszo.mongodb.net/profil?retryWrites=true&w=majority" /*correspond à la mongodb data base*/, {
useNewUrlParser: true,
});

/*var router = express.Router();*/

//A changer et à relier au frontend
/*Création d'une route(point dans notre API qui peut être requêtée). Implémentation de GET et PUT*/
/* GET homepage. */
/*app.get('/Accueil', (req, res) => {
  res.json({
    req: req.method,*/ /*objet de requête*/
    /*data: "This is a GET homepage"})  *//*objet de réponse*/
//});

/*PUT*/
/*app.put('/Calendrier', (req, res) => {
  res.json({
    req: req.method, *//*objet de requête*/
    /*data: "This is a PUT page" *//*objet de réponse*/
  //});
//});

/*POST*/
/*app.post('/Profil', (req,res) => {
  res.json({
    req: req.method, *//*objet de requête*/
    /*data: "This is a POST page" *//*objet de réponse*/
  //});
//});

app.get('/', async (req,res) => {
   const profil = new ProfilModel({profilNom: "DUPONT", profilPrenom: "Marine", profilAge: 24, profilWeight: 65});

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