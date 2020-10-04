const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Player's name is required."],
      minlength: [3, "Player's name must be at least 3 characters long."],
    },
    position: {
      type: String,
      required: [true, "Preferred position is required."],
      minlength: [3, "Please enter a proper position."],
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports.Player = mongoose.model("Player", PlayerSchema);
