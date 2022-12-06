/*Création des Schema*/

const mongoose = require("mongoose");
const ProfilSchema = new mongoose.Schema({
    profilNom: {
        type: String,
        required: true,
    },

    profilPrenom: {
        type: String,
        required: true,
    },

    profilAge: {
        type: Number, 
        required: true,

    },

    profilWeight: {
        type: Number,
        required: true,

    },

    profilActivite: {
        type: Number,
        required: true,
    }
});

const ProfilModel = mongoose.model("profil1", ProfilSchema);
module.exports = ProfilModel;