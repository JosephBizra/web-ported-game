/* eslint-disable no-undef */
const mongoose = require("mongoose");
const db = require("../models");
const User = require("../models/index.js")

const testUser = {
  email: "abcd@.com",
  password: "abcd"
}

// Remove all of our users and then try and make a new one
User.remove({}).then(() => {
  User.create(testUser).then(user => {
      console.log(user)
      return user.checkPassword(testUser.password)
  }).then(result => {
      console.log(result)
      mongoose.connection.close()
  })
})

// This file empties the Games collection and inserts the Games below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/3000"
);

db.Game
  .remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
