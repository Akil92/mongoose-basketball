const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema ({
    teamName: {
      type: String,
      unique: true,
    },
    playerName: [{
      type: String,
      unique: true,
    }],
    age: [{
      type: String,
      min: 13,
      max: 100
    }],
    position: [{
      type: String,
      enum: ["Point-Guard", "Shooting-Guard", "Small-Forward", "Power-Forward", "Center"]
    }],
    user: {
      ref: "User",
      type: Schema.Types.ObjectId
    },
    userName: {
      type: String,
    },
    userAvatar: {
      type: String
    }
});

module.exports = mongoose.model("Team", teamSchema);