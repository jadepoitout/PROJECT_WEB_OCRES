const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  weightj: {
    type: Number,
    required: true,
  },
  weightf: {
    type: Number,
    required: true,
  },
  weightm: {
    type: Number,
    required: true,
  },
  weighta: {
    type: Number,
    required: true,
  },
  weightjma: {
    type: Number,
    required: true,
  },
  activity: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("profil1", DriverSchema);
module.exports = UserModel;
