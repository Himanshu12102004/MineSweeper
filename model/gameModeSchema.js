const mongoose = require("mongoose");
const gameModeSchema = mongoose.Schema({
  date: { type: Date },
  points: { type: Number },
  hasWon: { type: Boolean },
  time: { type: Number },
  mode: { type: String },
  trophies: { type: Number, default: 0 },
});
module.exports = gameModeSchema;
