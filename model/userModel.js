const mongoose = require("mongoose");
const gameModeSchema = require("./gameModeSchema");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  avatar: {
    type: String,
    default: "0.svg",
  },
  matchesWon: { type: Number, default: 0 },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  leaderBoardData: {
    rank: {
      type: Number,
    },
    highScores: {
      easy: {
        type: Number,
        default: 0,
      },
      medium: {
        type: Number,
        default: 0,
      },
      hard: {
        type: Number,
        default: 0,
      },
    },
  },

  gamesPlayed: {
    easy: [gameModeSchema],
    medium: [gameModeSchema],
    hard: [gameModeSchema],
  },
});
module.exports = mongoose.model("users", userSchema);
