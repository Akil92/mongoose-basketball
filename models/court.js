const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courtSchema = new Schema({
  playingTime: {
    type: Number,
    enum: ["10:00-12:30", "1:00-3:30", "4:00-6:30", "7:00-9:30"]
  },
  teams: [{
    ref: "team",
    type: Schema.Types.ObjectId,
  }] 
})



module.exports = mongoose.model("Court", courtSchema);