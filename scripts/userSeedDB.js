/* eslint-disable no-unused-vars */
const mongoose = require("mongoose");
const db = require("../models");
const client = require("../client");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/3000"
);

const userSeed = [
  {
    username: "Andrew",
    email: "asdf@email.com",
    password: "asdf",
    picLink: "https://placehold.it/200x200",
    totalWins: 5,
    totalLosses: 8
  },
  {
    username: "Daniel",
    email: "Dan@email.com",
    password: "abcd",
    picLink: "https://placehold.it/200x200",
    totalWins: 3,
    totalLosses: 2
  },
  {
    username: "Joseph",
    email: "joseph@email.com",
    password: "joseph",
    picLink: "https://placehold.it/200x200",
    totalWins: 4,
    totalLosses: 3
  },
  {
    username: "nicky",
    email: "asdf@email.com",
    password: "trihn",
    picLink: "https://placehold.it/200x200",
    totalWins: 6,
    totalLosses: 2
  },
  {
    username: "sarath",
    email: "sarath@gmail.com",
    password: "sarath",
    picLink: "https://placehold.it/200x200",
    totalWins: 9,
    totalLosses: 1
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
