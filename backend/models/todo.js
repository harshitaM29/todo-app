const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("TODO", todoSchema);
