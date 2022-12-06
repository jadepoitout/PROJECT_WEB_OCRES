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
  weight: {
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
