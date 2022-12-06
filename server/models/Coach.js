const mongoose = require("mongoose");

const CoachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  specialite: {
    type: String,
    required: true,
  },
});

const CoachModel = mongoose.model("coachlist1", CoachSchema);
module.exports = CoachModel;
