const mongoose = require("mongoose");
const db = require("../models");

// This Deletes database and reloads data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/PoliticalRace"
);

// Data
const userSeed = [
    {
        name: "Andrew Griswold",
        password: "Unicornsrkool",
        email: "1223@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
    },
    {
        name: "Bob Dylan",
        password: "poetry",
        email: "16565463@gmail.com",
        lap_time: 5.34,
        wins: 10,
        losses: 2
      },
      {
        name: "Andrew Griswold",
        password: "Unicornsrkool",
        email: "1223@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Andrew Griswold",
        password: "Unicornsrkool",
        email: "1223@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Andrew Griswold",
        password: "Unicornsrkool",
        email: "1223@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Andrew Griswold",
        password: "Unicornsrkool",
        email: "1223@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " data inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });