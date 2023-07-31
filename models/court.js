const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courtSchema = new Schema({
  courtNo: {
    type: Number,
    enum: [1, 2, 3, 4]
  },  
  playingTime: {
    type: String,
    enum: ["10:00-12:30", "1:00-3:30", "4:00-6:30", "7:00-9:30"]
  },
  teams: [{
    ref: "Team",
    type: Schema.Types.ObjectId,}],
  date: {
    type: Date,
    default: function() {
    return new Date(+ new Date());
    },
  },
})



module.exports = mongoose.model("Court", courtSchema);