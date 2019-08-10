const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  lap_time: { type: Number, default: 0},
  wins: { type: Number, default: 0},
  losses: { type: Number, default: 0}
});

const User = mongoose.model("User", userSchema);

module.exports = User;