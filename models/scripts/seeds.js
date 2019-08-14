const mongoose = require("mongoose");
const db = require("../models");

// This Deletes database and reloads data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

// Data
const userSeed = [
  {
      name: "Andrew",
      password: "Unicornsrkool",
      email: "1223@gmail.com",
      best_lap: 3.34,
      wins: 2,
      losses: 5
  },
  {
      name: "Mario",
      password: "poetry",
      email: "16565463@gmail.com",
      best_lap: 5.26,
      wins: 10,
      losses: 4
    },
    {
      name: "Randy Marsh",
      password: "ptutrle",
      email: "bradpitt@gmail.com",
      best_lap: 4.05,
      wins: 10,
      losses: 12
    },
    {
      name: "Tom Clancy",
      password: "stuff",
      email: "tom@gmail.com",
      best_lap: 7.00,
      wins: 2,
      losses: 5
    },
    {
      name: "Peter the Penguin",
      password: "clubpenguin",
      email: "peter@gmail.com",
      best_lap: 2.54,
      wins: 9,
      losses: 5
    },
    {
      name: "Joseph",
      password: "codestuff",
      email: "joseph@gmail.com",
      best_lap: 3.27,
      wins: 10,
      losses: 3
    },
    {
      name: "Sharath",
      password: "codingggg",
      email: "sharath@gmail.com",
      best_lap: 3.10,
      wins: 8,
      losses: 4
    },
    {
      name: "Daniel",
      password: "programmer",
      email: "dan@gmail.com",
      best_lap: 3.14,
      wins: 20,
      losses: 10
    },
    {
      name: "Nikita",
      password: "101010101101",
      email: "nik@gmail.com",
      best_lap: 3.09,
      wins: 5,
      losses: 5
    },
    {
      name: "Gary",
      password: "Puppies",
      email: "mckay@gmail.com",
      best_lap: 3.29,
      wins: 2,
      losses: 5
    },
    {
      name: "Joe Bidden",
      password: "Obama",
      email: "Joebidden@gmail.com",
      best_lap: 3.13,
      wins: 6,
      losses: 2
    },
    {
      name: "Kool Aid Guy",
      password: "Cherryflavor",
      email: "KoolGuy@gmail.com",
      best_lap: 4.13,
      wins: 1,
      losses: 10
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