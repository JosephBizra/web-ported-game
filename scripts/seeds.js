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
        name: "Brad Pitt",
        password: "ptutrle",
        email: "bradpitt@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Tom Clancy",
        password: "stuff",
        email: "tom@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Peter the Penguin",
        password: "clubpenguin",
        email: "peter@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Joseph",
        password: "codestuff",
        email: "joseph@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Sharath",
        password: "codingggg",
        email: "sharath@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Daniel",
        password: "programmer",
        email: "dan@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Nikita",
        password: "101010101101",
        email: "nik@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Mckayla",
        password: "Puppies",
        email: "mckay@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Joe Bidden",
        password: "Obama",
        email: "Joebidden@gmail.com",
        lap_time: 3.34,
        wins: 2,
        losses: 5
      },
      {
        name: "Kool Aid Guy",
        password: "Cherryflavor",
        email: "KoolGuy@gmail.com",
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