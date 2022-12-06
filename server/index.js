const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const CoachModel = require("./models/Coach");


const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://jade_poitout:technoweb2022@cluster0.u5kwszo.mongodb.net/profil?retryWrites=true&w=majority"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getCoachs", (req, res) => {
  CoachModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.post("/createCoach", async (req, res) => {
  const coach = req.body;
  const newCoach = new CoachModel(coach);
  await newCoach.save();

  res.json(coach);
});

app.listen(3002, () => {
  console.log("SERVER RUNS PERFECTLY!");
});
