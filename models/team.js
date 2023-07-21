const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    TeamName: {
      type: String,
    },
    playerName: {
      type: String,
    },
    Age: {
      type: Number,
      min: 13,
      max: 100
    },
    Position: {
      type: String,
      enum: ["Point-Guard", "Shoting-Guard", "Small-Foward", "Power-Forward", "Center"]
    }
})