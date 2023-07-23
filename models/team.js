const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    teamName: {
      type: String,
    },
    playerName: {
      type: String,
    },
    age: {
      type: Number,
      min: 13,
      max: 100
    },
    position: {
      type: String,
      enum: ["Point-Guard", "Shoting-Guard", "Small-Foward", "Power-Forward", "Center"]
    }
})